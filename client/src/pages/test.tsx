import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { questions } from "@/data/questions";
import { TestAnswer, calculateDominantArchetype, getProgress, canProceed } from "@/lib/test-logic";

export default function Test() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = getProgress(currentQuestionIndex);
  const canGoNext = selectedOption !== null;
  const canGoPrev = currentQuestionIndex > 0;

  // Load previous answer if exists
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionIndex === currentQuestionIndex);
    setSelectedOption(existingAnswer ? existingAnswer.optionIndex : null);
  }, [currentQuestionIndex, answers]);

  const selectOption = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    setSelectedOption(optionIndex);
    
    // Update answers array
    const newAnswers = answers.filter(a => a.questionIndex !== currentQuestionIndex);
    newAnswers.push({
      questionIndex: currentQuestionIndex,
      optionIndex,
      archetype: option.archetype
    });
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Test complete, go to results
      const dominantArchetype = calculateDominantArchetype(answers);
      setLocation(`/results?archetype=${dominantArchetype}`);
    }
  };

  const prevQuestion = () => {
    if (canGoPrev) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header with Back to Home button */}
        <motion.div 
          className="flex justify-between items-center mb-4 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="outline"
            onClick={goHome}
            className="px-2 py-2 md:px-4 md:py-2 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))] text-xs md:text-sm"
          >
            <Home className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Button>
          <h1 className="font-serif text-lg md:text-2xl text-[hsl(var(--silver-glow))]">Shadow Test</h1>
          <div className="w-16 md:w-32" /> {/* Spacer for centering */}
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-4 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-2 md:mb-4">
            <span className="text-[hsl(var(--metallic-silver))] font-medium text-sm md:text-base">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-[hsl(var(--metallic-silver))] font-medium text-sm md:text-base">
              {progress.toFixed(1)}%
            </span>
          </div>
          <Progress 
            value={progress} 
            className="w-full h-2 bg-[hsl(var(--dark-gray))]"
          />
        </motion.div>

        {/* Question Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              className="question-card rounded-2xl p-3 md:p-8 mb-4 md:mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-base md:text-2xl font-semibold text-[hsl(var(--silver-glow))] mb-4 md:mb-6 leading-relaxed">
                {currentQuestion.text}
              </h2>
              
              <div className="space-y-2 md:space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.div
                    key={index}
                    className={`answer-option p-2 md:p-3 rounded-xl cursor-pointer ${
                      selectedOption === index ? 'selected' : ''
                    }`}
                    onClick={() => selectOption(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-[hsl(var(--metallic-silver))] rounded-full mr-2 md:mr-4 flex items-center justify-center flex-shrink-0">
                        <div 
                          className={`w-2 h-2 md:w-3 md:h-3 bg-[hsl(var(--metallic-silver))] rounded-full transition-opacity duration-300 ${
                            selectedOption === index ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                      <span className="text-[hsl(var(--silver-glow))] text-sm md:text-base leading-relaxed">{option.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="flex justify-between items-center mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={!canGoPrev}
              className="px-3 py-2 md:px-6 md:py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!canGoNext}
              className="px-4 py-2 md:px-6 md:py-3 bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

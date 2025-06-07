import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home, Shield } from "lucide-react";
import { toxicityQuestions } from "@/data/toxicity-questions";
import { ToxicityAnswer, calculateToxicityResult, getToxicityProgress, canToxicityProceed } from "@/lib/toxicity-logic";

export default function ToxicityCompass() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ToxicityAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = toxicityQuestions[currentQuestionIndex];
  const progress = getToxicityProgress(currentQuestionIndex);
  const canGoNext = selectedOption !== null;
  const canGoPrev = currentQuestionIndex > 0;

  // Load saved state on component mount
  useEffect(() => {
    try {
      // Check if test is already completed
      const savedProgress = localStorage.getItem('psychTestProgress');
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        if (progress.toxicityCompass) {
          // Test already completed, redirect to results
          setLocation('/toxicity-results');
          return;
        }
      }

      // Load saved test state
      const savedState = localStorage.getItem('toxicityCompassState');
      if (savedState) {
        const state = JSON.parse(savedState);
        if (state.currentQuestionIndex !== undefined && Array.isArray(state.answers)) {
          setCurrentQuestionIndex(state.currentQuestionIndex);
          setAnswers(state.answers);
        }
      }
    } catch (error) {
      console.warn('Error loading toxicity compass state:', error);
      localStorage.removeItem('toxicityCompassState');
    }
  }, [setLocation]);

  // Save state whenever it changes
  useEffect(() => {
    const state = {
      currentQuestionIndex,
      answers
    };
    localStorage.setItem('toxicityCompassState', JSON.stringify(state));
  }, [currentQuestionIndex, answers]);

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
      value: option.value
    });
    setAnswers(newAnswers);

    // Auto-advance after a short delay
    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < toxicityQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Test complete, go to results
        const result = calculateToxicityResult([...newAnswers]);
        setLocation(`/toxicity-results?zone=${result.zone}&score=${result.score}&percentage=${result.percentage.toFixed(1)}`);
      }
    }, 600);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < toxicityQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Test complete, go to results
      const result = calculateToxicityResult(answers);
      setLocation(`/toxicity-results?zone=${result.zone}&score=${result.score}&percentage=${result.percentage.toFixed(1)}`);
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
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-red-900/20 to-[hsl(var(--deep-black))]" />
      
      <motion.header 
        className="relative z-20 p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/journey")}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey
            </Button>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="h-6 w-6 text-red-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Toxicity Compass
                </h1>
              </div>
              <div className="text-sm text-[hsl(var(--metallic-silver))]">
                Question {currentQuestionIndex + 1} of {toxicityQuestions.length}
              </div>
            </div>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </motion.header>
      
      <div className="relative z-10 container mx-auto px-6 py-8 max-w-4xl">

        {/* Progress Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[hsl(var(--dark-gray))]/50 rounded-full h-2 mb-2 backdrop-blur-sm border border-[hsl(var(--border))]">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-center text-sm text-[hsl(var(--metallic-silver))]">
            {progress.toFixed(1)}% Complete
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            className="bg-[hsl(var(--dark-gray))]/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-[hsl(var(--border))] shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-400/20 text-red-300 rounded-full text-sm font-medium border border-red-400/30">
                {currentQuestion.category}
              </span>
            </motion.div>
            
            {/* Question Text */}
            <motion.h2 
              className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentQuestion.text}
            </motion.h2>
            
            {/* Answer Options */}
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-3 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedOption === index
                      ? 'bg-gradient-to-r from-red-500/20 to-orange-400/20 border-red-400 text-[hsl(var(--silver-glow))] shadow-lg transform scale-[1.02]'
                      : 'bg-[hsl(var(--dark-gray))]/20 border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:border-red-400/50 hover:bg-red-500/10'
                  }`}
                  onClick={() => selectOption(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: selectedOption === index ? 1.02 : 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-2 md:space-x-4 overflow-hidden">
                    <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-1 flex-shrink-0 ${
                      selectedOption === index 
                        ? 'border-red-400 bg-red-400' 
                        : 'border-[hsl(var(--metallic-silver))]'
                    }`}>
                      {selectedOption === index && (
                        <motion.div 
                          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium leading-relaxed break-words hyphens-auto flex-1 min-w-0 overflow-wrap-anywhere whitespace-pre-wrap">{option.text}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-10">
              {canGoPrev ? (
                <Button
                  variant="ghost"
                  onClick={prevQuestion}
                  className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              
              <div className="text-sm text-[hsl(var(--metallic-silver))]">
                {currentQuestionIndex + 1} of {toxicityQuestions.length}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
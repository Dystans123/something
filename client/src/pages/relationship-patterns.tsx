import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { relationshipPatternQuestions } from "@/data/relationship-pattern-questions";
import { 
  RelationshipPatternAnswer, 
  calculateRelationshipPatternResult, 
  getRelationshipPatternProgress, 
  canRelationshipPatternProceed 
} from "@/lib/relationship-pattern-logic";

export default function RelationshipPatterns() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<RelationshipPatternAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = relationshipPatternQuestions[currentQuestionIndex];
  const progress = getRelationshipPatternProgress(currentQuestionIndex);
  const canGoNext = selectedOption !== null;
  const canGoPrev = currentQuestionIndex > 0;

  // Load previous answer if exists
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionIndex === currentQuestionIndex);
    setSelectedOption(existingAnswer ? existingAnswer.optionIndex : null);
  }, [currentQuestionIndex, answers]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    const option = currentQuestion.options[optionIndex];
    const answer: RelationshipPatternAnswer = {
      questionIndex: currentQuestionIndex,
      optionIndex,
      pattern: option.pattern,
      value: option.value
    };

    // Update answers array
    const newAnswers = answers.filter(a => a.questionIndex !== currentQuestionIndex);
    newAnswers.push(answer);
    setAnswers(newAnswers);

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < relationshipPatternQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Test complete, go to results
        const result = calculateRelationshipPatternResult([...newAnswers]);
        const params = new URLSearchParams({
          pattern: result.dominantPattern,
          scores: JSON.stringify(result.patternScores),
          insights: JSON.stringify(result.insights),
          recommendations: JSON.stringify(result.recommendations)
        });
        setLocation(`/relationship-pattern-results?${params.toString()}`);
      }
    }, 600);
  };

  const nextQuestion = () => {
    if (!canGoNext) return;
    
    if (currentQuestionIndex === relationshipPatternQuestions.length - 1) {
      // Test complete, calculate results and navigate
      const updatedAnswers = answers.filter(a => a.questionIndex !== currentQuestionIndex);
      const option = currentQuestion.options[selectedOption!];
      const finalAnswer: RelationshipPatternAnswer = {
        questionIndex: currentQuestionIndex,
        optionIndex: selectedOption!,
        pattern: option.pattern,
        value: option.value
      };
      const allAnswers = [...updatedAnswers, finalAnswer];
      
      const result = calculateRelationshipPatternResult(allAnswers);
      const params = new URLSearchParams({
        pattern: result.dominantPattern,
        scores: JSON.stringify(result.patternScores),
        insights: JSON.stringify(result.insights),
        recommendations: JSON.stringify(result.recommendations)
      });
      setLocation(`/relationship-pattern-results?${params.toString()}`);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const prevQuestion = () => {
    if (canGoPrev) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="outline"
            onClick={goHome}
            className="px-3 py-2 text-sm bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
          >
            <Home className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Button>
          <h1 className="font-serif text-2xl text-[hsl(var(--silver-glow))]">Relationship Pattern Recognition</h1>
          <div className="w-32" />
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[hsl(var(--metallic-silver))]">Progress</span>
            <span className="text-sm text-[hsl(var(--metallic-silver))]">
              {currentQuestionIndex + 1} of {relationshipPatternQuestions.length}
            </span>
          </div>
          <Progress 
            value={progress} 
            className="w-full h-2 bg-[hsl(var(--dark-gray))]"
          />
        </motion.div>

        {/* Question Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8">
            <div className="text-center mb-8">
              <div className="text-sm text-[hsl(var(--metallic-silver))] mb-2">
                {currentQuestion.category}
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] leading-relaxed">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={`${currentQuestionIndex}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                      selectedOption === index
                        ? 'border-[hsl(var(--metallic-silver))] bg-[hsl(var(--metallic-silver)/0.1)] text-[hsl(var(--silver-glow))]'
                        : 'border-[hsl(var(--metallic-silver)/0.3)] bg-transparent text-[hsl(var(--metallic-silver))] hover:border-[hsl(var(--metallic-silver)/0.6)] hover:bg-[hsl(var(--metallic-silver)/0.05)]'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        selectedOption === index
                          ? 'border-[hsl(var(--metallic-silver))] bg-[hsl(var(--metallic-silver))]'
                          : 'border-[hsl(var(--metallic-silver)/0.5)]'
                      }`} />
                      <span className="text-base">{option.text}</span>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={!canGoPrev}
              className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!canGoNext}
              className="px-6 py-3 bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestionIndex === relationshipPatternQuestions.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Compass, ArrowLeft, ArrowRight } from "lucide-react";
import { identityCompassQuestions } from "@/data/identity-compass-questions";
import { 
  IdentityCompassAnswer, 
  IdentityCompassState, 
  getIdentityCompassProgress, 
  canIdentityCompassProceed 
} from "@/lib/identity-compass-logic";

export default function IdentityCompass() {
  const [, setLocation] = useLocation();
  const [state, setState] = useState<IdentityCompassState>({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('identityCompassState');
    if (saved) {
      setState(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('identityCompassState', JSON.stringify(state));
  }, [state]);

  const currentQuestion = identityCompassQuestions[state.currentQuestionIndex];
  const progress = getIdentityCompassProgress(state.currentQuestionIndex);

  const handleAnswer = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    const answer: IdentityCompassAnswer = {
      questionIndex: state.currentQuestionIndex,
      optionIndex,
      identity: option.identity,
      value: option.value
    };

    const newAnswers = [...state.answers];
    const existingIndex = newAnswers.findIndex(a => a.questionIndex === state.currentQuestionIndex);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = answer;
    } else {
      newAnswers.push(answer);
    }

    setState(prev => ({
      ...prev,
      answers: newAnswers
    }));

    // Auto-advance after a short delay
    setTimeout(() => {
      const nextQuestionIndex = state.currentQuestionIndex + 1;
      if (nextQuestionIndex < identityCompassQuestions.length) {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: nextQuestionIndex
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setState(prev => ({ ...prev, isComplete: true }));
        localStorage.setItem('identityCompassResult', JSON.stringify(newAnswers));
        setLocation('/identity-compass-results');
      }
    }, 600);
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < identityCompassQuestions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      setState(prev => ({ ...prev, isComplete: true }));
      localStorage.setItem('identityCompassResult', JSON.stringify(state.answers));
      setLocation('/identity-compass-results');
    }
  };

  const previousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const selectedAnswer = state.answers.find(a => a.questionIndex === state.currentQuestionIndex);

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-emerald-900/20 to-[hsl(var(--deep-black))]" />
      
      <motion.header 
        className="relative z-20 p-4 md:p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocation("/journey")}
                className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
              >
                <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">Back to Journey</span>
              </Button>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-1 md:mb-2">
                <Compass className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                <h1 className="font-serif text-lg md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Identity Compass
                </h1>
              </div>
              <Badge variant="outline" className="text-emerald-400 border-emerald-400 text-xs md:text-sm">
                Question {state.currentQuestionIndex + 1} of {identityCompassQuestions.length}
              </Badge>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-xs md:text-sm text-[hsl(var(--metallic-silver))] mb-2">Progress</div>
              <Progress value={progress} className="w-full md:w-32" />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5" />
              
              <CardHeader className="text-center relative z-10 pb-6 md:pb-8 p-4 md:p-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                >
                  <Compass className="h-8 w-8 md:h-10 md:w-10 text-emerald-400" />
                </motion.div>
                
                <h2 className="font-serif text-lg md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-3 md:mb-4 leading-tight">
                  {currentQuestion.text}
                </h2>
                
                <Badge variant="outline" className="text-emerald-400 border-emerald-400 text-xs md:text-sm">
                  {currentQuestion.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
                {currentQuestion.options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full p-3 md:p-4 h-auto text-left justify-start transition-all duration-300 ${
                        selectedAnswer?.optionIndex === index
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg'
                          : 'bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:border-emerald-400/50 hover:bg-emerald-500/10'
                      }`}
                      onClick={() => handleAnswer(index)}
                    >
                      <div className="flex items-start w-full min-h-0 overflow-hidden">
                        <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 mr-2 md:mr-4 mt-1 flex-shrink-0 ${
                          selectedAnswer?.optionIndex === index
                            ? 'bg-emerald-400 border-emerald-400'
                            : 'border-gray-500'
                        }`} />
                        <span className="text-xs sm:text-sm md:text-base leading-relaxed break-words hyphens-auto flex-1 min-w-0 overflow-wrap-anywhere whitespace-pre-wrap">{option.text}</span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Previous Question Arrow */}
        {state.currentQuestionIndex > 0 && (
          <motion.div 
            className="flex justify-start mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={previousQuestion}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))] p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
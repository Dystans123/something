import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { attachmentStyleQuestions } from "@/data/attachment-style-questions";
import { 
  AttachmentStyleAnswer, 
  AttachmentStyleState, 
  getAttachmentStyleProgress, 
  canAttachmentStyleProceed 
} from "@/lib/attachment-style-logic";

export default function AttachmentStyle() {
  const [, setLocation] = useLocation();
  const [state, setState] = useState<AttachmentStyleState>({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false
  });

  useEffect(() => {
    try {
      // Check if test is already completed
      const savedProgress = localStorage.getItem('psychTestProgress');
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        if (progress.attachmentStyle) {
          setLocation('/attachment-style-results');
          return;
        }
      }

      // Load saved test state
      const saved = localStorage.getItem('attachmentStyleState');
      if (saved) {
        const parsedState = JSON.parse(saved);
        if (parsedState && 
            typeof parsedState.currentQuestionIndex === 'number' &&
            Array.isArray(parsedState.answers) &&
            parsedState.currentQuestionIndex >= 0 &&
            parsedState.currentQuestionIndex < attachmentStyleQuestions.length) {
          setState(parsedState);
        }
      }

      // Check if results already exist
      const savedResults = localStorage.getItem('attachmentStyleResult');
      if (savedResults) {
        setLocation('/attachment-style-results');
      }
    } catch (error) {
      console.warn('Error loading attachment style state:', error);
      localStorage.removeItem('attachmentStyleState');
      localStorage.removeItem('attachmentStyleResult');
    }
  }, [setLocation]);

  useEffect(() => {
    localStorage.setItem('attachmentStyleState', JSON.stringify(state));
  }, [state]);

  const currentQuestion = attachmentStyleQuestions[state.currentQuestionIndex];
  const progress = getAttachmentStyleProgress(state.currentQuestionIndex);

  const handleAnswer = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    const answer: AttachmentStyleAnswer = {
      questionIndex: state.currentQuestionIndex,
      optionIndex,
      style: option.style,
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
      if (nextQuestionIndex < attachmentStyleQuestions.length) {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: nextQuestionIndex
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setState(prev => ({ ...prev, isComplete: true }));
        localStorage.setItem('attachmentStyleResult', JSON.stringify(newAnswers));
        setLocation('/attachment-style-results');
      }
    }, 600);
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < attachmentStyleQuestions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      setState(prev => ({ ...prev, isComplete: true }));
      localStorage.setItem('attachmentStyleResult', JSON.stringify(state.answers));
      setLocation('/attachment-style-results');
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
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-pink-900/20 to-[hsl(var(--deep-black))]" />
      
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
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-400" />
                <h1 className="font-serif text-lg md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Attachment Style Audit
                </h1>
              </div>
              <Badge variant="outline" className="text-pink-400 border-pink-400 text-xs md:text-sm">
                Question {state.currentQuestionIndex + 1} of {attachmentStyleQuestions.length}
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
            <Card className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5" />
              
              <CardHeader className="text-center relative z-10 pb-6 md:pb-8 p-4 md:p-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                >
                  <Heart className="h-8 w-8 md:h-10 md:w-10 text-pink-400" />
                </motion.div>
                
                <h2 className="font-serif text-lg md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-3 md:mb-4 leading-tight">
                  {currentQuestion.text}
                </h2>
                
                <Badge variant="outline" className="text-pink-400 border-pink-400 text-xs md:text-sm">
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
                          ? 'bg-pink-500/20 border-pink-400 text-pink-300 shadow-lg'
                          : 'bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:border-pink-400/50 hover:bg-pink-500/10'
                      }`}
                      onClick={() => handleAnswer(index)}
                    >
                      <div className="flex items-start w-full min-h-0 overflow-hidden">
                        <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 mr-2 md:mr-4 mt-1 flex-shrink-0 ${
                          selectedAnswer?.optionIndex === index
                            ? 'bg-pink-400 border-pink-400'
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
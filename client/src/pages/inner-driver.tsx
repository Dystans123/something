import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { innerDriverQuestions } from "@/data/inner-driver-questions";
import { 
  InnerDriverAnswer, 
  InnerDriverState, 
  getInnerDriverProgress, 
  canInnerDriverProceed 
} from "@/lib/inner-driver-logic";

export default function InnerDriver() {
  const [, setLocation] = useLocation();
  const [state, setState] = useState<InnerDriverState>({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('innerDriverState');
    if (saved) {
      setState(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('innerDriverState', JSON.stringify(state));
  }, [state]);

  const currentQuestion = innerDriverQuestions[state.currentQuestionIndex];
  const progress = getInnerDriverProgress(state.currentQuestionIndex);

  const handleAnswer = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    const answer: InnerDriverAnswer = {
      questionIndex: state.currentQuestionIndex,
      optionIndex,
      driver: option.driver,
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
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < innerDriverQuestions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      setState(prev => ({ ...prev, isComplete: true }));
      localStorage.setItem('innerDriverResult', JSON.stringify(state.answers));
      setLocation('/inner-driver-results');
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
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-yellow-900/20 to-[hsl(var(--deep-black))]" />
      
      <motion.header 
        className="relative z-20 p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocation("/journey")}
                className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Journey
              </Button>
            </div>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="h-6 w-6 text-yellow-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Inner Driver Matrix
                </h1>
              </div>
              <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                Question {state.currentQuestionIndex + 1} of {innerDriverQuestions.length}
              </Badge>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-[hsl(var(--metallic-silver))] mb-2">Progress</div>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5" />
              
              <CardHeader className="text-center relative z-10 pb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Zap className="h-10 w-10 text-yellow-400" />
                </motion.div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                  {currentQuestion.text}
                </h2>
                
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                  {currentQuestion.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full p-6 h-auto text-left justify-start transition-all duration-300 ${
                        selectedAnswer?.optionIndex === index
                          ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 shadow-lg'
                          : 'bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:border-yellow-400/50 hover:bg-yellow-500/10'
                      }`}
                      onClick={() => handleAnswer(index)}
                    >
                      <div className="flex items-center w-full">
                        <div className={`w-4 h-4 rounded-full border-2 mr-4 ${
                          selectedAnswer?.optionIndex === index
                            ? 'bg-yellow-400 border-yellow-400'
                            : 'border-gray-500'
                        }`} />
                        <span className="text-base leading-relaxed">{option.text}</span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="flex justify-between items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            variant="outline"
            onClick={previousQuestion}
            disabled={state.currentQuestionIndex === 0}
            className="px-6 py-3"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <div className="text-center">
            <div className="text-sm text-[hsl(var(--metallic-silver))] mb-2">
              Question {state.currentQuestionIndex + 1} of {innerDriverQuestions.length}
            </div>
            <Progress value={progress} className="w-48" />
          </div>
          
          <Button
            onClick={nextQuestion}
            disabled={!canInnerDriverProceed(state.answers, state.currentQuestionIndex)}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white border-0"
          >
            {state.currentQuestionIndex === innerDriverQuestions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
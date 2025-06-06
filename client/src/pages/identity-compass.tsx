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
                <Compass className="h-6 w-6 text-emerald-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Identity Compass
                </h1>
              </div>
              <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                Question {state.currentQuestionIndex + 1} of {identityCompassQuestions.length}
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
            <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5" />
              
              <CardHeader className="text-center relative z-10 pb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Compass className="h-10 w-10 text-emerald-400" />
                </motion.div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                  {currentQuestion.text}
                </h2>
                
                <Badge variant="outline" className="text-emerald-400 border-emerald-400">
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
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg'
                          : 'bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:border-emerald-400/50 hover:bg-emerald-500/10'
                      }`}
                      onClick={() => handleAnswer(index)}
                    >
                      <div className="flex items-center w-full">
                        <div className={`w-4 h-4 rounded-full border-2 mr-4 ${
                          selectedAnswer?.optionIndex === index
                            ? 'bg-emerald-400 border-emerald-400'
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
              Question {state.currentQuestionIndex + 1} of {identityCompassQuestions.length}
            </div>
            <Progress value={progress} className="w-48" />
          </div>
          
          <Button
            onClick={nextQuestion}
            disabled={!canIdentityCompassProceed(state.answers, state.currentQuestionIndex)}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0"
          >
            {state.currentQuestionIndex === identityCompassQuestions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
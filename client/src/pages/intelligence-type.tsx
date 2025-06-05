import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Brain, Target, Lightbulb, CheckCircle } from "lucide-react";
import { intelligenceTypeQuestions } from "@/data/intelligence-type-questions";
import { 
  IntelligenceTypeAnswer, 
  IntelligenceTypeState, 
  getIntelligenceTypeProgress, 
  canIntelligenceTypeProceed 
} from "@/lib/intelligence-type-logic";
import { SmokeParticles } from "@/components/smoke-particles";

export default function IntelligenceType() {
  const [, setLocation] = useLocation();
  const [state, setState] = useState<IntelligenceTypeState>({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false
  });

  const currentQuestion = intelligenceTypeQuestions[state.currentQuestionIndex];
  const progress = getIntelligenceTypeProgress(state.currentQuestionIndex);
  const canProceed = canIntelligenceTypeProceed(state.answers, state.currentQuestionIndex);

  const handleAnswerSelect = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    const answer: IntelligenceTypeAnswer = {
      questionIndex: state.currentQuestionIndex,
      optionIndex,
      intelligence: option.intelligence,
      value: option.value
    };

    const newAnswers = [...state.answers.filter(a => a.questionIndex !== state.currentQuestionIndex), answer];
    
    setState(prev => ({
      ...prev,
      answers: newAnswers
    }));

    // Automatically proceed to next question after a short delay
    setTimeout(() => {
      if (state.currentQuestionIndex < intelligenceTypeQuestions.length - 1) {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1
        }));
      } else {
        // Test complete, go to results
        setLocation(`/intelligence-type-results?answers=${encodeURIComponent(JSON.stringify(newAnswers))}`);
      }
    }, 800);
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const selectedAnswer = state.answers.find(a => a.questionIndex === state.currentQuestionIndex);

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      <SmokeParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6 text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6 text-blue-400" />
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              Intelligence Type Assessment
            </Badge>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-4">
            Discover Your Intelligence Type
          </h1>
          <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto">
            Based on Howard Gardner's theory of multiple intelligences. 30 questions to reveal your cognitive strengths.
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[hsl(var(--metallic-silver))]">
              Question {state.currentQuestionIndex + 1} of {intelligenceTypeQuestions.length}
            </span>
            <span className="text-sm text-[hsl(var(--metallic-silver))]">
              {progress}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))] mb-8">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {currentQuestion.category}
                    </Badge>
                    <CardTitle className="text-xl md:text-2xl text-[hsl(var(--silver-glow))] leading-relaxed">
                      {currentQuestion.text}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedAnswer?.optionIndex === index
                        ? 'border-blue-400 bg-blue-500/10 text-[hsl(var(--silver-glow))]'
                        : 'border-[hsl(var(--border))] hover:border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer?.optionIndex === index 
                          ? 'border-blue-400 bg-blue-400' 
                          : 'border-[hsl(var(--metallic-silver))]'
                      }`}>
                        {selectedAnswer?.optionIndex === index && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="flex-1 leading-relaxed">{option.text}</span>
                    </div>
                  </motion.button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {state.currentQuestionIndex > 0 ? (
            <Button
              variant="ghost"
              onClick={handlePrevious}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Poprzednie
            </Button>
          ) : (
            <div></div>
          )}

          <div className="flex items-center space-x-2 text-sm text-[hsl(var(--metallic-silver))]">
            <Lightbulb className="h-4 w-4" />
            <span>Wybierz odpowiedź, która najlepiej Cię opisuje</span>
            {selectedAnswer && (
              <div className="flex items-center space-x-2 ml-4 text-blue-400">
                <ArrowRight className="h-4 w-4" />
                <span>Automatyczne przejście...</span>
              </div>
            )}
          </div>

          <div></div>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <blockquote className="text-lg italic text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto">
            "Everyone is a genius. But if you judge a fish by its ability to climb a tree, 
            it will live its whole life believing that it is stupid."
          </blockquote>
          <cite className="text-[hsl(var(--silver-glow))] font-semibold mt-2 block">
            — Albert Einstein
          </cite>
        </motion.div>
      </div>
    </div>
  );
}
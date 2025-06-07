import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  Share2,
  ArrowLeft,
  BookOpen,
  CheckCircle
} from "lucide-react";
import { calculateIntelligenceMapResult, shareIntelligenceMapResult } from "@/lib/intelligence-map-logic";
import { intelligenceTypes } from "@/data/intelligence-map-questions";

export default function IntelligenceMapResults() {
  const [, setLocation] = useLocation();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('intelligenceMapResult');
    if (savedAnswers) {
      const answers = JSON.parse(savedAnswers);
      const calculatedResult = calculateIntelligenceMapResult(answers);
      setResult(calculatedResult);
    } else {
      setLocation('/journey?type=single');
    }
  }, [setLocation]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[hsl(var(--deep-black))] flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-blue-400 mx-auto mb-4 animate-pulse" />
          <p className="text-[hsl(var(--metallic-silver))]">Analyzing your intelligence type...</p>
        </div>
      </div>
    );
  }

  const dominantType = intelligenceTypes[result.dominantIntelligence as keyof typeof intelligenceTypes];

  const continueJourney = () => {
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.intelligenceMap = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'intelligence-map');
    const newResult = {
      testId: 'intelligence-map',
      result: result,
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
    
    setLocation("/journey?type=single");
  };

  const backToJourney = () => {
    setLocation("/journey?type=single");
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-blue-900/20 to-[hsl(var(--deep-black))]" />
      
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
              onClick={backToJourney}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey
            </Button>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 mb-2">
                <Brain className="h-6 w-6 text-blue-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Intelligence Map Results
                </h1>
              </div>
              <Badge variant="outline" className="text-blue-400 border-blue-400">
                Test Completed
              </Badge>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareIntelligenceMapResult(dominantType.name)}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5" />
            
            <CardHeader className="text-center relative z-10 pb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Brain className="h-12 w-12 text-blue-400" />
              </motion.div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                {dominantType.name}
              </h2>
              
              <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto leading-relaxed">
                {dominantType.description}
              </p>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Intelligence Scores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                Intelligence Profile
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(result.intelligenceScores).map(([intelligence, score]) => {
                const type = intelligenceTypes[intelligence as keyof typeof intelligenceTypes];
                const numericScore = score as number;
                const maxScore = Math.max(...Object.values(result.intelligenceScores).map(s => s as number));
                const percentage = Math.round((numericScore / maxScore) * 100);
                
                return (
                  <div key={intelligence}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[hsl(var(--metallic-silver))]">{type.name}</span>
                      <span className="text-blue-400 font-semibold">{numericScore}</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Traits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-400" />
                Your Key Strengths
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {result.strengths.map((strength: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                  >
                    <Lightbulb className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-[hsl(var(--metallic-silver))]">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Career Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                Ideal Career Paths
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {result.careerSuggestions.map((career: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
                  >
                    <span className="text-[hsl(var(--metallic-silver))]">{career}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Development Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-amber-400" />
                Areas for Development
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {result.developmentAreas.map((area: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20"
                  >
                    <span className="text-[hsl(var(--metallic-silver))]">{area}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Button
            onClick={() => shareIntelligenceMapResult(dominantType.name)}
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-[hsl(var(--dark-gray))]/50 border-blue-400/50 text-blue-300 hover:bg-blue-500/10"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Share Results
          </Button>
          
          <Button
            onClick={continueJourney}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Continue Journey
            <Target className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
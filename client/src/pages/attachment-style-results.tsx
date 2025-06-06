import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  BookOpen, 
  Share2,
  ArrowLeft,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { calculateAttachmentStyleResult, shareAttachmentStyleResult } from "@/lib/attachment-style-logic";
import { attachmentStyles } from "@/data/attachment-style-questions";

export default function AttachmentStyleResults() {
  const [, setLocation] = useLocation();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('attachmentStyleResult');
    if (savedAnswers) {
      const answers = JSON.parse(savedAnswers);
      const calculatedResult = calculateAttachmentStyleResult(answers);
      setResult(calculatedResult);
    } else {
      setLocation('/journey');
    }
  }, [setLocation]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[hsl(var(--deep-black))] flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-12 w-12 text-pink-400 mx-auto mb-4 animate-pulse" />
          <p className="text-[hsl(var(--metallic-silver))]">Analyzing your attachment style...</p>
        </div>
      </div>
    );
  }

  const dominantStyle = attachmentStyles[result.dominantStyle as keyof typeof attachmentStyles];

  const continueJourney = () => {
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.attachmentStyle = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'attachment-style');
    const newResult = {
      testId: 'attachment-style',
      result: result,
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
    
    setLocation("/journey");
  };

  const backToJourney = () => {
    setLocation("/journey");
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-pink-900/20 to-[hsl(var(--deep-black))]" />
      
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
                <Heart className="h-6 w-6 text-pink-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Attachment Style Results
                </h1>
              </div>
              <Badge variant="outline" className="text-pink-400 border-pink-400">
                Test Completed
              </Badge>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareAttachmentStyleResult(dominantStyle.name)}
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
          <Card className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5" />
            
            <CardHeader className="text-center relative z-10 pb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Heart className="h-12 w-12 text-pink-400" />
              </motion.div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                {dominantStyle.name}
              </h2>
              
              <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto leading-relaxed">
                {dominantStyle.description}
              </p>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Attachment Scores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-pink-400" />
                Attachment Profile
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(result.styleScores).map(([style, score]) => {
                const styleInfo = attachmentStyles[style as keyof typeof attachmentStyles];
                const numericScore = score as number;
                const maxScore = Math.max(...Object.values(result.styleScores).map(s => s as number));
                const percentage = Math.round((numericScore / maxScore) * 100);
                
                return (
                  <div key={style}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[hsl(var(--metallic-silver))]">{styleInfo.name}</span>
                      <span className="text-pink-400 font-semibold">{numericScore}</span>
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
                Your Key Traits
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {result.traits.map((trait: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-[hsl(var(--metallic-silver))]">{trait}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-blue-400" />
                Your Strengths
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {result.strengths.map((strength: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20"
                  >
                    <span className="text-[hsl(var(--metallic-silver))]">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Growth Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-400" />
                Growth Areas
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {result.growthAreas.map((area: string, index: number) => (
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

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
            <CardHeader>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-purple-400" />
                Practical Tips
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {result.tips.map((tip: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                    className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
                  >
                    <span className="text-[hsl(var(--metallic-silver))]">{tip}</span>
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
            onClick={() => shareAttachmentStyleResult(dominantStyle.name)}
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-[hsl(var(--dark-gray))]/50 border-pink-400/50 text-pink-300 hover:bg-pink-500/10"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Share Results
          </Button>
          
          <Button
            onClick={continueJourney}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Continue Journey
            <Target className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
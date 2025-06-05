import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, RefreshCw, Home, Brain, Target, Star, TrendingUp } from "lucide-react";
import { integrationLevels } from "@/data/integration-guide-questions";
import { shareIntegrationGuideResult } from "@/lib/integration-guide-logic";

export default function IntegrationGuideResults() {
  const [, setLocation] = useLocation();
  const [level, setLevel] = useState<string>("emerging-awareness");
  const [score, setScore] = useState<number>(0);
  const [categoryScores, setCategoryScores] = useState<Record<string, number>>({});
  const [strengths, setStrengths] = useState<string[]>([]);
  const [growthAreas, setGrowthAreas] = useState<string[]>([]);
  const [guidance, setGuidance] = useState<string[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');
    const scoreParam = urlParams.get('score');
    const categoryScoresParam = urlParams.get('categoryScores');
    const strengthsParam = urlParams.get('strengths');
    const growthAreasParam = urlParams.get('growthAreas');
    const guidanceParam = urlParams.get('guidance');
    
    if (levelParam) setLevel(levelParam);
    if (scoreParam) setScore(parseFloat(scoreParam));
    if (categoryScoresParam) {
      try {
        setCategoryScores(JSON.parse(categoryScoresParam));
      } catch (e) {
        console.error('Error parsing category scores:', e);
      }
    }
    if (strengthsParam) {
      try {
        setStrengths(JSON.parse(strengthsParam));
      } catch (e) {
        console.error('Error parsing strengths:', e);
      }
    }
    if (growthAreasParam) {
      try {
        setGrowthAreas(JSON.parse(growthAreasParam));
      } catch (e) {
        console.error('Error parsing growth areas:', e);
      }
    }
    if (guidanceParam) {
      try {
        setGuidance(JSON.parse(guidanceParam));
      } catch (e) {
        console.error('Error parsing guidance:', e);
      }
    }
  }, []);

  const levelInfo = Object.entries(integrationLevels).find(([key]) => key === level);
  const levelData = levelInfo ? levelInfo[1] : integrationLevels["emerging-awareness"];

  const handleShare = () => {
    shareIntegrationGuideResult(level);
  };

  const retakeTest = () => {
    setLocation("/integration-guide");
  };

  const continueJourney = () => {
    // Mark integration guide as completed and redirect to journey
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.integrationGuide = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Store result for comprehensive summary
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'integration-guide');
    const newResult = {
      testId: 'integration-guide',
      result: { level, score, categoryScores, strengths, growthAreas, guidance },
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

  const getLevelColor = (levelKey: string) => {
    switch (levelKey) {
      case "integrated-awareness": return "from-green-500 to-emerald-600";
      case "compassionate-awareness": return "from-blue-500 to-cyan-600";
      case "developing-awareness": return "from-purple-500 to-indigo-600";
      case "emerging-awareness": return "from-yellow-500 to-orange-600";
      case "resistance": return "from-red-500 to-rose-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getScorePercentage = () => {
    return Math.round(((5 - score) / 4) * 100);
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--dark-gray))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your Integration Journey
            </motion.h1>
            
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Level Icon */}
              <motion.div 
                className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${getLevelColor(level)} rounded-full flex items-center justify-center animate-glow`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              >
                <Brain className="h-16 w-16 text-white" />
              </motion.div>

              {/* Level Name */}
              <motion.h2 
                className="font-serif text-2xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] text-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {levelData.name}
              </motion.h2>

              {/* Level Description */}
              <motion.p 
                className="text-lg text-[hsl(var(--metallic-silver))] text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {levelData.description}
              </motion.p>

              {/* Integration Score */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-sm text-[hsl(var(--metallic-silver))] mb-2">Integration Score</div>
                <div className="text-3xl font-bold text-[hsl(var(--silver-glow))]">
                  {getScorePercentage()}%
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Result
                </Button>
                
                <Button
                  onClick={retakeTest}
                  variant="outline"
                  className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake Test
                </Button>
                
                <Button
                  onClick={goHome}
                  className="px-6 py-3 bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </motion.div>
            </motion.div>

            {/* Level Characteristics */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                    <Target className="mr-2 h-4 w-4" />
                    Key Characteristics
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-4">
                    {levelData.characteristics.map((characteristic, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                        <Brain className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                        <span className="text-[hsl(var(--metallic-silver))]">{characteristic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Strengths Section */}
            {strengths.length > 0 && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-green-900/20 to-[hsl(var(--deep-black))] border-green-500/20">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-green-400 border-green-400">
                      <Star className="mr-2 h-4 w-4" />
                      Your Strengths
                    </Badge>
                    <div className="space-y-3">
                      {strengths.map((strength, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-900/10 rounded-lg">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Growth Areas Section */}
            {growthAreas.length > 0 && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-[hsl(var(--deep-black))] border-blue-500/20">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Growth Opportunities
                    </Badge>
                    <div className="space-y-3">
                      {growthAreas.map((area, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-900/10 rounded-lg">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Personalized Guidance */}
            {guidance.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-[hsl(var(--deep-black))] border-purple-500/20">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400">
                      <Target className="mr-2 h-4 w-4" />
                      Personalized Guidance
                    </Badge>
                    <div className="space-y-3">
                      {guidance.map((guidanceItem, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-purple-900/10 rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{guidanceItem}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
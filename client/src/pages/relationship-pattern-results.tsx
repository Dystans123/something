import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, RefreshCw, ArrowLeft, Users, Heart, Target, ArrowRight, Eye } from "lucide-react";
import { relationshipPatterns } from "@/data/relationship-pattern-questions";
import { shareRelationshipPatternResult } from "@/lib/relationship-pattern-logic";

export default function RelationshipPatternResults() {
  const [, setLocation] = useLocation();
  const [pattern, setPattern] = useState<string>("secure");
  const [patternScores, setPatternScores] = useState<Record<string, number>>({});
  const [insights, setInsights] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(window.location.search);
    const patternParam = urlParams.get('pattern');
    const scoresParam = urlParams.get('scores');
    const insightsParam = urlParams.get('insights');
    const recommendationsParam = urlParams.get('recommendations');
    
    if (patternParam) setPattern(patternParam);
    if (scoresParam) {
      try {
        setPatternScores(JSON.parse(scoresParam));
      } catch (e) {
        console.error('Error parsing scores:', e);
      }
    }
    if (insightsParam) {
      try {
        setInsights(JSON.parse(insightsParam));
      } catch (e) {
        console.error('Error parsing insights:', e);
      }
    }
    if (recommendationsParam) {
      try {
        setRecommendations(JSON.parse(recommendationsParam));
      } catch (e) {
        console.error('Error parsing recommendations:', e);
      }
    }

    // Automatically save results when component loads
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.relationshipPatterns = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'relationship-patterns');
    const newResult = {
      testId: 'relationship-patterns',
      result: { 
        dominantPattern: patternParam || pattern,
        patternScores: scoresParam ? JSON.parse(scoresParam) : patternScores,
        insights: insightsParam ? JSON.parse(insightsParam) : insights,
        recommendations: recommendationsParam ? JSON.parse(recommendationsParam) : recommendations
      },
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
  }, [pattern, patternScores, insights, recommendations]);

  // Map pattern names to correct keys in relationshipPatterns object
  const getPatternKey = (patternName: string): keyof typeof relationshipPatterns => {
    const patternMap: Record<string, keyof typeof relationshipPatterns> = {
      'secure-attachment': 'secure',
      'anxious-attachment': 'anxious', 
      'avoidant-attachment': 'avoidant',
      'dismissive-attachment': 'dismissive',
      'secure': 'secure',
      'anxious': 'anxious',
      'avoidant': 'avoidant',
      'dismissive': 'dismissive'
    };
    return patternMap[patternName] || 'secure';
  };

  const patternData = relationshipPatterns[getPatternKey(pattern)];

  const handleShare = () => {
    shareRelationshipPatternResult(pattern);
  };

  const retakeTest = () => {
    setLocation("/relationship-patterns");
  };

  const continueJourney = () => {
    // Mark relationship patterns as completed and redirect to journey
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.relationshipPatterns = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Store result for comprehensive summary
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'relationship-patterns');
    const newResult = {
      testId: 'relationship-patterns',
      result: { pattern, patternScores, insights, recommendations },
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

  const getPatternColor = (patternKey: string) => {
    switch (patternKey) {
      case "secure": return "from-green-500 to-emerald-600";
      case "anxious": return "from-yellow-500 to-orange-600";
      case "avoidant": return "from-blue-500 to-indigo-600";
      case "dismissive": return "from-purple-500 to-pink-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

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
                <Users className="h-6 w-6 text-emerald-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Relationship Pattern Results
                </h1>
              </div>
              <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                Test Completed
              </Badge>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="text-[hsl(var(--metallic-silver))] border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pattern Header Card */}
          <motion.div 
            className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Pattern Icon */}
            <motion.div 
              className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${getPatternColor(pattern)} rounded-full flex items-center justify-center`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            >
              <Users className="h-16 w-16 text-white" />
            </motion.div>

            {/* Pattern Name */}
            <motion.h2 
              className="font-serif text-2xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {patternData.name}
            </motion.h2>

            {/* Pattern Description */}
            <motion.p 
              className="text-lg text-[hsl(var(--metallic-silver))] text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              {patternData.description}
            </motion.p>

            {/* Pattern Traits */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 text-center">
                Key Traits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {patternData.traits?.map((trait: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                    <Heart className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                    <span className="text-[hsl(var(--metallic-silver))]">{trait}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Insights and Recommendations */}
          {(insights.length > 0 || recommendations.length > 0) && (
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {insights.length > 0 && (
                <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))]">
                  <CardHeader>
                    <h3 className="font-serif text-lg font-bold text-[hsl(var(--silver-glow))] flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-purple-400" />
                      Key Insights
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {insights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-[hsl(var(--deep-black)/0.3)] rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {recommendations.length > 0 && (
                <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))]">
                  <CardHeader>
                    <h3 className="font-serif text-lg font-bold text-[hsl(var(--silver-glow))] flex items-center">
                      <Target className="h-5 w-5 mr-2 text-emerald-400" />
                      Recommendations
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-[hsl(var(--deep-black)/0.3)] rounded-lg">
                          <div className="w-2 h-2 bg-[hsl(var(--metallic-silver))] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{recommendation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <Button
              onClick={continueJourney}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0"
            >
              Continue Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              onClick={retakeTest}
              className="border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--dark-gray))]"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Retake Test
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
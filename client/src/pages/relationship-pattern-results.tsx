import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, RefreshCw, Home, Users, Heart, Target } from "lucide-react";
import { relationshipPatterns } from "@/data/relationship-pattern-questions";
import { shareRelationshipPatternResult } from "@/lib/relationship-pattern-logic";

export default function RelationshipPatternResults() {
  const [, setLocation] = useLocation();
  const [pattern, setPattern] = useState<string>("secure-attachment");
  const [patternScores, setPatternScores] = useState<Record<string, number>>({});
  const [insights, setInsights] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
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
  }, []);

  const patternInfo = Object.entries(relationshipPatterns).find(([key]) => key === pattern);
  const patternData = patternInfo ? patternInfo[1] : relationshipPatterns["secure-attachment"];

  const handleShare = () => {
    shareRelationshipPatternResult(pattern);
  };

  const retakeTest = () => {
    setLocation("/relationship-patterns");
  };

  const goHome = () => {
    setLocation("/");
  };

  const getPatternColor = (patternKey: string) => {
    switch (patternKey) {
      case "secure-attachment": return "from-green-500 to-emerald-600";
      case "anxious-attachment": return "from-yellow-500 to-orange-600";
      case "avoidant-attachment": return "from-blue-500 to-indigo-600";
      case "people-pleasing": return "from-purple-500 to-pink-600";
      case "codependent-attraction": return "from-red-500 to-rose-600";
      case "boundary-violation": return "from-orange-500 to-red-600";
      default: return "from-gray-500 to-gray-600";
    }
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
              Your Relationship Pattern
            </motion.h1>
            
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Pattern Icon */}
              <motion.div 
                className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${getPatternColor(pattern)} rounded-full flex items-center justify-center animate-glow`}
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

              {/* Pattern Characteristics */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 text-center">
                  Key Characteristics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {patternData.characteristics.map((characteristic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                      <Heart className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                      <span className="text-[hsl(var(--metallic-silver))]">{characteristic}</span>
                    </div>
                  ))}
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

            {/* Insights Section */}
            {insights.length > 0 && (
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
                      Personal Insights
                    </Badge>
                    <div className="space-y-3">
                      {insights.map((insight, index) => (
                        <p key={index} className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                          {insight}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Recommendations Section */}
            {recommendations.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                      <Heart className="mr-2 h-4 w-4" />
                      Growth Recommendations
                    </Badge>
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
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
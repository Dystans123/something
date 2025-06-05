import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, RefreshCw, ArrowLeft, Brain, Target, Star, TrendingUp } from "lucide-react";
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

    // Automatically save results when component loads
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.integrationGuide = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'integration-guide');
    const newResult = {
      testId: 'integration-guide',
      result: { 
        integrationLevel: levelParam || level,
        averageScore: scoreParam ? parseFloat(scoreParam) : score,
        categoryScores: categoryScoresParam ? JSON.parse(categoryScoresParam) : categoryScores,
        strengths: strengthsParam ? JSON.parse(strengthsParam) : strengths,
        growthAreas: growthAreasParam ? JSON.parse(growthAreasParam) : growthAreas,
        personalizedGuidance: guidanceParam ? JSON.parse(guidanceParam) : guidance
      },
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
  }, [level, score, categoryScores, strengths, growthAreas, guidance]);

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

  const getCategoryInsight = (category: string, score: number) => {
    const percentage = Math.round(score * 20);
    
    const insights = {
      'self-awareness': {
        high: 'You demonstrate strong self-awareness and understanding of your inner world.',
        medium: 'You have developing self-awareness with room for deeper self-understanding.',
        low: 'Building self-awareness through reflection and mindfulness would benefit your growth.'
      },
      'emotional-regulation': {
        high: 'You show excellent emotional regulation and stability in challenging situations.',
        medium: 'Your emotional regulation is developing with occasional challenges to work through.',
        low: 'Developing emotional regulation skills will significantly enhance your wellbeing.'
      },
      'shadow-integration': {
        high: 'You actively engage with and integrate your shadow aspects constructively.',
        medium: 'You are making progress in shadow work with continued opportunities for integration.',
        low: 'Shadow work presents an important area for psychological growth and healing.'
      },
      'authentic-expression': {
        high: 'You express yourself authentically and align your actions with your values.',
        medium: 'You are developing authentic expression with some areas still emerging.',
        low: 'Cultivating authentic self-expression will enhance your relationships and fulfillment.'
      },
      'spiritual-connection': {
        high: 'You maintain a strong spiritual connection that guides your personal growth.',
        medium: 'Your spiritual connection is developing and offers growing support for integration.',
        low: 'Exploring spiritual practices could provide valuable support for your integration journey.'
      }
    };

    const categoryData = insights[category as keyof typeof insights];
    if (!categoryData) return 'This area offers opportunities for continued growth and development.';

    if (percentage >= 70) return categoryData.high;
    if (percentage >= 40) return categoryData.medium;
    return categoryData.low;
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
                  onClick={continueJourney}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Continue Journey
                  <Target className="ml-2 h-5 w-5" />
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
                className="mb-8"
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

            {/* Detailed Psychological Analysis */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-amber-900/20 to-[hsl(var(--deep-black))] border-amber-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-amber-400 border-amber-400">
                    <Brain className="mr-2 h-4 w-4" />
                    Psychological Insights
                  </Badge>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-2">Understanding Your Integration Level</h4>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Your {level.replace('-', ' ')} level indicates your current capacity for psychological wholeness and self-awareness. 
                        This reflects how well you integrate different aspects of your personality, emotions, and experiences into a coherent sense of self.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-2">Psychological Integration Process</h4>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Integration involves bringing together conscious and unconscious elements of your psyche. This process includes 
                        accepting your shadow aspects, understanding your emotional patterns, and developing authentic self-expression.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Practical Exercises */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/20 to-[hsl(var(--deep-black))] border-emerald-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-emerald-400 border-emerald-400">
                    <Target className="mr-2 h-4 w-4" />
                    Daily Integration Practices
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Mindfulness & Reflection</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Daily 10-minute meditation practice</li>
                        <li>• Evening self-reflection journaling</li>
                        <li>• Body awareness exercises</li>
                        <li>• Emotion tracking and naming</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Shadow Work Exercises</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Identify triggers and reactions</li>
                        <li>• Explore rejected aspects of self</li>
                        <li>• Practice self-compassion</li>
                        <li>• Dialogue with inner critic</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Relationship Integration</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Practice authentic communication</li>
                        <li>• Set healthy boundaries</li>
                        <li>• Express needs and feelings</li>
                        <li>• Listen without judgment</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Creative Expression</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Art therapy and creative projects</li>
                        <li>• Dream journaling and analysis</li>
                        <li>• Movement and dance</li>
                        <li>• Music and sound healing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Category Breakdown */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-indigo-900/20 to-[hsl(var(--deep-black))] border-indigo-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-indigo-400 border-indigo-400">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Detailed Category Analysis
                  </Badge>
                  <div className="space-y-4">
                    {Object.entries(categoryScores).map(([category, categoryScore], index) => (
                      <div key={index} className="p-4 bg-indigo-900/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-indigo-300 capitalize">{category.replace('-', ' ')}</h4>
                          <span className="text-indigo-400 font-bold">{Math.round(categoryScore * 20)}%</span>
                        </div>
                        <div className="w-full bg-[hsl(var(--deep-black))] rounded-full h-2 mb-3">
                          <div 
                            className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${categoryScore * 20}%` }}
                          />
                        </div>
                        <p className="text-[hsl(var(--metallic-silver))] text-sm">
                          {getCategoryInsight(category, categoryScore)}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next Steps Action Plan */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-rose-900/20 to-[hsl(var(--deep-black))] border-rose-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-rose-400 border-rose-400">
                    <Target className="mr-2 h-4 w-4" />
                    30-Day Integration Action Plan
                  </Badge>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-rose-900/10 rounded-lg">
                      <h4 className="font-semibold text-rose-300 mb-3">Week 1-2: Foundation</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Establish daily mindfulness practice</li>
                        <li>• Begin emotion tracking journal</li>
                        <li>• Identify core values and beliefs</li>
                        <li>• Start shadow work exercises</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-rose-900/10 rounded-lg">
                      <h4 className="font-semibold text-rose-300 mb-3">Week 3-4: Integration</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Practice authentic self-expression</li>
                        <li>• Work on boundary setting</li>
                        <li>• Explore creative outlets</li>
                        <li>• Address relationship patterns</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-rose-900/10 rounded-lg">
                      <h4 className="font-semibold text-rose-300 mb-3">Ongoing: Mastery</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Deepen spiritual practices</li>
                        <li>• Mentor others on their journey</li>
                        <li>• Continuous self-reflection</li>
                        <li>• Integrate learnings into daily life</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resources & Support */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/20 to-[hsl(var(--deep-black))] border-cyan-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
                    <Brain className="mr-2 h-4 w-4" />
                    Recommended Resources
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-3">Essential Reading</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• "Man and His Symbols" - Carl Jung</li>
                        <li>• "The Hero with a Thousand Faces" - Joseph Campbell</li>
                        <li>• "Meeting the Shadow" - Connie Zweig</li>
                        <li>• "The Gifts of Imperfection" - Brené Brown</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-3">Professional Support</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Jungian analysis and therapy</li>
                        <li>• Depth psychology practitioners</li>
                        <li>• Integration-focused coaching</li>
                        <li>• Support groups and communities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
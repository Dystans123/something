import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Brain, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Share2,
  Star,
  Zap,
  BookOpen,
  Award
} from "lucide-react";
import { 
  IntelligenceTypeAnswer, 
  IntelligenceTypeResult, 
  calculateIntelligenceTypeResult,
  shareIntelligenceTypeResult 
} from "@/lib/intelligence-type-logic";
import { intelligenceTypes } from "@/data/intelligence-type-questions";
import { SmokeParticles } from "@/components/smoke-particles";

export default function IntelligenceTypeResults() {
  const [, setLocation] = useLocation();
  const [result, setResult] = useState<IntelligenceTypeResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const answersParam = urlParams.get('answers');
    
    if (answersParam) {
      try {
        const answers: IntelligenceTypeAnswer[] = JSON.parse(decodeURIComponent(answersParam));
        const calculatedResult = calculateIntelligenceTypeResult(answers);
        setResult(calculatedResult);
      } catch (error) {
        console.error('Error parsing answers:', error);
        setLocation('/intelligence-type');
      }
    } else {
      setLocation('/intelligence-type');
    }
    
    setLoading(false);
  }, [setLocation]);

  if (loading || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]">
        <div className="text-center">
          <Brain className="h-12 w-12 text-blue-400 animate-pulse mx-auto mb-4" />
          <p className="text-[hsl(var(--metallic-silver))]">Analyzing your intelligence profile...</p>
        </div>
      </div>
    );
  }

  const dominantInfo = intelligenceTypes[result.dominantIntelligence as keyof typeof intelligenceTypes];
  const sortedScores = Object.entries(result.intelligenceScores)
    .sort(([,a], [,b]) => b - a);

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      <SmokeParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
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
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Brain className="h-8 w-8 text-blue-400" />
            <Badge variant="outline" className="text-blue-400 border-blue-400 text-lg px-4 py-2">
              Your Intelligence Type
            </Badge>
          </div>
          
          <motion.h1 
            className="font-serif text-4xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {dominantInfo.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-400 font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {dominantInfo.description}
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => shareIntelligenceTypeResult(result.dominantIntelligence)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Your Results
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Intelligence Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-5 w-5 text-blue-400" />
                  <CardTitle className="text-[hsl(var(--silver-glow))]">Your Intelligence Profile</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {sortedScores.map(([intelligence, score], index) => {
                  const info = intelligenceTypes[intelligence as keyof typeof intelligenceTypes];
                  const percentage = (score / 5) * 100;
                  const isTop3 = index < 3;
                  
                  return (
                    <div key={intelligence} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${isTop3 ? 'text-[hsl(var(--silver-glow))]' : 'text-[hsl(var(--metallic-silver))]'}`}>
                          {info.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          {index === 0 && <Star className="h-4 w-4 text-yellow-400" />}
                          <span className={`text-sm ${isTop3 ? 'text-blue-400' : 'text-[hsl(var(--metallic-silver))]'}`}>
                            {score.toFixed(1)}/5.0
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={percentage} 
                        className={`h-2 ${isTop3 ? 'bg-blue-900/20' : 'bg-gray-700/20'}`}
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Superpower */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-400/30 h-full">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <CardTitle className="text-[hsl(var(--silver-glow))]">Your Cognitive Superpower</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[hsl(var(--metallic-silver))] leading-relaxed text-lg">
                  {result.superpower}
                </p>
                
                <Separator className="my-6 bg-[hsl(var(--border))]" />
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>Core Characteristics</span>
                  </h4>
                  <ul className="space-y-2">
                    {dominantInfo.characteristics.map((characteristic, index) => (
                      <li key={index} className="flex items-start space-x-2 text-[hsl(var(--metallic-silver))]">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{characteristic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Analysis */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-[hsl(var(--silver-glow))]">Detailed Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <div className="text-[hsl(var(--metallic-silver))] leading-relaxed whitespace-pre-line">
                  {result.detailedAnalysis}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Strengths & Growth */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <CardTitle className="text-[hsl(var(--silver-glow))]">Strengths & Growth Areas</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-3 flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Your Top Strengths</span>
                  </h4>
                  <ul className="space-y-2">
                    {dominantInfo.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start space-x-2 text-[hsl(var(--metallic-silver))]">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {result.weakAreas.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-3 flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>Areas for Development</span>
                    </h4>
                    <ul className="space-y-2">
                      {result.weakAreas.map((area, index) => (
                        <li key={index} className="flex items-start space-x-2 text-[hsl(var(--metallic-silver))]">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Career Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <Briefcase className="h-5 w-5 text-blue-400" />
                  <CardTitle className="text-[hsl(var(--silver-glow))]">Ideal Career Paths</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {result.careerSuggestions.map((career, index) => (
                    <div 
                      key={index}
                      className="px-3 py-2 bg-blue-500/10 border border-blue-400/20 rounded-lg text-[hsl(var(--metallic-silver))] text-center"
                    >
                      {career}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Development Tips */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-5 w-5 text-amber-400" />
                <CardTitle className="text-[hsl(var(--silver-glow))]">Development Recommendations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {result.developmentTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-amber-500/5 border border-amber-400/20 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))] max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                Continue Your Self-Discovery Journey
              </h3>
              <p className="text-[hsl(var(--metallic-silver))] mb-6 leading-relaxed">
                Understanding your intelligence type is just the beginning. Explore our other assessment tools 
                to gain deeper insights into your personality, relationships, and psychological patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => setLocation("/test")}
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                >
                  Shadow Archetype Test
                </Button>
                <Button
                  onClick={() => setLocation("/toxicity-compass")}
                  variant="outline"
                  className="border-red-400 text-red-400 hover:bg-red-400/10"
                >
                  Toxicity Compass
                </Button>
                <Button
                  onClick={() => setLocation("/relationship-patterns")}
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
                >
                  Relationship Patterns
                </Button>
                <Button
                  onClick={() => setLocation("/integration-guide")}
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
                >
                  Integration Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
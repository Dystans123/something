import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Brain, 
  Shield, 
  Users, 
  Lightbulb, 
  Trophy,
  Share2,
  Star,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Target,
  Heart,
  Zap,
  BookOpen,
  Download
} from "lucide-react";

interface ComprehensiveProfile {
  dominantArchetype: string;
  toxicityLevel: string;
  relationshipPattern: string;
  integrationLevel: string;
  overallScore: number;
  strengths: string[];
  growthAreas: string[];
  recommendations: string[];
}

const mockProfile: ComprehensiveProfile = {
  dominantArchetype: "The Sage",
  toxicityLevel: "Green Zone",
  relationshipPattern: "Secure Connector",
  integrationLevel: "Advanced Integration",
  overallScore: 85,
  strengths: [
    "Strong emotional intelligence and self-awareness",
    "Healthy relationship boundaries and communication",
    "Effective integration of shadow aspects",
    "Resilient to toxic relationship patterns"
  ],
  growthAreas: [
    "Perfectionism tendencies that may limit spontaneity",
    "Occasional over-analysis leading to decision paralysis",
    "Need for more self-compassion during setbacks"
  ],
  recommendations: [
    "Practice mindfulness meditation to balance analytical thinking",
    "Engage in creative activities to embrace imperfection",
    "Build stronger support networks for emotional validation",
    "Continue shadow work through journaling and reflection"
  ]
};

const strengthsMap = {
  "Strong emotional intelligence": { icon: <Brain className="h-5 w-5" />, color: "text-purple-400" },
  "Healthy boundaries": { icon: <Shield className="h-5 w-5" />, color: "text-blue-400" },
  "Effective communication": { icon: <Users className="h-5 w-5" />, color: "text-emerald-400" },
  "Self-awareness": { icon: <Lightbulb className="h-5 w-5" />, color: "text-amber-400" },
  "Resilience": { icon: <Zap className="h-5 w-5" />, color: "text-red-400" },
  "Integration skills": { icon: <Target className="h-5 w-5" />, color: "text-indigo-400" }
};

export default function ComprehensiveSummary() {
  const [, setLocation] = useLocation();
  const [profile, setProfile] = useState<ComprehensiveProfile>(mockProfile);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // In a real implementation, this would combine results from all four tests
    // For now, we'll use the mock profile
    setTimeout(() => setShowDetails(true), 1000);
  }, []);

  const shareResults = () => {
    const text = `I've completed my comprehensive psychological assessment! My profile shows ${profile.dominantArchetype} archetype with ${profile.integrationLevel}. 🧠✨`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Psychological Profile',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
  };

  const downloadReport = () => {
    // In a real implementation, this would generate a PDF report
    console.log('Downloading comprehensive report...');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreDescription = (score: number) => {
    if (score >= 80) return "Excellent psychological health and integration";
    if (score >= 60) return "Good psychological health with room for growth";
    return "Areas of concern requiring attention";
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      {/* Header */}
      <motion.header 
        className="relative z-20 p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setLocation('/journey')}
                variant="outline"
                size="sm"
                className="border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))]"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Journey
              </Button>
              <div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))]">
                  Your Comprehensive Psychological Profile
                </h1>
                <p className="text-[hsl(var(--metallic-silver))] mt-1">
                  A detailed analysis based on all four assessments
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={shareResults}
                variant="outline"
                size="sm"
                className="border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))]"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                onClick={downloadReport}
                variant="outline"
                size="sm"
                className="border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))]"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-[hsl(var(--metallic-silver)/0.3)] inline-block px-8 py-6">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className={`text-6xl font-bold ${getScoreColor(profile.overallScore)} mb-2`}>
                  {profile.overallScore}
                </div>
                <div className="text-[hsl(var(--metallic-silver))] text-sm">Overall Score</div>
              </div>
              <div className="text-left max-w-md">
                <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-2">
                  Psychological Wellness Index
                </h3>
                <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                  {getScoreDescription(profile.overallScore)}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Test Results Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-8 text-center">
            Your Psychological Landscape
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-purple-400/30">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Brain className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--silver-glow))]">Shadow Archetype</h3>
                    <p className="text-purple-400 font-medium">{profile.dominantArchetype}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[hsl(var(--metallic-silver))] text-sm">
                  Your unconscious patterns and hidden motivations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-400/30">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-red-400" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--silver-glow))]">Toxicity Level</h3>
                    <p className="text-red-400 font-medium">{profile.toxicityLevel}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[hsl(var(--metallic-silver))] text-sm">
                  Your resilience to toxic relationship patterns
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-400/30">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-emerald-400" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--silver-glow))]">Relationship Style</h3>
                    <p className="text-emerald-400 font-medium">{profile.relationshipPattern}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[hsl(var(--metallic-silver))] text-sm">
                  How you connect and interact with others
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-400/30">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--silver-glow))]">Integration Level</h3>
                    <p className="text-amber-400 font-medium">{profile.integrationLevel}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[hsl(var(--metallic-silver))] text-sm">
                  Your capacity for psychological wholeness
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Detailed Analysis */}
        {showDetails && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Strengths */}
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                    Your Psychological Strengths
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {profile.strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-500/10"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        {strength}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Growth Areas */}
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                    Areas for Growth
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.growthAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-amber-500/10"
                    >
                      <Target className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        {area}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personalized Recommendations */}
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                    Personalized Action Plan
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.recommendations.map((recommendation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-400 text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        {recommendation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-[hsl(var(--metallic-silver)/0.3)] inline-block">
                <CardContent className="p-8">
                  <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                    Congratulations on Completing Your Journey!
                  </h3>
                  <p className="text-[hsl(var(--metallic-silver))] mb-6 max-w-2xl">
                    You've taken a significant step toward self-understanding and personal growth. 
                    Use these insights as a foundation for continued psychological development and authentic living.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setLocation('/journey')}
                      size="lg"
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                    >
                      Retake Assessments
                    </Button>
                    <Button
                      onClick={shareResults}
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))]"
                    >
                      Share Your Journey
                      <Share2 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
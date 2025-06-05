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
  Download,
  RotateCcw,
  Home,
  ChevronRight,
  Award,
  Eye,
  Compass
} from "lucide-react";

interface ComprehensiveProfile {
  dominantArchetype: string;
  archetypeDescription: string;
  toxicityLevel: string;
  toxicityScore: number;
  relationshipPattern: string;
  integrationLevel: string;
  overallScore: number;
  detailedAnalysis: {
    shadowWork: string[];
    emotionalHealth: string[];
    relationshipDynamics: string[];
    personalGrowth: string[];
  };
  strengths: string[];
  growthAreas: string[];
  actionPlan: string[];
  nextSteps: string[];
  completionDate: string;
  totalPoints: number;
}

interface TestResult {
  testId: string;
  result: any;
  completedAt: string;
}

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
  const [profile, setProfile] = useState<ComprehensiveProfile | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  const getToxicityLevelColor = (level: string) => {
    const normalizedLevel = level.toLowerCase();
    if (normalizedLevel === 'green') return "text-emerald-400";
    if (normalizedLevel === 'yellow') return "text-yellow-400";
    if (normalizedLevel === 'red') return "text-red-400";
    return "text-red-400";
  };

  const getToxicityLevelBg = (level: string) => {
    const normalizedLevel = level.toLowerCase();
    if (normalizedLevel === 'green') return "from-emerald-500/20 to-green-500/20";
    if (normalizedLevel === 'yellow') return "from-yellow-500/20 to-amber-500/20";
    if (normalizedLevel === 'red') return "from-red-500/20 to-orange-500/20";
    return "from-red-500/20 to-orange-500/20";
  };

  const getToxicityLevelBorder = (level: string) => {
    const normalizedLevel = level.toLowerCase();
    if (normalizedLevel === 'green') return "border-emerald-400/30";
    if (normalizedLevel === 'yellow') return "border-yellow-400/30";
    if (normalizedLevel === 'red') return "border-red-400/30";
    return "border-red-400/30";
  };

  const generateComprehensiveProfile = (results: TestResult[]): ComprehensiveProfile => {
    const shadowResult = results.find(r => r.testId === 'shadow-test')?.result;
    const toxicityResult = results.find(r => r.testId === 'toxicity-compass')?.result;
    const relationshipResult = results.find(r => r.testId === 'relationship-patterns')?.result;
    const integrationResult = results.find(r => r.testId === 'integration-guide')?.result;

    // Calculate overall score based on test results
    let overallScore = 0;
    if (shadowResult) overallScore += 25;
    if (toxicityResult) {
      if (toxicityResult.zone === 'green') overallScore += 30;
      else if (toxicityResult.zone === 'yellow') overallScore += 20;
      else overallScore += 10;
    }
    if (relationshipResult) overallScore += 25;
    if (integrationResult) overallScore += 20;

    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    let totalPoints = 0;
    if (progress.shadowTest) totalPoints += 250;
    if (progress.toxicityCompass) totalPoints += 200;
    if (progress.relationshipPatterns) totalPoints += 300;
    if (progress.integrationGuide) totalPoints += 350;

    return {
      dominantArchetype: shadowResult?.archetype || "Unknown",
      archetypeDescription: getArchetypeDescription(shadowResult?.archetype),
      toxicityLevel: toxicityResult?.zone || "Unknown",
      toxicityScore: toxicityResult?.percentage || 0,
      relationshipPattern: relationshipResult?.dominantPattern || "Unknown",
      integrationLevel: integrationResult?.integrationLevel || "Unknown",
      overallScore,
      detailedAnalysis: {
        shadowWork: generateShadowAnalysis(shadowResult),
        emotionalHealth: generateEmotionalAnalysis(toxicityResult),
        relationshipDynamics: generateRelationshipAnalysis(relationshipResult),
        personalGrowth: generateGrowthAnalysis(integrationResult)
      },
      strengths: generateStrengths(shadowResult, toxicityResult, relationshipResult, integrationResult),
      growthAreas: generateGrowthAreas(shadowResult, toxicityResult, relationshipResult, integrationResult),
      actionPlan: generateActionPlan(shadowResult, toxicityResult, relationshipResult, integrationResult),
      nextSteps: generateNextSteps(shadowResult, toxicityResult, relationshipResult, integrationResult),
      completionDate: new Date().toLocaleDateString(),
      totalPoints
    };
  };

  const getArchetypeDescription = (archetype: string): string => {
    const descriptions: Record<string, string> = {
      "The Innocent": "You seek harmony and happiness, preferring to see the good in people and situations.",
      "The Sage": "You are driven by the desire to understand the world and share wisdom with others.",
      "The Explorer": "You have a deep need for freedom and authenticity, always seeking new experiences.",
      "The Outlaw": "You challenge the status quo and fight for change, often disrupting conventional thinking.",
      "The Magician": "You believe in transformation and have the power to make dreams come true.",
      "The Hero": "You are courageous and determined, always rising to meet challenges head-on.",
      "The Lover": "You seek connection, intimacy, and are motivated by love and relationships.",
      "The Jester": "You bring joy and lightness to situations, using humor to navigate life's challenges."
    };
    return descriptions[archetype] || "A unique personality with distinct characteristics and motivations.";
  };

  const generateShadowAnalysis = (shadowResult: any): string[] => {
    if (!shadowResult) return ["Shadow work assessment not completed"];
    
    return [
      `Your dominant archetype reveals core motivations and behavioral patterns`,
      `Shadow integration requires acknowledging both light and dark aspects of your personality`,
      `Your archetype suggests specific areas for psychological development`,
      `Understanding your shadow helps prevent projection onto others`
    ];
  };

  const generateEmotionalAnalysis = (toxicityResult: any): string[] => {
    if (!toxicityResult) return ["Emotional health assessment not completed"];
    
    const zoneAnalysis: Record<string, string[]> = {
      'green': [
        "You demonstrate healthy emotional boundaries and resilience",
        "Your relationships appear balanced and supportive",
        "You show good awareness of toxic patterns and avoid them",
        "Continue maintaining these healthy relationship dynamics"
      ],
      'yellow': [
        "Some relationship patterns may be causing emotional stress",
        "You're aware of potential toxicity but may struggle with boundaries",
        "Working on communication skills could improve your relationships",
        "Consider seeking support for relationship challenges"
      ],
      'red': [
        "Your emotional well-being may be significantly impacted by toxic relationships",
        "Priority should be given to establishing healthy boundaries",
        "Professional support may be beneficial for relationship healing",
        "Focus on self-care and building a support network"
      ]
    };
    
    return zoneAnalysis[toxicityResult.zone] || ["Emotional health assessment needs review"];
  };

  const generateRelationshipAnalysis = (relationshipResult: any): string[] => {
    if (!relationshipResult) return ["Relationship pattern assessment not completed"];
    
    return [
      `Your dominant relationship pattern influences how you connect with others`,
      `Understanding these patterns helps improve communication and intimacy`,
      `Relationship dynamics are learnable skills that can be developed`,
      `Awareness of your patterns is the first step toward positive change`
    ];
  };

  const generateGrowthAnalysis = (integrationResult: any): string[] => {
    if (!integrationResult) return ["Personal growth assessment not completed"];
    
    return [
      `Integration work involves bringing unconscious aspects into conscious awareness`,
      `Personal growth is an ongoing journey requiring patience and self-compassion`,
      `Your assessment reveals specific areas for continued development`,
      `Regular self-reflection and practice support psychological integration`
    ];
  };

  const generateStrengths = (...results: any[]): string[] => {
    const strengths = [];
    
    if (results[0]) strengths.push("Self-awareness through archetype understanding");
    if (results[1]?.zone === 'green') strengths.push("Healthy relationship boundaries");
    if (results[2]) strengths.push("Understanding of relationship dynamics");
    if (results[3]) strengths.push("Commitment to personal growth");
    
    return strengths.length > 0 ? strengths : ["Completion of comprehensive psychological assessment"];
  };

  const generateGrowthAreas = (...results: any[]): string[] => {
    const growthAreas = [];
    
    if (results[1]?.zone !== 'green') growthAreas.push("Developing stronger emotional boundaries");
    if (results[2]) growthAreas.push("Enhancing communication skills");
    if (results[3]) growthAreas.push("Continuing shadow integration work");
    
    return growthAreas.length > 0 ? growthAreas : ["Maintaining current psychological health"];
  };

  const generateActionPlan = (...results: any[]): string[] => {
    return [
      "Continue regular self-reflection and journaling",
      "Practice mindfulness and emotional awareness exercises",
      "Engage in meaningful relationships with healthy boundaries",
      "Seek professional support when needed",
      "Read books on psychology and personal development"
    ];
  };

  const generateNextSteps = (...results: any[]): string[] => {
    return [
      "Schedule regular check-ins with yourself about emotional well-being",
      "Consider working with a therapist or counselor for deeper exploration",
      "Join support groups or communities focused on personal growth",
      "Practice the insights gained from this assessment in daily life",
      "Retake assessments periodically to track your growth"
    ];
  };

  useEffect(() => {
    // Load and process actual test results
    const savedResults = localStorage.getItem('psychTestResults');
    const savedProgress = localStorage.getItem('psychTestProgress');
    
    if (savedResults && savedProgress) {
      const results: TestResult[] = JSON.parse(savedResults);
      const progress = JSON.parse(savedProgress);
      
      // Only generate profile if all tests are completed
      const allCompleted = progress.shadowTest && progress.toxicityCompass && 
                          progress.relationshipPatterns && progress.integrationGuide;
      
      if (allCompleted) {
        const comprehensiveProfile = generateComprehensiveProfile(results);
        setProfile(comprehensiveProfile);
        setTimeout(() => setShowDetails(true), 1000);
      }
    }
    
    setLoading(false);
  }, []);

  const shareResults = () => {
    if (!profile) return;
    
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

  const restartJourney = () => {
    if (confirm('Are you sure you want to restart your journey? This will clear all progress and results.')) {
      localStorage.removeItem('psychTestProgress');
      localStorage.removeItem('psychTestResults');
      localStorage.removeItem('shadowTestResult');
      localStorage.removeItem('toxicityResult');
      localStorage.removeItem('relationshipPatternResult');
      localStorage.removeItem('integrationGuideResult');
      setLocation('/journey');
    }
  };

  const downloadReport = () => {
    if (!profile) return;
    
    // Generate a comprehensive text report
    const report = `
COMPREHENSIVE PSYCHOLOGICAL ASSESSMENT REPORT
Generated: ${profile.completionDate}
Total Points: ${profile.totalPoints}

DOMINANT ARCHETYPE: ${profile.dominantArchetype}
${profile.archetypeDescription}

EMOTIONAL HEALTH: ${profile.toxicityLevel} (${profile.toxicityScore}%)
RELATIONSHIP PATTERN: ${profile.relationshipPattern}
INTEGRATION LEVEL: ${profile.integrationLevel}
OVERALL SCORE: ${profile.overallScore}/100

DETAILED ANALYSIS:

Shadow Work Insights:
${profile.detailedAnalysis.shadowWork.map(item => `• ${item}`).join('\n')}

Emotional Health Assessment:
${profile.detailedAnalysis.emotionalHealth.map(item => `• ${item}`).join('\n')}

Relationship Dynamics:
${profile.detailedAnalysis.relationshipDynamics.map(item => `• ${item}`).join('\n')}

Personal Growth Opportunities:
${profile.detailedAnalysis.personalGrowth.map(item => `• ${item}`).join('\n')}

STRENGTHS:
${profile.strengths.map(item => `• ${item}`).join('\n')}

GROWTH AREAS:
${profile.growthAreas.map(item => `• ${item}`).join('\n')}

ACTION PLAN:
${profile.actionPlan.map(item => `• ${item}`).join('\n')}

NEXT STEPS:
${profile.nextSteps.map(item => `• ${item}`).join('\n')}
    `;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `psychological-assessment-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[hsl(var(--deep-black))] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[hsl(var(--metallic-silver))]">Loading your comprehensive profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
        
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <AlertTriangle className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-bold text-[hsl(var(--silver-glow))] mb-4">
              Assessment Incomplete
            </h1>
            <p className="text-[hsl(var(--metallic-silver))] mb-8 max-w-2xl mx-auto">
              You need to complete all four psychological assessments to view your comprehensive summary.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setLocation('/journey')}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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

            <Card className={`bg-gradient-to-br ${getToxicityLevelBg(profile.toxicityLevel)} ${getToxicityLevelBorder(profile.toxicityLevel)}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Shield className={`h-8 w-8 ${getToxicityLevelColor(profile.toxicityLevel)}`} />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--silver-glow))]">Toxicity Level</h3>
                    <p className={`${getToxicityLevelColor(profile.toxicityLevel)} font-medium`}>{profile.toxicityLevel}</p>
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

            {/* Detailed Analysis Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Shadow Work Analysis */}
              <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-400/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Brain className="h-6 w-6 text-purple-400" />
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                      Shadow Work Insights
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.detailedAnalysis.shadowWork.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Eye className="h-4 w-4 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emotional Health Analysis */}
              <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-400/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-red-400" />
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                      Emotional Health
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.detailedAnalysis.emotionalHealth.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Shield className="h-4 w-4 text-red-400 flex-shrink-0 mt-1" />
                        <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Relationship Dynamics */}
              <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-400/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-emerald-400" />
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                      Relationship Dynamics
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.detailedAnalysis.relationshipDynamics.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Users className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-1" />
                        <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Personal Growth */}
              <Card className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-400/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-amber-400" />
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                      Personal Growth
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.detailedAnalysis.personalGrowth.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Lightbulb className="h-4 w-4 text-amber-400 flex-shrink-0 mt-1" />
                        <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Plan */}
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
                  {profile.actionPlan.map((action, index) => (
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
                        {action}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <ChevronRight className="h-6 w-6 text-green-400" />
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                    Next Steps for Continued Growth
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.nextSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                    >
                      <Compass className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        {step}
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
                      <Home className="mr-2 h-4 w-4" />
                      Back to Journey
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
                    <Button
                      onClick={restartJourney}
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Restart Journey
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
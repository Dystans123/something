import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Heart, Share2, Download, RefreshCw, Shield, Users, Compass, Star } from "lucide-react";

interface TestResult {
  testId: string;
  result: any;
  completedAt: string;
}

export default function RelationshipComprehensiveSummary() {
  const [, setLocation] = useLocation();
  const [results, setResults] = useState<TestResult[]>([]);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    // Load all test results from localStorage
    const savedResults = localStorage.getItem('psychTestResults');
    if (savedResults) {
      const allResults = JSON.parse(savedResults);
      // Filter for relationship journey tests
      const relationshipResults = allResults.filter((r: TestResult) => 
        ['shadow-test', 'toxicity-compass', 'relationship-patterns', 'integration-guide'].includes(r.testId)
      );
      setResults(relationshipResults);
      
      if (relationshipResults.length === 4) {
        generateComprehensiveProfile(relationshipResults);
      }
    }
  }, []);

  const generateComprehensiveProfile = (testResults: TestResult[]) => {
    const shadowResult = testResults.find(r => r.testId === 'shadow-test')?.result;
    const toxicityResult = testResults.find(r => r.testId === 'toxicity-compass')?.result;
    const patternsResult = testResults.find(r => r.testId === 'relationship-patterns')?.result;
    const integrationResult = testResults.find(r => r.testId === 'integration-guide')?.result;

    const profile = {
      overallWellness: calculateOverallWellness(toxicityResult, integrationResult),
      dominantPattern: patternsResult?.dominantPattern || 'secure',
      integrationLevel: integrationResult?.integrationLevel || 'developing',
      toxicityRisk: toxicityResult?.zone || 'green',
      coreInsights: generateCoreInsights(shadowResult, patternsResult, integrationResult),
      strengthsAndGifts: generateStrengths(patternsResult, integrationResult),
      growthOpportunities: generateGrowthOpportunities(toxicityResult, patternsResult, integrationResult),
      relationshipGuidance: generateRelationshipGuidance(patternsResult, integrationResult, toxicityResult),
      integrationPractices: generateIntegrationPractices(integrationResult, patternsResult)
    };

    setProfileData(profile);
  };

  const calculateOverallWellness = (toxicity: any, integration: any) => {
    const toxicityScore = toxicity?.zone === 'green' ? 100 : toxicity?.zone === 'yellow' ? 70 : 40;
    const integrationScore = integration?.averageScore ? (integration.averageScore / 5) * 100 : 60;
    return Math.round((toxicityScore + integrationScore) / 2);
  };

  const generateCoreInsights = (shadow: any, patterns: any, integration: any) => {
    const insights = [];
    
    if (patterns?.dominantPattern === 'secure') {
      insights.push("You demonstrate secure attachment patterns, creating a strong foundation for healthy relationships.");
    } else if (patterns?.dominantPattern === 'anxious') {
      insights.push("Your anxious attachment style reflects deep capacity for love, though fear of abandonment may create challenges.");
    } else if (patterns?.dominantPattern === 'avoidant') {
      insights.push("Your avoidant tendencies protect your independence but may limit emotional intimacy.");
    } else if (patterns?.dominantPattern === 'dismissive') {
      insights.push("Your dismissive patterns suggest strong self-reliance but potential difficulty with emotional connection.");
    }

    if (integration?.integrationLevel === 'mastery') {
      insights.push("You demonstrate advanced relationship consciousness and serve as a model for others.");
    } else if (integration?.integrationLevel === 'integrated') {
      insights.push("You show strong self-awareness and emotional skills in relationships.");
    } else if (integration?.integrationLevel === 'developing') {
      insights.push("You're actively developing your relationship consciousness with good foundation skills.");
    } else {
      insights.push("You're beginning your journey of conscious relationship development with great potential.");
    }

    return insights.slice(0, 3);
  };

  const generateStrengths = (patterns: any, integration: any) => {
    const strengths = [];
    
    if (patterns?.dominantPattern === 'secure') {
      strengths.push("Natural ability to balance closeness and autonomy");
      strengths.push("Effective communication and conflict resolution");
      strengths.push("Emotional stability and resilience");
    } else if (patterns?.dominantPattern === 'anxious') {
      strengths.push("Deep capacity for emotional connection");
      strengths.push("High emotional intelligence and sensitivity");
      strengths.push("Strong commitment to working through challenges");
    } else if (patterns?.dominantPattern === 'avoidant') {
      strengths.push("Strong sense of personal autonomy");
      strengths.push("Calm under pressure and rational thinking");
      strengths.push("Respect for boundaries and independence");
    } else if (patterns?.dominantPattern === 'dismissive') {
      strengths.push("Strong individual identity and self-sufficiency");
      strengths.push("Ability to maintain objectivity");
      strengths.push("Direct communication style");
    }

    if (integration?.integrationLevel === 'mastery' || integration?.integrationLevel === 'integrated') {
      strengths.push("Advanced self-awareness and emotional regulation");
      strengths.push("Skilled at navigating relationship dynamics");
    }

    return strengths.slice(0, 4);
  };

  const generateGrowthOpportunities = (toxicity: any, patterns: any, integration: any) => {
    const opportunities = [];

    if (toxicity?.zone === 'red' || toxicity?.zone === 'yellow') {
      opportunities.push("Address toxic relationship patterns and establish healthier boundaries");
    }

    if (patterns?.dominantPattern === 'anxious') {
      opportunities.push("Develop self-soothing techniques and build secure self-worth");
    } else if (patterns?.dominantPattern === 'avoidant') {
      opportunities.push("Practice emotional expression and vulnerability");
    } else if (patterns?.dominantPattern === 'dismissive') {
      opportunities.push("Develop empathy and appreciation for emotional connection");
    }

    if (integration?.integrationLevel === 'emerging' || integration?.integrationLevel === 'developing') {
      opportunities.push("Strengthen communication skills and emotional awareness");
      opportunities.push("Practice mindfulness and self-reflection in relationships");
    }

    return opportunities.slice(0, 3);
  };

  const generateRelationshipGuidance = (patterns: any, integration: any, toxicity: any) => {
    const guidance = [];

    if (toxicity?.zone === 'red') {
      guidance.push("Prioritize your safety and well-being. Consider professional support for toxic relationship dynamics.");
    } else if (toxicity?.zone === 'yellow') {
      guidance.push("Work on establishing clearer boundaries and improving communication patterns.");
    }

    if (patterns?.dominantPattern === 'secure') {
      guidance.push("Continue modeling healthy relationship behaviors and support your partner's growth.");
    } else if (patterns?.dominantPattern === 'anxious') {
      guidance.push("Practice self-soothing and communicate your needs clearly without overwhelming your partner.");
    } else if (patterns?.dominantPattern === 'avoidant') {
      guidance.push("Challenge yourself to stay present during emotional moments and practice vulnerability.");
    }

    guidance.push("Focus on conscious communication and mutual growth in your relationships.");
    guidance.push("Remember that healthy relationships require both individual wholeness and conscious partnership.");

    return guidance.slice(0, 4);
  };

  const generateIntegrationPractices = (integration: any, patterns: any) => {
    const practices = [
      "Daily mindfulness practice to increase emotional awareness",
      "Regular self-reflection on relationship patterns and triggers",
      "Practice expressing emotions clearly and listening with empathy",
      "Work on maintaining your authentic self while being in relationship",
      "Engage in activities that support both individual and relationship growth"
    ];

    if (patterns?.dominantPattern === 'anxious') {
      practices.push("Develop self-soothing techniques for relationship anxiety");
    } else if (patterns?.dominantPattern === 'avoidant') {
      practices.push("Practice staying present during emotional conversations");
    }

    return practices.slice(0, 5);
  };

  const shareProfile = () => {
    const text = `I just completed my Comprehensive Relationship Profile! My dominant pattern is ${profileData?.dominantPattern} with ${profileData?.integrationLevel} integration level.`;
    if (navigator.share) {
      navigator.share({
        title: 'My Relationship Profile',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  const retakeJourney = () => {
    // Clear relationship test results
    const allResults = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const filteredResults = allResults.filter((r: TestResult) => 
      !['shadow-test', 'toxicity-compass', 'relationship-patterns', 'integration-guide'].includes(r.testId)
    );
    localStorage.setItem('psychTestResults', JSON.stringify(filteredResults));
    
    // Clear progress
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.shadowTest = false;
    progress.toxicityCompass = false;
    progress.relationshipPatterns = false;
    progress.integrationGuide = false;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    setLocation("/journey");
  };

  if (!profileData) {
    return (
      <div className="min-h-screen bg-[hsl(var(--deep-black))] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-[hsl(var(--metallic-silver))]">Generating your comprehensive profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-purple-900/10 to-[hsl(var(--deep-black))]" />
      
      <motion.header 
        className="relative z-20 p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/journey")}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey
            </Button>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 mb-2">
                <Heart className="h-6 w-6 text-purple-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Relationship Profile
                </h1>
              </div>
              <Badge variant="outline" className="text-purple-400 border-purple-400">
                Comprehensive Analysis Complete
              </Badge>
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={shareProfile}
                className="text-[hsl(var(--metallic-silver))] border-[hsl(var(--border))] hover:border-purple-400"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={retakeJourney}
                className="text-[hsl(var(--metallic-silver))] border-[hsl(var(--border))] hover:border-purple-400"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retake
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        {/* Overall Wellness Score */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-400/30">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-2">
                  Relationship Wellness Score
                </h2>
                <div className="text-4xl font-bold text-purple-400 mb-4">
                  {profileData.overallWellness}/100
                </div>
                <Progress 
                  value={profileData.overallWellness} 
                  className="w-full max-w-md mx-auto h-3 bg-[hsl(var(--dark-gray))]"
                />
                <p className="text-[hsl(var(--metallic-silver))] mt-4">
                  {profileData.overallWellness >= 80 ? "Excellent relationship health and consciousness" :
                   profileData.overallWellness >= 60 ? "Good foundation with room for growth" :
                   "Significant opportunities for relationship development"}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Test Results Overview */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-[hsl(var(--dark-gray))]/30 border-purple-400/30">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-red-400 mx-auto mb-3" />
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Toxicity Assessment</h3>
              <Badge className={`${
                profileData.toxicityRisk === 'green' ? 'bg-green-500/20 text-green-300' :
                profileData.toxicityRisk === 'yellow' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {profileData.toxicityRisk.charAt(0).toUpperCase() + profileData.toxicityRisk.slice(1)} Zone
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-[hsl(var(--dark-gray))]/30 border-emerald-400/30">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Attachment Pattern</h3>
              <Badge className="bg-emerald-500/20 text-emerald-300">
                {profileData.dominantPattern.charAt(0).toUpperCase() + profileData.dominantPattern.slice(1)}
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-[hsl(var(--dark-gray))]/30 border-amber-400/30">
            <CardContent className="p-6 text-center">
              <Compass className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Integration Level</h3>
              <Badge className="bg-amber-500/20 text-amber-300">
                {profileData.integrationLevel.charAt(0).toUpperCase() + profileData.integrationLevel.slice(1)}
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-[hsl(var(--dark-gray))]/30 border-purple-400/30">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Shadow Work</h3>
              <Badge className="bg-purple-500/20 text-purple-300">
                Completed
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core Insights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--silver-glow))] flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-purple-400" />
                  Core Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profileData.coreInsights.map((insight: string, index: number) => (
                    <li key={index} className="text-[hsl(var(--metallic-silver))] flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Strengths & Gifts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--silver-glow))] flex items-center">
                  <Star className="h-5 w-5 mr-2 text-emerald-400" />
                  Relationship Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profileData.strengthsAndGifts.map((strength: string, index: number) => (
                    <li key={index} className="text-[hsl(var(--metallic-silver))] flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--silver-glow))] flex items-center">
                  <Compass className="h-5 w-5 mr-2 text-amber-400" />
                  Growth Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profileData.growthOpportunities.map((opportunity: string, index: number) => (
                    <li key={index} className="text-[hsl(var(--metallic-silver))] flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Relationship Guidance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))]/30 border-[hsl(var(--border))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--silver-glow))] flex items-center">
                  <Users className="h-5 w-5 mr-2 text-pink-400" />
                  Relationship Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profileData.relationshipGuidance.map((guidance: string, index: number) => (
                    <li key={index} className="text-[hsl(var(--metallic-silver))] flex items-start">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {guidance}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Integration Practices */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-[hsl(var(--silver-glow))] text-center">
                Daily Integration Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profileData.integrationPractices.map((practice: string, index: number) => (
                  <div key={index} className="bg-[hsl(var(--dark-gray))]/30 p-4 rounded-xl border border-[hsl(var(--border))]">
                    <p className="text-[hsl(var(--metallic-silver))] text-sm">{practice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                Continue Your Relationship Journey
              </h3>
              <p className="text-[hsl(var(--metallic-silver))] mb-6">
                Use these insights as a foundation for conscious relationship development. 
                Remember that growth is a continuous process of awareness, practice, and integration.
              </p>
              <div className="space-x-4">
                <Button
                  onClick={() => setLocation("/journey")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                >
                  Explore Other Tests
                </Button>
                <Button
                  variant="outline"
                  onClick={shareProfile}
                  className="text-[hsl(var(--metallic-silver))] border-[hsl(var(--border))] hover:border-purple-400"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
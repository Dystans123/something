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
    window.scrollTo(0, 0);
    
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
    
    // Deep attachment pattern insights
    if (patterns?.dominantPattern === 'secure') {
      insights.push("Your secure attachment foundation creates psychological safety in relationships, allowing both partners to grow authentically while maintaining deep connection.");
      insights.push("You naturally balance emotional availability with healthy boundaries, creating an environment where love can flourish without suffocation.");
    } else if (patterns?.dominantPattern === 'anxious') {
      insights.push("Your heightened emotional sensitivity reveals a profound capacity for deep love and connection, though your nervous system may interpret normal relationship fluctuations as threats to the bond.");
      insights.push("Beneath your need for reassurance lies an extraordinary ability to attune to your partner's emotional states - a gift that, when channeled consciously, creates remarkable intimacy.");
    } else if (patterns?.dominantPattern === 'avoidant') {
      insights.push("Your protective mechanisms around emotional vulnerability likely developed as intelligent adaptations to early experiences, but may now limit your access to the deep connection you actually crave.");
      insights.push("Your strength in maintaining independence and emotional regulation can be balanced with gradual expansion of your comfort zone for emotional expression and interdependence.");
    } else if (patterns?.dominantPattern === 'dismissive') {
      insights.push("Your dismissive patterns reflect learned strategies for emotional self-protection, yet beneath this armor lies a deep human need for connection that deserves honoring and gentle exploration.");
    }

    // Shadow archetype integration insights
    if (shadow?.archetype === 'ruler') {
      insights.push("Your Ruler shadow brings powerful leadership qualities to relationships, but may create dynamics where control overshadows collaboration and mutual growth.");
    } else if (shadow?.archetype === 'lover') {
      insights.push("Your Lover shadow reveals deep passion and romantic idealization, which can inspire beautiful connection while potentially creating unrealistic expectations of perpetual intensity.");
    } else if (shadow?.archetype === 'caregiver') {
      insights.push("Your Caregiver shadow demonstrates profound nurturing capacity, though it may lead to over-functioning in relationships where you give more than you receive.");
    } else if (shadow?.archetype === 'rebel') {
      insights.push("Your Rebel shadow brings fierce independence and authenticity, which can challenge partners to grow while sometimes creating unnecessary conflict or resistance to intimacy.");
    }

    // Integration level insights with specific guidance
    if (integration?.integrationLevel === 'mastery') {
      insights.push("Your advanced relationship consciousness allows you to hold space for complex emotions and dynamics, serving as a catalyst for healing and growth in your partnerships.");
    } else if (integration?.integrationLevel === 'integrated') {
      insights.push("Your developed self-awareness enables you to recognize and work with relationship patterns consciously, creating opportunities for continuous growth and deeper intimacy.");
    } else if (integration?.integrationLevel === 'developing') {
      insights.push("You're building crucial relationship skills with clear areas for growth, indicating readiness for deeper levels of conscious partnership and emotional maturity.");
    } else {
      insights.push("Your emerging awareness of relationship dynamics represents the beginning of profound transformation - every conscious choice you make now creates ripple effects for healthier connections.");
    }

    return insights.slice(0, 4);
  };

  const generateStrengths = (patterns: any, integration: any) => {
    const strengths = [];
    
    if (patterns?.dominantPattern === 'secure') {
      strengths.push("Exceptional ability to create psychological safety - you naturally make others feel seen, heard, and valued");
      strengths.push("Masterful balance of emotional availability and healthy boundaries, allowing authentic connection without losing yourself");
      strengths.push("Innate capacity for conflict resolution that transforms disagreements into opportunities for deeper understanding");
      strengths.push("Emotional regulation skills that provide stability during relationship storms while remaining open to growth");
      strengths.push("Natural mentoring ability - your secure presence helps others develop their own relationship skills");
    } else if (patterns?.dominantPattern === 'anxious') {
      strengths.push("Extraordinary emotional attunement - you can sense subtle shifts in relationship dynamics that others miss");
      strengths.push("Profound capacity for deep love and intimate connection that creates transformative bonds");
      strengths.push("High emotional intelligence that allows you to understand complex relationship dynamics");
      strengths.push("Passionate commitment to working through relationship challenges rather than avoiding them");
      strengths.push("Ability to create intense emotional intimacy when your nervous system feels safe");
    } else if (patterns?.dominantPattern === 'avoidant') {
      strengths.push("Remarkable emotional self-regulation that provides stability and consistency in relationships");
      strengths.push("Healthy respect for independence and personal boundaries that prevents codependency");
      strengths.push("Ability to think clearly during emotional intensity, offering rational perspective during conflicts");
      strengths.push("Strong sense of personal identity that doesn't get lost in relationship dynamics");
      strengths.push("Capacity for loyalty and commitment once trust is established, though expressed differently than anxious types");
    } else if (patterns?.dominantPattern === 'dismissive') {
      strengths.push("Strong personal boundaries and self-advocacy skills that prevent relationship exploitation");
      strengths.push("Intellectual approach to relationships that can offer valuable perspective on emotional situations");
      strengths.push("Consistency and reliability in practical aspects of partnership");
      strengths.push("Ability to maintain objectivity during relationship crises");
    }

    // Add integration-based strengths
    if (integration?.integrationLevel === 'mastery' || integration?.integrationLevel === 'integrated') {
      strengths.push("Advanced self-awareness that allows you to catch and redirect unhealthy patterns in real-time");
      strengths.push("Ability to hold space for your partner's growth without taking their emotions personally");
      strengths.push("Skilled at transforming relationship challenges into opportunities for mutual evolution");
    }

    return strengths.slice(0, 5);
  };

  const generateGrowthOpportunities = (toxicity: any, patterns: any, integration: any) => {
    const opportunities = [];

    // Toxicity-based opportunities
    if (toxicity?.zone === 'red') {
      opportunities.push("Urgent Priority: Establish safety protocols and consider professional support to address toxic dynamics that may be compromising your well-being");
      opportunities.push("Develop a comprehensive exit strategy and support network if you're in a harmful relationship pattern");
    } else if (toxicity?.zone === 'yellow') {
      opportunities.push("Focus on strengthening personal boundaries and developing assertiveness skills to prevent escalation of unhealthy dynamics");
      opportunities.push("Learn to recognize early warning signs of toxic patterns and develop intervention strategies");
    }

    // Attachment pattern growth opportunities
    if (patterns?.dominantPattern === 'anxious') {
      opportunities.push("Master nervous system regulation through breathwork, meditation, and somatic practices to reduce anxiety-driven relationship behaviors");
      opportunities.push("Develop secure self-worth that doesn't depend on your partner's validation or constant reassurance");
      opportunities.push("Practice tolerating uncertainty in relationships without immediately seeking reassurance or creating conflict");
      opportunities.push("Learn to differentiate between intuitive concerns and anxiety-based fears about your relationship");
    } else if (patterns?.dominantPattern === 'avoidant') {
      opportunities.push("Gradually expand your emotional vocabulary and practice expressing feelings in low-stakes situations");
      opportunities.push("Explore the underlying fears that drive emotional withdrawal and work with them compassionately");
      opportunities.push("Practice staying present during your partner's emotional expressions without shutting down or mentally checking out");
      opportunities.push("Challenge yourself to share one vulnerable thought or feeling each week to build intimacy tolerance");
    } else if (patterns?.dominantPattern === 'dismissive') {
      opportunities.push("Develop curiosity about emotional experiences - both your own and your partner's - rather than dismissing them as unnecessary");
      opportunities.push("Practice empathetic listening without immediately offering solutions or logical analysis");
      opportunities.push("Explore how emotional connection can actually enhance rather than threaten your sense of independence");
    } else if (patterns?.dominantPattern === 'secure') {
      opportunities.push("Continue deepening your capacity to hold space for more complex relationship dynamics and support others' growth");
      opportunities.push("Explore advanced relationship skills like conflict alchemy and conscious communication");
    }

    // Integration level opportunities
    if (integration?.integrationLevel === 'emerging') {
      opportunities.push("Build foundational emotional intelligence through mindfulness practices and self-reflection");
      opportunities.push("Develop basic communication skills and learn to identify your relationship patterns");
    } else if (integration?.integrationLevel === 'developing') {
      opportunities.push("Strengthen your ability to catch and redirect unhealthy patterns in real-time");
      opportunities.push("Practice holding paradox - being both independent and interdependent simultaneously");
    } else if (integration?.integrationLevel === 'integrated') {
      opportunities.push("Explore advanced relationship consciousness work and consider mentoring others in their relationship journey");
    }

    return opportunities.slice(0, 4);
  };

  const generateRelationshipGuidance = (patterns: any, integration: any, toxicity: any) => {
    const guidance = [];

    // Safety-first guidance for high toxicity
    if (toxicity?.zone === 'red') {
      guidance.push("🚨 Safety Priority: Your assessment indicates concerning toxic patterns. Consider reaching out to a therapist, counselor, or trusted support network immediately. Remember that you deserve relationships that honor your dignity and well-being.");
      guidance.push("Create a safety plan that includes trusted contacts, emergency resources, and clear steps for protecting yourself if dynamics escalate.");
    } else if (toxicity?.zone === 'yellow') {
      guidance.push("Caution Advised: Some concerning patterns detected. Focus on strengthening your personal boundaries and developing assertiveness skills to prevent further deterioration of relationship health.");
      guidance.push("Consider couples therapy or individual therapy to address these warning signs before they become more entrenched patterns.");
    }

    // Attachment-specific guidance
    if (patterns?.dominantPattern === 'secure') {
      guidance.push("Your secure foundation is a gift not only to yourself but to your partners. Continue using your natural ability to create safety and model healthy relationship dynamics.");
      guidance.push("Consider how you might support others in developing secure relationships - your influence can create positive ripple effects in your community.");
      guidance.push("Focus on deepening intimacy through continued vulnerability and supporting your partner's individual growth alongside your shared journey.");
    } else if (patterns?.dominantPattern === 'anxious') {
      guidance.push("Your intense capacity for love is beautiful, but learning to self-soothe will help you love from abundance rather than fear. Practice grounding techniques daily.");
      guidance.push("When anxiety arises about your relationship, pause and ask: 'Is this my intuition or my activation?' This distinction will transform how you navigate concerns.");
      guidance.push("Communicate your needs clearly using 'I' statements, and remember that asking for reassurance occasionally is normal - it's the frequency and intensity that matters.");
      guidance.push("Develop secure self-worth through individual activities, friendships, and personal goals that exist independently of your romantic relationship.");
    } else if (patterns?.dominantPattern === 'avoidant') {
      guidance.push("Your independence is a strength, but true intimacy requires showing up emotionally even when it feels uncomfortable. Start small and build your tolerance gradually.");
      guidance.push("Practice staying present when your partner shares emotions. Resist the urge to problem-solve immediately - sometimes they just need to be heard and held.");
      guidance.push("Remember that emotional closeness doesn't threaten your autonomy - it can actually enhance your sense of self when approached consciously.");
      guidance.push("Challenge yourself to share one feeling or vulnerable thought each week. Notice that intimacy can coexist with independence.");
    } else if (patterns?.dominantPattern === 'dismissive') {
      guidance.push("Emotional connection isn't a weakness or distraction - it's a fundamental human need that, when honored, can actually support your other life goals.");
      guidance.push("Practice curiosity about emotions rather than judgment. Ask yourself: 'What might this feeling be trying to tell me or my partner?'");
      guidance.push("Experiment with small acts of emotional availability and notice how they impact your relationship satisfaction over time.");
    }

    // Integration-level guidance
    if (integration?.integrationLevel === 'mastery') {
      guidance.push("Your advanced relationship consciousness positions you to be a catalyst for healing not just in your own relationships, but in your broader community.");
    } else if (integration?.integrationLevel === 'integrated') {
      guidance.push("Continue deepening your practice of conscious relationship skills and consider how you might share your insights with others.");
    } else if (integration?.integrationLevel === 'developing') {
      guidance.push("You're building solid foundation skills - stay consistent with your growth practices and be patient with yourself as new patterns develop.");
    } else {
      guidance.push("Every step you take toward conscious relationship engagement creates positive change. Start with small, consistent practices and build from there.");
    }

    return guidance.slice(0, 5);
  };

  const generateIntegrationPractices = (integration: any, patterns: any) => {
    const practices = [];

    // Universal foundation practices
    practices.push("Daily 10-minute mindfulness practice focused on emotional awareness and body sensations");
    practices.push("Weekly relationship reflection: journal about patterns, triggers, and growth moments");
    practices.push("Practice the 'pause and breathe' technique before responding during emotional conversations");

    // Attachment-specific practices
    if (patterns?.dominantPattern === 'anxious') {
      practices.push("Morning grounding practice: 5 minutes of deep breathing or body scan to regulate your nervous system");
      practices.push("Self-soothing toolkit: create a list of activities that calm you without needing partner involvement");
      practices.push("Practice the 24-hour rule: wait 24 hours before addressing relationship concerns to distinguish between anxiety and intuition");
      practices.push("Develop secure self-affirmations that remind you of your inherent worth independent of relationship status");
    } else if (patterns?.dominantPattern === 'avoidant') {
      practices.push("Daily emotion check-in: ask yourself 'What am I feeling right now?' three times per day");
      practices.push("Vulnerability practice: share one authentic feeling or thought with your partner weekly");
      practices.push("Presence practice: when your partner expresses emotion, count to 5 before responding to resist fixing mode");
      practices.push("Intimacy tolerance building: gradually increase time spent in emotionally connected activities");
    } else if (patterns?.dominantPattern === 'dismissive') {
      practices.push("Curiosity cultivation: when emotions arise (yours or your partner's), ask 'What might this be trying to communicate?'");
      practices.push("Empathy expansion: spend 5 minutes daily imagining how situations feel from your partner's perspective");
      practices.push("Emotional vocabulary building: learn and use more specific feeling words in daily conversation");
    } else if (patterns?.dominantPattern === 'secure') {
      practices.push("Advanced communication practice: use reflective listening and emotional validation techniques");
      practices.push("Relationship leadership: model healthy conflict resolution and emotional regulation for others");
      practices.push("Depth exploration: engage in activities that deepen intimacy and mutual understanding");
    }

    // Integration-level specific practices
    if (integration?.integrationLevel === 'emerging') {
      practices.push("Basic communication skills practice: use 'I' statements and active listening daily");
      practices.push("Pattern recognition: notice and name your relationship patterns when they occur");
    } else if (integration?.integrationLevel === 'developing') {
      practices.push("Real-time pattern interruption: practice catching unhealthy patterns and choosing different responses");
      practices.push("Conscious communication: use intentional dialogue techniques during important conversations");
    } else if (integration?.integrationLevel === 'integrated') {
      practices.push("Conflict alchemy: transform disagreements into opportunities for deeper understanding and growth");
      practices.push("Shadow work: explore and integrate the unconscious patterns that emerge in close relationships");
    } else if (integration?.integrationLevel === 'mastery') {
      practices.push("Relationship mentoring: share your wisdom and support others in their conscious relationship journey");
      practices.push("Advanced practices: explore tantric communication, nonviolent communication, or other advanced relationship modalities");
    }

    // Universal growth practices
    practices.push("Individual therapy or coaching to continue personal development alongside relationship growth");
    practices.push("Couples practices: engage in shared activities that build connection and mutual understanding");
    practices.push("Community connection: spend time with other couples who model healthy relationship dynamics");

    return practices.slice(0, 6);
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
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[hsl(var(--silver-glow))] mx-auto mb-4"></div>
          <p className="text-[hsl(var(--metallic-silver))]">Generating your comprehensive relationship profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
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
                <Heart className="h-6 w-6 text-red-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Relationship Complete Profile
                </h1>
                <Heart className="h-6 w-6 text-red-400" />
              </div>
              <p className="text-sm text-[hsl(var(--metallic-silver))]">
                Your Comprehensive Relationship Consciousness Analysis
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={shareProfile}
                className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={retakeJourney}
                className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retake
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        {/* Wellness Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl font-serif text-[hsl(var(--silver-glow))]">
                <Shield className="h-6 w-6 text-emerald-400" />
                <span>Relationship Wellness Overview</span>
                <Shield className="h-6 w-6 text-emerald-400" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[hsl(var(--silver-glow))]">
                    {profileData.overallWellness}%
                  </div>
                  <Progress value={profileData.overallWellness} className="h-2" />
                  <p className="text-sm text-[hsl(var(--metallic-silver))]">Overall Wellness</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="text-lg px-4 py-2 capitalize">
                    {profileData.dominantPattern}
                  </Badge>
                  <p className="text-sm text-[hsl(var(--metallic-silver))]">Attachment Pattern</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge 
                    variant={profileData.toxicityRisk === 'green' ? 'default' : profileData.toxicityRisk === 'yellow' ? 'secondary' : 'destructive'} 
                    className="text-lg px-4 py-2 capitalize"
                  >
                    {profileData.toxicityRisk} Zone
                  </Badge>
                  <p className="text-sm text-[hsl(var(--metallic-silver))]">Toxicity Risk</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core Insights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[hsl(var(--silver-glow))]">
                  <Compass className="h-5 w-5 text-blue-400" />
                  <span>Core Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.coreInsights.map((insight: string, index: number) => (
                  <div key={index} className="p-4 bg-[hsl(var(--deep-black))] rounded-lg border border-[hsl(var(--border))]">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{insight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Strengths & Gifts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[hsl(var(--silver-glow))]">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Strengths & Gifts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {profileData.strengthsAndGifts.map((strength: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{strength}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[hsl(var(--silver-glow))]">
                  <Users className="h-5 w-5 text-emerald-400" />
                  <span>Growth Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.growthOpportunities.map((opportunity: string, index: number) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-500/20">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{opportunity}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Relationship Guidance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[hsl(var(--silver-glow))]">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span>Relationship Guidance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.relationshipGuidance.map((guidance: string, index: number) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{guidance}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Integration Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl font-serif text-[hsl(var(--silver-glow))]">
                <Compass className="h-6 w-6 text-purple-400" />
                <span>Personalized Integration Practices</span>
                <Compass className="h-6 w-6 text-purple-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {profileData.integrationPractices.map((practice: string, index: number) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{practice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12 space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={shareProfile}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share My Profile
            </Button>
            <Button
              onClick={retakeJourney}
              variant="outline"
              className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Retake Journey
            </Button>
            <Button
              onClick={() => setLocation("/journey")}
              variant="outline"
              className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey
            </Button>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto">
              Your relationship consciousness is a journey, not a destination. Use these insights as a compass 
              for continued growth and deeper connection.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-[hsl(var(--metallic-silver))]">
              <button onClick={() => setLocation("/privacy-policy")} className="hover:text-[hsl(var(--silver-glow))] transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => setLocation("/terms-of-use")} className="hover:text-[hsl(var(--silver-glow))] transition-colors">
                Terms of Use
              </button>
              <button onClick={() => setLocation("/cookie-policy")} className="hover:text-[hsl(var(--silver-glow))] transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Users, 
  Lightbulb, 
  Clock, 
  CheckCircle, 
  Lock, 
  Trophy,
  Share2,
  Star,
  ChevronUp,
  Award,
  Target,
  Home,
  Heart,
  User,
  Compass,
  Zap,
  Eye,
  Puzzle
} from "lucide-react";

interface TestProgress {
  // Relationship tests
  shadowTest: boolean;
  toxicityCompass: boolean;
  relationshipPatterns: boolean;
  // Single tests
  intelligenceMap: boolean;
  attachmentStyle: boolean;
  identityCompass: boolean;
}

interface TestResult {
  testId: string;
  result: any;
  completedAt: Date;
}

const relationshipTests = [
  {
    id: "shadow-test",
    title: "Shadow Archetype Test",
    subtitle: "Level 1: Core Assessment",
    description: "Discover your dominant shadow archetype through 40 psychological projection questions.",
    icon: <Brain className="h-8 w-8" />,
    color: "text-purple-400",
    bgGradient: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-400",
    route: "/test",
    duration: "10-15 min",
    points: 250,
    unlockMessage: "Unlock the mysteries of your unconscious mind"
  },
  {
    id: "toxicity-compass",
    title: "Toxicity Compass",
    subtitle: "Level 2: Relationship Health",
    description: "Assess the psychological impact of toxic relationships on your identity and well-being.",
    icon: <Shield className="h-8 w-8" />,
    color: "text-red-400",
    bgGradient: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-400",
    route: "/toxicity-compass",
    duration: "5-8 min",
    points: 200,
    unlockMessage: "Heal from toxic relationship patterns"
  },
  {
    id: "relationship-patterns",
    title: "Relationship Patterns",
    subtitle: "Level 3: Behavioral Analysis",
    description: "Identify your dominant relationship patterns and understand how they influence connections.",
    icon: <Users className="h-8 w-8" />,
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-400",
    route: "/relationship-patterns",
    duration: "7-10 min",
    points: 300,
    unlockMessage: "Master your relationship dynamics"
  },

];

const singleTests = [
  {
    id: "intelligence-map",
    title: "Intelligence Map",
    subtitle: "Level 1: Mind Analysis",
    description: "Discover your dominant intelligence type and how you naturally process the world around you.",
    icon: <Brain className="h-8 w-8" />,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400",
    route: "/intelligence-map",
    duration: "8-12 min",
    points: 300,
    unlockMessage: "Understand how your mind works"
  },
  {
    id: "attachment-style",
    title: "Attachment Style Audit",
    subtitle: "Level 2: Connection Patterns",
    description: "Explore your attachment style and how you build relationships, even when single.",
    icon: <Heart className="h-8 w-8" />,
    color: "text-pink-400",
    bgGradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-400",
    route: "/attachment-style",
    duration: "6-10 min",
    points: 250,
    unlockMessage: "Discover your connection patterns"
  },
  {
    id: "identity-compass",
    title: "Identity Compass",
    subtitle: "Level 3: Core Identity",
    description: "Reveal the dominant forces that shape your decisions, values, and life direction.",
    icon: <Compass className="h-8 w-8" />,
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-400",
    route: "/identity-compass",
    duration: "7-11 min",
    points: 275,
    unlockMessage: "Find your true identity"
  },

];

export default function Journey() {
  const [, setLocation] = useLocation();
  const [journeyType, setJourneyType] = useState<'relationship' | 'single'>('relationship');
  const [progress, setProgress] = useState<TestProgress>({
    shadowTest: false,
    toxicityCompass: false,
    relationshipPatterns: false,
    intelligenceMap: false,
    attachmentStyle: false,
    identityCompass: false
  });
  const [results, setResults] = useState<TestResult[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('psychTestProgress');
    const savedResults = localStorage.getItem('psychTestResults');
    
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  useEffect(() => {
    // Calculate total points based on actual test values and journey type
    let points = 0;
    if (journeyType === 'relationship') {
      if (progress.shadowTest) points += 250;
      if (progress.toxicityCompass) points += 200;
      if (progress.relationshipPatterns) points += 300;
      
      // Only show summary when ALL 3 relationship tests are completed
      const allCompleted = progress.shadowTest && progress.toxicityCompass && 
                          progress.relationshipPatterns;
      setShowSummary(allCompleted);
    } else {
      if (progress.intelligenceMap) points += 300;
      if (progress.attachmentStyle) points += 250;
      if (progress.identityCompass) points += 275;
      
      // Only show summary when ALL 3 single tests are completed
      const allCompleted = progress.intelligenceMap && progress.attachmentStyle && 
                          progress.identityCompass;
      setShowSummary(allCompleted);
    }
    setTotalPoints(points);
  }, [progress, journeyType]);

  const getTestStatus = (testIndex: number) => {
    if (testIndex === 0) return 'available';
    
    // Check if all previous tests are completed based on journey type
    const progressKeys: (keyof TestProgress)[] = journeyType === 'relationship' 
      ? ['shadowTest', 'toxicityCompass', 'relationshipPatterns']
      : ['intelligenceMap', 'attachmentStyle', 'identityCompass'];
    
    for (let i = 0; i < testIndex; i++) {
      if (!progress[progressKeys[i]]) {
        return 'locked';
      }
    }
    
    return 'available';
  };

  const isTestCompleted = (testId: string) => {
    const progressMap: Record<string, keyof TestProgress> = {
      'shadow-test': 'shadowTest',
      'toxicity-compass': 'toxicityCompass',
      'relationship-patterns': 'relationshipPatterns',
      'integration-guide': 'integrationGuide',
      'intelligence-map': 'intelligenceMap',
      'attachment-style': 'attachmentStyle',
      'identity-compass': 'identityCompass',
      'inner-driver': 'innerDriver'
    };
    const progressKey = progressMap[testId];
    return progress[progressKey];
  };

  const getCompletionPercentage = () => {
    if (journeyType === 'relationship') {
      const completedCount = [progress.shadowTest, progress.toxicityCompass, progress.relationshipPatterns].filter(Boolean).length;
      return (completedCount / 3) * 100;
    } else {
      const completedCount = [progress.intelligenceMap, progress.attachmentStyle, progress.identityCompass].filter(Boolean).length;
      return (completedCount / 3) * 100;
    }
  };

  const getCompletedTestsCount = () => {
    if (journeyType === 'relationship') {
      return [progress.shadowTest, progress.toxicityCompass, progress.relationshipPatterns, progress.integrationGuide].filter(Boolean).length;
    } else {
      return [progress.intelligenceMap, progress.attachmentStyle, progress.identityCompass, progress.innerDriver].filter(Boolean).length;
    }
  };

  const startTest = (route: string) => {
    setLocation(route);
  };

  const viewResult = (testId: string) => {
    // Navigate to specific result page
    const resultRoutes: Record<string, string> = {
      'shadow-test': '/results',
      'toxicity-compass': '/toxicity-results',
      'relationship-patterns': '/relationship-pattern-results',
      'integration-guide': '/integration-guide-results',
      'intelligence-map': '/intelligence-map-results',
      'attachment-style': '/attachment-style-results',
      'identity-compass': '/identity-compass-results',
      'inner-driver': '/inner-driver-results'
    };
    setLocation(resultRoutes[testId]);
  };

  const shareProgress = () => {
    const completedCount = Object.values(progress).filter(Boolean).length;
    const text = `I've completed ${completedCount}/4 psychological assessments on my journey to self-discovery! 🧠✨`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Psychology Journey',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
  };

  const restartJourney = () => {
    if (confirm('Are you sure you want to restart your journey? This will clear all progress and results.')) {
      // Clear all stored data
      localStorage.removeItem('psychTestProgress');
      localStorage.removeItem('psychTestResults');
      localStorage.removeItem('shadowTestResult');
      localStorage.removeItem('toxicityResult');
      localStorage.removeItem('relationshipPatternResult');
      localStorage.removeItem('integrationGuideResult');
      
      // Reset state
      setProgress({
        shadowTest: false,
        toxicityCompass: false,
        relationshipPatterns: false,
        integrationGuide: false,
        intelligenceMap: false,
        attachmentStyle: false,
        identityCompass: false,
        innerDriver: false
      });
      setResults([]);
      setTotalPoints(0);
      setShowSummary(false);
    }
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
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))]">
                Your Psychology Journey
              </h1>
              <p className="text-[hsl(var(--metallic-silver))] mt-1">
                Complete all levels to unlock your comprehensive psychological profile
              </p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold text-[hsl(var(--silver-glow))]">{getCompletedTestsCount()}/3</span>
                <span className="text-[hsl(var(--metallic-silver))] text-sm">Tests Complete</span>
              </div>
              <Progress value={getCompletionPercentage()} className="w-32" />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Journey Type Toggle */}
        <motion.div 
          className="flex items-center justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 bg-[hsl(var(--dark-gray))] rounded-full p-2 border border-[hsl(var(--border))]">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              journeyType === 'single' ? 'bg-blue-500/20 text-blue-300' : 'text-gray-400'
            }`}>
              <User className="h-4 w-4" />
              <Label htmlFor="journey-toggle" className="cursor-pointer">Personality</Label>
            </div>
            <Switch
              id="journey-toggle"
              checked={journeyType === 'relationship'}
              onCheckedChange={(checked) => setJourneyType(checked ? 'relationship' : 'single')}
              className="data-[state=checked]:bg-purple-500"
            />
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              journeyType === 'relationship' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400'
            }`}>
              <Heart className="h-4 w-4" />
              <Label htmlFor="journey-toggle" className="cursor-pointer">Relationship</Label>
            </div>
          </div>
        </motion.div>

        {/* Journey Description */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-serif text-xl font-semibold text-[hsl(var(--silver-glow))] mb-3">
            {journeyType === 'relationship' ? 'Relationship Journey' : 'Personality Journey'}
          </h2>
          <p className="text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto">
            {journeyType === 'relationship' 
              ? 'Explore your shadow archetypes, relationship patterns, and integration path for deeper connections'
              : 'Discover your intelligence type, attachment style, identity compass, and inner drivers for personal mastery'
            }
          </p>
        </motion.div>
        
        {/* Journey Ladder */}
        <div className="relative">
          {/* Connecting Line */}
          <div className={`absolute left-12 top-8 bottom-8 w-1 bg-gradient-to-b opacity-30 ${
            journeyType === 'relationship' 
              ? 'from-purple-400 via-red-400 via-emerald-400 to-amber-400'
              : 'from-blue-400 via-pink-400 via-emerald-400 to-yellow-400'
          }`}></div>
          
          <div className="space-y-8">
            {(journeyType === 'relationship' ? relationshipTests : singleTests).map((test, index) => {
              const status = getTestStatus(index);
              const completed = isTestCompleted(test.id);
              
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Level Indicator */}
                  <div className={`absolute left-8 top-8 w-8 h-8 rounded-full border-4 ${test.borderColor} flex items-center justify-center z-10 ${
                    completed ? `bg-gradient-to-br ${test.bgGradient}` : 
                    status === 'locked' ? 'bg-[hsl(var(--dark-gray))] border-gray-600' : 
                    'bg-[hsl(var(--deep-black))]'
                  }`}>
                    {completed ? (
                      <CheckCircle className={`h-4 w-4 ${test.color}`} />
                    ) : status === 'locked' ? (
                      <Lock className="h-4 w-4 text-gray-500" />
                    ) : (
                      <div className={`w-2 h-2 rounded-full bg-current ${test.color}`} />
                    )}
                  </div>

                  {/* Test Card */}
                  <Card className={`ml-20 ${
                    completed ? `bg-gradient-to-r ${test.bgGradient} border-${test.borderColor.split('-')[1]}-400` :
                    status === 'locked' ? 'bg-[hsl(var(--dark-gray))] border-gray-600 opacity-60' :
                    `bg-gradient-to-r ${test.bgGradient} border-[hsl(var(--border))] hover:border-[hsl(var(--metallic-silver)/0.5)]`
                  } transition-all duration-300 ${status === 'available' ? 'hover:shadow-glow cursor-pointer' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full ${status === 'locked' ? 'bg-gray-600' : `bg-gradient-to-br ${test.bgGradient}`} flex items-center justify-center ${test.color}`}>
                            {test.icon}
                          </div>
                          <div>
                            <Badge variant="outline" className={`${test.color} border-current mb-2`}>
                              {test.subtitle}
                            </Badge>
                            <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))]">
                              {test.title}
                            </h3>
                          </div>
                        </div>
                        
                        {completed && (
                          <div className="text-center">
                            <Award className={`h-8 w-8 ${test.color} mx-auto mb-1`} />
                            <div className="text-sm font-semibold text-[hsl(var(--silver-glow))]">
                              +{test.points} pts
                            </div>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-[hsl(var(--metallic-silver))] mb-4 leading-relaxed">
                        {status === 'locked' ? 'Complete previous levels to unlock' : test.description}
                      </p>
                      
                      {status === 'available' && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-[hsl(var(--metallic-silver))] text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{test.duration}</span>
                          </div>
                          
                          {completed ? (
                            <Button
                              onClick={() => viewResult(test.id)}
                              size="lg"
                              className={`px-6 py-3 font-semibold bg-gradient-to-r ${test.bgGradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                              View Results
                              <ChevronUp className="ml-2 h-5 w-5" />
                            </Button>
                          ) : (
                            <Button
                              onClick={() => startTest(test.route)}
                              size="lg"
                              className={`px-6 py-3 font-semibold bg-gradient-to-r ${test.bgGradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                              {index === 0 ? 'Begin Journey' : 'Start Level'}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          )}
                        </div>
                      )}
                      
                      {status === 'locked' && (
                        <div className="text-center py-4">
                          <p className="text-[hsl(var(--metallic-silver))] text-sm italic">
                            {test.unlockMessage}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Summary Section */}
        <AnimatePresence>
          {Object.values(progress).some(Boolean) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <Card className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10 border-[hsl(var(--metallic-silver)/0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-emerald-500/5" />
                
                <CardHeader className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      showSummary 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                        : 'bg-gradient-to-br from-purple-400 to-blue-400'
                    }`}>
                      {showSummary ? (
                        <Trophy className="h-8 w-8 text-white" />
                      ) : (
                        <Star className="h-8 w-8 text-white" />
                      )}
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                    {showSummary ? 'Journey Complete!' : 'Journey in Progress'}
                  </h2>
                  <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto">
                    {showSummary 
                      ? 'Congratulations! You\'ve completed all four psychological assessments. Here\'s your comprehensive psychological profile and personalized insights.'
                      : 'You\'re making great progress on your psychological journey. Continue completing assessments to unlock your comprehensive profile.'
                    }
                  </p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-8">
                  {/* Achievement Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{Math.round(getCompletionPercentage())}%</div>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm">Progress Complete</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{totalPoints}</div>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm">Total Points</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {Object.values(progress).filter(Boolean).length}/4
                      </div>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm">Tests Complete</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">
                        {showSummary ? '⭐' : '🔓'}
                      </div>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm">
                        {showSummary ? 'Self-Discovery Master' : 'Unlocking Insights'}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 justify-center px-6 sm:px-8">
                    {showSummary ? (
                      <>
                        <Button
                          onClick={() => setLocation(journeyType === 'relationship' ? '/relationship-comprehensive-summary' : '/comprehensive-summary')}
                          size="lg"
                          className="w-full sm:w-auto px-6 py-4 text-base sm:text-lg font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 hover:from-purple-600 hover:via-blue-600 hover:to-emerald-600 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                        >
                          <span className="truncate">View Complete Profile</span>
                          <Target className="ml-2 h-5 w-5 flex-shrink-0" />
                        </Button>
                        
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={shareProgress}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                          >
                            Share Achievement
                            <Share2 className="ml-2 h-4 w-4" />
                          </Button>
                          
                          <Button
                            onClick={restartJourney}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                          >
                            Restart Journey
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={() => setLocation('/')}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                          >
                            <Home className="mr-2 h-4 w-4" />
                            Home
                          </Button>
                          
                          <Button
                            onClick={shareProgress}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                          >
                            Share Progress
                            <Share2 className="ml-2 h-4 w-4" />
                          </Button>
                          
                          <Button
                            onClick={restartJourney}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                          >
                            Restart Journey
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </div>
  );
}
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
    psychologicalInsights: string[];
    behavioralPatterns: string[];
    lifeThemes: string[];
    unconsciousMotivations: string[];
  };
  strengths: string[];
  growthAreas: string[];
  actionPlan: string[];
  nextSteps: string[];
  comprehensiveInterpretation: {
    corePersonality: string[];
    relationshipStyle: string[];
    lifeChallenges: string[];
    spiritualJourney: string[];
    careerGuidance: string[];
    healingPriorities: string[];
  };
  integrationGuidance: {
    dailyPractices: string[];
    therapeuticRecommendations: string[];
    bookRecommendations: string[];
    journalingPrompts: string[];
    meditationPractices: string[];
    relationshipExercises: string[];
  };
  completionDate: string;
  totalPoints: number;
  psychologicalMaturity: number;
  emotionalIntelligence: number;
  relationshipHealth: number;
  personalGrowthPotential: number;
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

  // Helper functions for comprehensive analysis
  const calculatePsychologicalMaturity = (shadowResult: any, toxicityResult: any, relationshipResult: any, integrationResult: any): number => {
    let score = 50;
    if (shadowResult) score += 20;
    if (toxicityResult?.zone === 'green') score += 20;
    if (toxicityResult?.zone === 'yellow') score += 10;
    if (relationshipResult) score += 15;
    if (integrationResult?.integrationLevel === 'high') score += 20;
    if (integrationResult?.integrationLevel === 'medium') score += 10;
    return Math.min(score, 100);
  };

  const calculateEmotionalIntelligence = (shadowResult: any, toxicityResult: any, relationshipResult: any, integrationResult: any): number => {
    let score = 40;
    if (shadowResult) score += 25;
    if (toxicityResult?.zone === 'green') score += 25;
    if (toxicityResult?.zone === 'yellow') score += 15;
    if (relationshipResult) score += 20;
    if (integrationResult) score += 15;
    return Math.min(score, 100);
  };

  const calculateRelationshipHealth = (toxicityResult: any, relationshipResult: any): number => {
    let score = 30;
    if (toxicityResult?.zone === 'green') score += 40;
    if (toxicityResult?.zone === 'yellow') score += 25;
    if (toxicityResult?.zone === 'red') score += 10;
    if (relationshipResult) score += 30;
    return Math.min(score, 100);
  };

  const calculateGrowthPotential = (shadowResult: any, integrationResult: any): number => {
    let score = 60;
    if (shadowResult) score += 20;
    if (integrationResult?.integrationLevel === 'high') score += 20;
    if (integrationResult?.integrationLevel === 'medium') score += 15;
    if (integrationResult?.integrationLevel === 'low') score += 10;
    return Math.min(score, 100);
  };

  const generatePsychologicalInsights = (shadowResult: any, toxicityResult: any, relationshipResult: any, integrationResult: any): string[] => {
    const insights = [
      "Your personality is a complex mosaic of conscious and unconscious patterns that have shaped throughout your entire life",
      "Your archetype represents the core of your psychic structure - the fundamental motivational and behavioral forces",
      "The toxicity level in relationships reflects your ability to maintain healthy emotional boundaries",
      "Relationship patterns reveal deep needs regarding intimacy, autonomy, and emotional security",
      "Psychological integration is the process of consciously incorporating all aspects of personality into a coherent whole",
      "Your responses reveal a unique combination of strengths and areas requiring further development",
      "Your psychological profile shows how unconscious motives influence your conscious life choices",
      "Emotional intelligence manifests in how you handle your own and others' emotions"
    ];

    if (shadowResult?.archetype === "The Sage") {
      insights.push("As a Sage, your need to understand the world can sometimes lead to intellectualizing emotions");
    }
    if (shadowResult?.archetype === "The Hero") {
      insights.push("The Hero archetype indicates a strong need to face challenges and protect others");
    }
    if (toxicityResult?.zone === 'red') {
      insights.push("High toxicity levels may indicate unresolved trauma or patterns from childhood");
    }

    return insights;
  };

  const generateBehavioralPatterns = (shadowResult: any, relationshipResult: any): string[] => {
    return [
      "Behavioral patterns are automatic responses developed in reaction to life experiences",
      "Your dominant archetype influences how you approach problems and make decisions",
      "In stressful situations, you likely return to familiar, safe behavioral patterns",
      "Relational behavioral patterns reflect your early experiences with caregivers",
      "Awareness of your own patterns is the first step toward conscious change",
      "Some behaviors serve as defensive mechanisms protecting against emotional pain",
      "Positive patterns are worth strengthening, while destructive ones should be gradually transformed",
      "Changing behavioral patterns requires time, patience, and consistent practice"
    ];
  };

  const generateLifeThemes = (shadowResult: any, toxicityResult: any, relationshipResult: any, integrationResult: any): string[] => {
    return [
      "Core life themes are recurring motifs in your experiences and choices",
      "Your archetype reveals central existential questions that drive your search for meaning",
      "Relationship patterns point to key lessons about love, intimacy, and trust",
      "Your integration level reflects your readiness to confront difficult aspects of yourself",
      "Life themes are often connected to unresolved conflicts from the past",
      "Each test reveals different aspects of your journey toward greater authenticity and wholeness",
      "Recurring patterns in life often carry important messages to understand",
      "Integration of all personality aspects leads to greater coherence and inner peace"
    ];
  };

  const generateUnconsciousMotivations = (shadowResult: any, relationshipResult: any): string[] => {
    return [
      "Unconscious motivations are deep driving forces that influence your choices without conscious control",
      "Your archetype represents fundamental psychic needs hidden below the surface of consciousness",
      "Relationship patterns often reflect unconscious attempts to heal old emotional wounds",
      "Projection onto others may reveal unaccepted aspects of your own personality",
      "Recurring conflicts often point to unresolved internal contradictions",
      "Unconscious fears can sabotage conscious goals and dreams",
      "Understanding unconscious motivations increases freedom of choice and authenticity",
      "Working with the unconscious requires courage, patience, and often professional support"
    ];
  };

  const generateCorePersonality = (shadowResult: any, relationshipResult: any): string[] => {
    const core = [
      "Your foundational personality structure combines unique archetypal traits with individual life experiences",
      "The core of personality remains relatively stable, but can evolve through conscious self-work",
      "The combination of archetype and relationship patterns creates your unique psychological signature",
      "Authentic self-expression requires acceptance and integration of all personality aspects"
    ];

    if (shadowResult?.archetype) {
      core.push(`As ${shadowResult.archetype}, your personality centers around specific values and motivations`);
    }

    return core;
  };

  const generateRelationshipStyle = (toxicityResult: any, relationshipResult: any): string[] => {
    const style = [
      "Your relational style reflects deep needs regarding intimacy, autonomy, and security",
      "Relationship patterns often stem from early experiences with caregivers and first significant others",
      "Healthy relationships require balance between closeness and maintaining your own identity",
      "Awareness of your relational style helps build more satisfying connections with others"
    ];

    if (toxicityResult?.zone === 'green') {
      style.push("Your healthy toxicity level indicates ability to maintain balanced relationships");
    } else if (toxicityResult?.zone === 'yellow') {
      style.push("Moderate toxicity level suggests need for work on emotional boundaries");
    } else if (toxicityResult?.zone === 'red') {
      style.push("High toxicity level indicates priority need for healing relationship patterns");
    }

    return style;
  };

  const generateLifeChallenges = (shadowResult: any, toxicityResult: any, relationshipResult: any): string[] => {
    return [
      "Major life challenges often reflect areas requiring the greatest psychological growth",
      "Each archetype carries specific temptations and pitfalls that require awareness",
      "Toxic patterns in relationships can be a source of recurring life difficulties",
      "Unintegrated personality aspects often manifest as external problems and conflicts",
      "The greatest challenges often hide the greatest opportunities for growth and transformation",
      "Working with challenges requires courage, patience, and often support from others",
      "Each overcome challenge increases psychological resilience and life wisdom"
    ];
  };

  const generateSpiritualJourney = (shadowResult: any, integrationResult: any): string[] => {
    return [
      "The spiritual journey is a process of discovering deeper meaning and purpose in life",
      "Shadow work is a fundamental aspect of spiritual development in the Jungian tradition",
      "Integration of different personality aspects leads to greater wholeness and authenticity",
      "Spirituality can encompass both traditional religious practices and personal searches for meaning",
      "Confronting your own limitations and weaknesses often opens the path to transcendence",
      "Spiritual development often involves cultivating compassion for yourself and others",
      "Contemplative practices can support the process of integration and self-knowledge"
    ];
  };

  const generateCareerGuidance = (shadowResult: any, relationshipResult: any): string[] => {
    const guidance = [
      "Career choice should consider your natural talents and archetypal predispositions",
      "Satisfying work often reflects deep personal values and motivations",
      "Relational style influences preferences for teamwork versus independent work",
      "Work environment should support your natural functioning and communication style"
    ];

    if (shadowResult?.archetype === "The Sage") {
      guidance.push("As a Sage, you likely flourish in roles related to teaching, research, or counseling");
    } else if (shadowResult?.archetype === "The Hero") {
      guidance.push("The Hero archetype predisposes you to leadership roles and situations requiring courage");
    } else if (shadowResult?.archetype === "The Creator") {
      guidance.push("As a Creator, you need space for innovation and creative expression");
    }

    return guidance;
  };

  const generateHealingPriorities = (toxicityResult: any, integrationResult: any): string[] => {
    const priorities = [
      "Healing priorities should consider the most urgent psychological needs",
      "Toxic patterns in relationships often require priority attention and professional support",
      "Healing is a gradual process requiring patience and self-acceptance",
      "Integration of traumatic experiences is crucial for complete mental health"
    ];

    if (toxicityResult?.zone === 'red') {
      priorities.push("High priorities: establishing healthy boundaries, trauma work, building support");
    } else if (toxicityResult?.zone === 'yellow') {
      priorities.push("Medium priorities: strengthening emotional boundaries, improving communication");
    }

    if (integrationResult?.integrationLevel === 'low') {
      priorities.push("Key focus: beginning systematic shadow work and unconscious aspects");
    }

    return priorities;
  };

  const generateDailyPractices = (shadowResult: any, toxicityResult: any, integrationResult: any): string[] => {
    return [
      "Daily 10-minute mindfulness meditation to increase self-awareness",
      "Keeping a journal of emotions and behavioral patterns",
      "Gratitude practice - writing down three things daily that you're grateful for",
      "Regular checking of emotional boundaries in relationships",
      "Conscious breathing in stressful situations",
      "Self-acceptance practice - daily supportive affirmations",
      "Brief visualization sessions of positive scenarios",
      "Regular checking of emotional and physical needs"
    ];
  };

  const generateTherapeuticRecommendations = (toxicityResult: any, relationshipResult: any): string[] => {
    const recommendations = [
      "Psychodynamic therapy for working with unconscious patterns",
      "Cognitive-behavioral therapy (CBT) for changing destructive thoughts",
      "Schema therapy for working with deep relationship patterns",
      "EMDR for processing traumatic experiences"
    ];

    if (toxicityResult?.zone === 'red') {
      recommendations.push("Priority therapy for working with toxic relationship patterns");
      recommendations.push("Possible need for intensive group therapy or workshops");
    }

    return recommendations;
  };

  const generateBookRecommendations = (shadowResult: any, integrationResult: any): string[] => {
    return [
      "'Man and His Symbols' - Carl Gustav Jung (foundations of analytical psychology)",
      "'The Highly Sensitive Person' - Elaine Aron (for highly sensitive individuals)",
      "'The Body Keeps the Score' - Bessel van der Kolk (trauma and healing)",
      "'How to Be an Adult in Relationships' - David Richo (healthy relationships)",
      "'The Power of Now' - Eckhart Tolle (mindfulness practices)",
      "'The Child in You' - Stefanie Stahl (inner child work)",
      "'Waking the Tiger' - Peter Levine (trauma healing)",
      "'The Road Less Traveled' - Scott Peck (spiritual development)"
    ];
  };

  const generateJournalingPrompts = (shadowResult: any, relationshipResult: any): string[] => {
    return [
      "Jakie wzorce z dzieciństwa powtarzam w obecnych relacjach?",
      "Kiedy czuję się najbardziej autentyczny/-a? Co to o mnie mówi?",
      "Jakie emocje najczęściej staram się unikać i dlaczego?",
      "W jaki sposób mój archetyp przejawia się w codziennym życiu?",
      "Które z moich zachowań wynikają z lęku, a które z miłości?",
      "Jakie przesłania otrzymywałem/-am w dzieciństwie o sobie i relacjach?",
      "Co chciałbym/-aby powiedzieć swojemu wewnętrznemu dziecku?",
      "Jakie granice muszę wzmocnić w swoich relacjach?"
    ];
  };

  const generateMeditationPractices = (shadowResult: any, integrationResult: any): string[] => {
    return [
      "Medytacja uważności na oddech (10-20 minut dziennie)",
      "Praktyka loving-kindness dla rozwoju autoakceptacji",
      "Medytacja na obserwacji myśli bez osądzania",
      "Wizualizacja uzdrawiająca dla integracji cienia",
      "Skanowanie ciała dla zwiększenia świadomości somatycznej",
      "Medytacja chodzenia dla uziemienia i obecności",
      "Praktyka wdzięczności z elementami medytacyjnymi",
      "Krótkie medytacje w ciągu dnia dla zarządzania stresem"
    ];
  };

  const generateRelationshipExercises = (toxicityResult: any, relationshipResult: any): string[] => {
    return [
      "Ćwiczenie komunikacji bez osądzania - używanie komunikatów 'ja'",
      "Praktyka aktywnego słuchania z pełną uwagą",
      "Ustalanie i komunikowanie zdrowych granic",
      "Regularne sprawdzanie emocjonalne z partnerem/rodziną",
      "Ćwiczenia budowania zaufania i intymności",
      "Praktyka przepraszania i przebaczania",
      "Wspólne ustalanie wartości i celów w relacji",
      "Ćwiczenia rozwiązywania konfliktów w konstruktywny sposób"
    ];
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

    // Calculate comprehensive metrics
    const psychologicalMaturity = calculatePsychologicalMaturity(shadowResult, toxicityResult, relationshipResult, integrationResult);
    const emotionalIntelligence = calculateEmotionalIntelligence(shadowResult, toxicityResult, relationshipResult, integrationResult);
    const relationshipHealth = calculateRelationshipHealth(toxicityResult, relationshipResult);
    const personalGrowthPotential = calculateGrowthPotential(shadowResult, integrationResult);

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
        personalGrowth: generateGrowthAnalysis(integrationResult),
        psychologicalInsights: generatePsychologicalInsights(shadowResult, toxicityResult, relationshipResult, integrationResult),
        behavioralPatterns: generateBehavioralPatterns(shadowResult, relationshipResult),
        lifeThemes: generateLifeThemes(shadowResult, toxicityResult, relationshipResult, integrationResult),
        unconsciousMotivations: generateUnconsciousMotivations(shadowResult, relationshipResult)
      },
      strengths: generateStrengths(shadowResult, toxicityResult, relationshipResult, integrationResult),
      growthAreas: generateGrowthAreas(shadowResult, toxicityResult, relationshipResult, integrationResult),
      actionPlan: generateActionPlan(shadowResult, toxicityResult, relationshipResult, integrationResult),
      nextSteps: generateNextSteps(shadowResult, toxicityResult, relationshipResult, integrationResult),
      comprehensiveInterpretation: {
        corePersonality: generateCorePersonality(shadowResult, relationshipResult),
        relationshipStyle: generateRelationshipStyle(toxicityResult, relationshipResult),
        lifeChallenges: generateLifeChallenges(shadowResult, toxicityResult, relationshipResult),
        spiritualJourney: generateSpiritualJourney(shadowResult, integrationResult),
        careerGuidance: generateCareerGuidance(shadowResult, relationshipResult),
        healingPriorities: generateHealingPriorities(toxicityResult, integrationResult)
      },
      integrationGuidance: {
        dailyPractices: generateDailyPractices(shadowResult, toxicityResult, integrationResult),
        therapeuticRecommendations: generateTherapeuticRecommendations(toxicityResult, relationshipResult),
        bookRecommendations: generateBookRecommendations(shadowResult, integrationResult),
        journalingPrompts: generateJournalingPrompts(shadowResult, relationshipResult),
        meditationPractices: generateMeditationPractices(shadowResult, integrationResult),
        relationshipExercises: generateRelationshipExercises(toxicityResult, relationshipResult)
      },
      completionDate: new Date().toLocaleDateString(),
      totalPoints,
      psychologicalMaturity,
      emotionalIntelligence,
      relationshipHealth,
      personalGrowthPotential
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

  const generateDemoProfile = (): ComprehensiveProfile => {
    return {
      dominantArchetype: "The Sage",
      archetypeDescription: "You are driven by the desire to understand the world and share wisdom with others.",
      toxicityLevel: "green",
      toxicityScore: 15,
      relationshipPattern: "Secure Attachment",
      integrationLevel: "high",
      overallScore: 85,
      detailedAnalysis: {
        shadowWork: generateShadowAnalysis({ archetype: "The Sage" }),
        emotionalHealth: generateEmotionalAnalysis({ zone: "green", percentage: 15 }),
        relationshipDynamics: generateRelationshipAnalysis({ dominantPattern: "Secure" }),
        personalGrowth: generateGrowthAnalysis({ integrationLevel: "high" }),
        psychologicalInsights: generatePsychologicalInsights(
          { archetype: "The Sage" },
          { zone: "green", percentage: 15 },
          { dominantPattern: "Secure" },
          { integrationLevel: "high" }
        ),
        behavioralPatterns: generateBehavioralPatterns(
          { archetype: "The Sage" },
          { dominantPattern: "Secure" }
        ),
        lifeThemes: generateLifeThemes(
          { archetype: "The Sage" },
          { zone: "green", percentage: 15 },
          { dominantPattern: "Secure" },
          { integrationLevel: "high" }
        ),
        unconsciousMotivations: generateUnconsciousMotivations(
          { archetype: "The Sage" },
          { dominantPattern: "Secure" }
        )
      },
      strengths: [
        "Głęboka mądrość i dążenie do zrozumienia",
        "Zdolność do nauczania i dzielenia się wiedzą",
        "Silna intuicja i wgląd w ludzką naturę",
        "Naturalna skłonność do refleksji i analizy",
        "Umiejętność widzenia szerszego obrazu"
      ],
      growthAreas: [
        "Równoważenie intelektu z emocjami",
        "Unikanie nadmiernej analizy kosztem działania",
        "Rozwijanie cierpliwości wobec mniej doświadczonych",
        "Praktyczne zastosowanie teoretycznej wiedzy"
      ],
      actionPlan: generateActionPlan(),
      nextSteps: generateNextSteps(),
      comprehensiveInterpretation: {
        corePersonality: generateCorePersonality(
          { archetype: "The Sage" },
          { dominantPattern: "Secure" }
        ),
        relationshipStyle: generateRelationshipStyle(
          { zone: "green", percentage: 15 },
          { dominantPattern: "Secure" }
        ),
        lifeChallenges: generateLifeChallenges(
          { archetype: "The Sage" },
          { zone: "green", percentage: 15 },
          { dominantPattern: "Secure" }
        ),
        spiritualJourney: generateSpiritualJourney(
          { archetype: "The Sage" },
          { integrationLevel: "high" }
        ),
        careerGuidance: generateCareerGuidance(
          { archetype: "The Sage" },
          { dominantPattern: "Secure" }
        ),
        healingPriorities: generateHealingPriorities(
          { zone: "green", percentage: 15 },
          { integrationLevel: "high" }
        )
      },
      integrationGuidance: {
        dailyPractices: generateDailyPractices(
          { archetype: "The Sage" },
          { zone: "green", percentage: 15 },
          { integrationLevel: "high" }
        ),
        therapeuticRecommendations: generateTherapeuticRecommendations(
          { zone: "green", percentage: 15 },
          { dominantPattern: "Secure" }
        ),
        bookRecommendations: generateBookRecommendations(
          { archetype: "The Sage" },
          { integrationLevel: "high" }
        ),
        journalingPrompts: generateJournalingPrompts(
          { archetype: "The Sage" },
          { dominantPattern: "Secure" }
        ),
        meditationPractices: generateMeditationPractices(
          { archetype: "The Sage" },
          { integrationLevel: "high" }
        ),
        relationshipExercises: generateRelationshipExercises(
          { zone: "green", percentage: 15 },
          { dominantPattern: "Secure" }
        )
      },
      completionDate: new Date().toLocaleDateString(),
      totalPoints: 1100,
      psychologicalMaturity: 90,
      emotionalIntelligence: 85,
      relationshipHealth: 92,
      personalGrowthPotential: 88
    };
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
      } else {
        // For demonstration purposes, create a sample profile to show the comprehensive analysis
        const demoProfile = generateDemoProfile();
        setProfile(demoProfile);
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
      navigator.clipboard.writeText(text);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-lg">Loading your comprehensive profile...</p>
        </div>
      </div>
    );
  }

  // Show assessment incomplete message if not all tests are done
  if (!profile) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto bg-gray-900/80 border-gray-700">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Assessment Incomplete</h2>
            <p className="text-gray-300 mb-6">
              You need to complete all four psychological assessments to view your comprehensive summary.
            </p>
            <Button
              onClick={() => setLocation('/journey')}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Journey
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-yellow-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Psychological Profile
            </h1>
            <Award className="h-8 w-8 text-yellow-400" />
          </div>
          <p className="text-gray-300 text-lg">
            Your complete psychological landscape revealed through archetypal analysis
          </p>
        </motion.div>

        {/* Overall Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{profile.psychologicalMaturity}%</div>
                  <div className="text-gray-300">Psychological Maturity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{profile.emotionalIntelligence}%</div>
                  <div className="text-gray-300">Emotional Intelligence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{profile.relationshipHealth}%</div>
                  <div className="text-gray-300">Relationship Health</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{profile.personalGrowthPotential}%</div>
                  <div className="text-gray-300">Growth Potential</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          <Card className="bg-gray-900/80 border-gray-700">
            <CardHeader>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-400" />
                Dominant Archetype
              </h3>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400 mb-2">{profile.dominantArchetype}</div>
              <p className="text-gray-300">{profile.archetypeDescription}</p>
            </CardContent>
          </Card>

          <Card className={`bg-gray-900/80 border-gray-700`}>
            <CardHeader>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-400" />
                Relationship Health
              </h3>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold mb-2 ${getToxicityLevelColor(profile.toxicityLevel)}`}>
                {profile.toxicityLevel.toUpperCase()} Zone
              </div>
              <p className="text-gray-300">Toxicity Level: {profile.toxicityScore}%</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Analysis Sections */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Psychological Insights */}
            <Card className="bg-gray-900/80 border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Eye className="h-5 w-5 text-indigo-400" />
                  Głębokie Analizy Psychologiczne
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.detailedAnalysis.psychologicalInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-indigo-400">
                    <p className="text-gray-300">{insight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Behavioral Patterns */}
            <Card className="bg-gray-900/80 border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  Wzorce Behawioralne
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.detailedAnalysis.behavioralPatterns.map((pattern, index) => (
                  <div key={index} className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-gray-300">{pattern}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Life Themes */}
            <Card className="bg-gray-900/80 border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Główne Tematy Życiowe
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.detailedAnalysis.lifeThemes.map((theme, index) => (
                  <div key={index} className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-gray-300">{theme}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Unconscious Motivations */}
            <Card className="bg-gray-900/80 border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Compass className="h-5 w-5 text-purple-400" />
                  Nieświadome Motywacje
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.detailedAnalysis.unconsciousMotivations.map((motivation, index) => (
                  <div key={index} className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-purple-400">
                    <p className="text-gray-300">{motivation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Comprehensive Interpretation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-400" />
                    Rdzeń Osobowości
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.comprehensiveInterpretation.corePersonality.map((trait, index) => (
                    <p key={index} className="text-gray-300 text-sm">{trait}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-400" />
                    Styl Relacyjny
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.comprehensiveInterpretation.relationshipStyle.map((style, index) => (
                    <p key={index} className="text-gray-300 text-sm">{style}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-400" />
                    Wyzwania Życiowe
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.comprehensiveInterpretation.lifeChallenges.map((challenge, index) => (
                    <p key={index} className="text-gray-300 text-sm">{challenge}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                    Podróż Duchowa
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.comprehensiveInterpretation.spiritualJourney.map((journey, index) => (
                    <p key={index} className="text-gray-300 text-sm">{journey}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-blue-400" />
                    Wskazówki Kariery
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.comprehensiveInterpretation.careerGuidance.map((guidance, index) => (
                    <p key={index} className="text-gray-300 text-sm">{guidance}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-400" />
                    Priorytety Uzdrawiania
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.comprehensiveInterpretation.healingPriorities.map((priority, index) => (
                    <p key={index} className="text-gray-300 text-sm">{priority}</p>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Integration Guidance */}
            <Card className="bg-gray-900/80 border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  Przewodnik Integracji i Praktyk
                </h3>
              </CardHeader>
              <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-3">Codzienne Praktyki</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {profile.integrationGuidance.dailyPractices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Rekomendacje Terapeutyczne</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {profile.integrationGuidance.therapeuticRecommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400 mb-3">Rekomendacje Książek</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {profile.integrationGuidance.bookRecommendations.map((book, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <BookOpen className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-400 mb-3">Pytania do Dziennika</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {profile.integrationGuidance.journalingPrompts.map((prompt, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {prompt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-400 mb-3">Praktyki Medytacyjne</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {profile.integrationGuidance.meditationPractices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-400 mb-3">Ćwiczenia Relacyjne</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {profile.integrationGuidance.relationshipExercises.map((exercise, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button
            onClick={() => setLocation('/journey')}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Journey
          </Button>
          
          <Button
            onClick={shareResults}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Results
          </Button>

          <Button
            onClick={() => setLocation('/')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
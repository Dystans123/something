import { integrationGuideQuestions, integrationLevels } from "@/data/integration-guide-questions";

export interface IntegrationGuideAnswer {
  questionIndex: number;
  optionIndex: number;
  integration: string;
  value: number;
}

export interface IntegrationGuideState {
  currentQuestionIndex: number;
  answers: IntegrationGuideAnswer[];
  isComplete: boolean;
}

export interface IntegrationGuideResult {
  integrationLevel: string;
  averageScore: number;
  categoryScores: Record<string, number>;
  strengths: string[];
  growthAreas: string[];
  personalizedGuidance: string[];
}

export function calculateIntegrationGuideResult(answers: IntegrationGuideAnswer[]): IntegrationGuideResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
  const averageScore = totalScore / answers.length;
  
  // Calculate category scores
  const categoryScores: Record<string, number> = {};
  const categoryCount: Record<string, number> = {};
  
  answers.forEach((answer, index) => {
    const question = integrationGuideQuestions[index];
    const category = question.category;
    
    if (!categoryScores[category]) {
      categoryScores[category] = 0;
      categoryCount[category] = 0;
    }
    
    categoryScores[category] += answer.value;
    categoryCount[category]++;
  });
  
  // Average scores by category
  Object.keys(categoryScores).forEach(category => {
    categoryScores[category] = categoryScores[category] / categoryCount[category];
  });

  // Determine integration level
  const integrationLevel = determineIntegrationLevel(averageScore);
  
  // Generate insights
  const strengths = identifyStrengths(categoryScores);
  const growthAreas = identifyGrowthAreas(categoryScores);
  const personalizedGuidance = generatePersonalizedGuidance(integrationLevel, categoryScores);

  return {
    integrationLevel,
    averageScore,
    categoryScores,
    strengths,
    growthAreas,
    personalizedGuidance
  };
}

function determineIntegrationLevel(averageScore: number): string {
  if (averageScore >= 4.5) return "resistance";
  if (averageScore >= 3.5) return "emerging-awareness";
  if (averageScore >= 2.5) return "developing-awareness";
  if (averageScore >= 1.5) return "compassionate-awareness";
  return "integrated-awareness";
}

function identifyStrengths(categoryScores: Record<string, number>): string[] {
  const strengths: string[] = [];
  
  // Find categories with lowest scores (highest integration)
  const sortedCategories = Object.entries(categoryScores)
    .sort(([,a], [,b]) => a - b)
    .slice(0, 3);

  sortedCategories.forEach(([category, score]) => {
    if (score <= 2.5) {
      switch (category) {
        case "Self-Awareness":
          strengths.push("Strong self-awareness and emotional intelligence");
          break;
        case "Self-Acceptance":
          strengths.push("Healthy self-acceptance and compassion");
          break;
        case "Shadow Integration":
          strengths.push("Comfortable with your darker impulses and emotions");
          break;
        case "Feedback Integration":
          strengths.push("Open to feedback and personal growth");
          break;
        case "Growth Mindset":
          strengths.push("Embraces challenges as opportunities for learning");
          break;
        case "Emotional Integration":
          strengths.push("Healthy relationship with vulnerability and emotions");
          break;
        case "Boundary Integration":
          strengths.push("Clear, loving boundaries with yourself and others");
          break;
        default:
          strengths.push(`Well-developed ${category.toLowerCase()} skills`);
      }
    }
  });

  if (strengths.length === 0) {
    strengths.push("You're beginning your integration journey with courage and openness");
  }

  return strengths;
}

function identifyGrowthAreas(categoryScores: Record<string, number>): string[] {
  const growthAreas: string[] = [];
  
  // Find categories with highest scores (areas needing integration)
  const sortedCategories = Object.entries(categoryScores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  sortedCategories.forEach(([category, score]) => {
    if (score >= 3.0) {
      switch (category) {
        case "Self-Awareness":
          growthAreas.push("Developing deeper self-awareness and emotional recognition");
          break;
        case "Self-Acceptance":
          growthAreas.push("Cultivating self-compassion and acceptance of all parts");
          break;
        case "Shadow Integration":
          growthAreas.push("Integrating and accepting your shadow aspects");
          break;
        case "Feedback Integration":
          growthAreas.push("Opening to feedback without defensiveness");
          break;
        case "Growth Mindset":
          growthAreas.push("Embracing imperfection and the learning process");
          break;
        case "Emotional Integration":
          growthAreas.push("Developing comfort with vulnerability and intense emotions");
          break;
        case "Boundary Integration":
          growthAreas.push("Learning to set healthy boundaries without guilt");
          break;
        default:
          growthAreas.push(`Further development in ${category.toLowerCase()}`);
      }
    }
  });

  return growthAreas;
}

function generatePersonalizedGuidance(integrationLevel: string, categoryScores: Record<string, number>): string[] {
  const guidance: string[] = [];
  
  // Add level-specific guidance
  if (integrationLevel in integrationLevels) {
    guidance.push(...integrationLevels[integrationLevel as keyof typeof integrationLevels].recommendations);
  }
  
  // Add category-specific guidance for areas needing attention
  Object.entries(categoryScores).forEach(([category, score]) => {
    if (score < 3.0) {
      switch (category) {
        case "Self-Awareness":
          guidance.push("Begin a daily mindfulness or meditation practice to increase self-awareness");
          break;
        case "Communication Skills":
          guidance.push("Practice active listening and expressing emotions clearly");
          break;
        case "Shadow Integration":
          guidance.push("Explore shadow work through journaling or working with a therapist");
          break;
        case "Trauma Integration":
          guidance.push("Consider trauma-informed therapy to heal past wounds");
          break;
        case "Anger Integration":
          guidance.push("Learn healthy anger expression and explore what your anger is protecting");
          break;
      }
    }
  });

  return guidance;
}

export function getIntegrationGuideProgress(currentIndex: number): number {
  return ((currentIndex + 1) / 20) * 100;
}

export function canIntegrationGuideProceed(answers: IntegrationGuideAnswer[], currentIndex: number): boolean {
  return answers.some(answer => answer.questionIndex === currentIndex);
}

export function shareIntegrationGuideResult(level: string): void {
  const levelInfo = Object.entries(integrationLevels).find(([key]) => key === level);
  const levelName = levelInfo ? levelInfo[1].name : "Integration Journey";
  const text = `I just completed the Personal Integration Guide and discovered I'm in the ${levelName}! Personal integration is the path to wholeness and authentic living.`;
  const url = window.location.origin;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Personal Integration Result',
      text: text,
      url: url
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(text + ' ' + url).then(() => {
      alert('Result copied to clipboard!');
    }).catch(() => {
      alert('Share: ' + text + ' ' + url);
    });
  }
}
import { intelligenceMapQuestions, intelligenceTypes } from "@/data/intelligence-map-questions";

export interface IntelligenceMapAnswer {
  questionIndex: number;
  optionIndex: number;
  intelligence: string;
  value: number;
}

export interface IntelligenceMapState {
  currentQuestionIndex: number;
  answers: IntelligenceMapAnswer[];
  isComplete: boolean;
}

export interface IntelligenceMapResult {
  dominantIntelligence: string;
  intelligenceScores: Record<string, number>;
  strengths: string[];
  applications: string[];
  developmentAreas: string[];
  careerSuggestions: string[];
}

export function calculateIntelligenceMapResult(answers: IntelligenceMapAnswer[]): IntelligenceMapResult {
  const intelligenceScores: Record<string, number> = {};
  
  // Calculate scores for each intelligence type
  answers.forEach(answer => {
    if (!intelligenceScores[answer.intelligence]) {
      intelligenceScores[answer.intelligence] = 0;
    }
    intelligenceScores[answer.intelligence] += answer.value;
  });

  // Find dominant intelligence
  const dominantIntelligence = Object.keys(intelligenceScores).reduce((a, b) => 
    intelligenceScores[a] > intelligenceScores[b] ? a : b
  );

  const dominantType = intelligenceTypes[dominantIntelligence as keyof typeof intelligenceTypes];

  return {
    dominantIntelligence,
    intelligenceScores,
    strengths: dominantType.strengths,
    applications: dominantType.traits,
    developmentAreas: generateDevelopmentAreas(intelligenceScores, dominantIntelligence),
    careerSuggestions: dominantType.careers
  };
}

function generateDevelopmentAreas(scores: Record<string, number>, dominant: string): string[] {
  const allTypes = Object.keys(intelligenceTypes);
  const weakerAreas = allTypes
    .filter(type => type !== dominant && scores[type] < scores[dominant] * 0.7)
    .map(type => intelligenceTypes[type as keyof typeof intelligenceTypes].name);
  
  return weakerAreas.slice(0, 2); // Return top 2 development areas
}

export function getIntelligenceMapProgress(currentIndex: number): number {
  return Math.round((currentIndex / intelligenceMapQuestions.length) * 100);
}

export function canIntelligenceMapProceed(answers: IntelligenceMapAnswer[], currentIndex: number): boolean {
  return answers.length > currentIndex;
}

export function shareIntelligenceMapResult(intelligence: string): void {
  const text = `I've discovered my dominant intelligence type: ${intelligence}! 🧠✨`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Intelligence Map Result',
      text: text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(`${text} ${window.location.href}`);
  }
}
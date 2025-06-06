import { identityCompassQuestions, identityTypes } from "@/data/identity-compass-questions";

export interface IdentityCompassAnswer {
  questionIndex: number;
  optionIndex: number;
  identity: string;
  value: number;
}

export interface IdentityCompassState {
  currentQuestionIndex: number;
  answers: IdentityCompassAnswer[];
  isComplete: boolean;
}

export interface IdentityCompassResult {
  dominantIdentity: string;
  identityScores: Record<string, number>;
  traits: string[];
  strengths: string[];
  shadowAspects: string[];
  growthPath: string;
}

export function calculateIdentityCompassResult(answers: IdentityCompassAnswer[]): IdentityCompassResult {
  const identityScores: Record<string, number> = {};
  
  // Calculate scores for each identity type
  answers.forEach(answer => {
    if (!identityScores[answer.identity]) {
      identityScores[answer.identity] = 0;
    }
    identityScores[answer.identity] += answer.value;
  });

  // Find dominant identity
  const dominantIdentity = Object.keys(identityScores).reduce((a, b) => 
    identityScores[a] > identityScores[b] ? a : b
  );

  const dominantType = identityTypes[dominantIdentity as keyof typeof identityTypes];

  return {
    dominantIdentity,
    identityScores,
    traits: dominantType.traits,
    strengths: dominantType.strengths,
    shadowAspects: dominantType.shadowAspects,
    growthPath: dominantType.growthPath
  };
}

export function getIdentityCompassProgress(currentIndex: number): number {
  return Math.round((currentIndex / identityCompassQuestions.length) * 100);
}

export function canIdentityCompassProceed(answers: IdentityCompassAnswer[], currentIndex: number): boolean {
  return answers.length > currentIndex;
}

export function shareIdentityCompassResult(identity: string): void {
  const text = `I've discovered my core identity: ${identity}! Understanding who I am at my core. 🎯`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Identity Compass Result',
      text: text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(`${text} ${window.location.href}`);
  }
}
import { innerDriverQuestions, driverTypes } from "@/data/inner-driver-questions";

export interface InnerDriverAnswer {
  questionIndex: number;
  optionIndex: number;
  driver: string;
  value: number;
}

export interface InnerDriverState {
  currentQuestionIndex: number;
  answers: InnerDriverAnswer[];
  isComplete: boolean;
}

export interface InnerDriverResult {
  dominantDriver: string;
  driverScores: Record<string, number>;
  traits: string[];
  strengths: string[];
  challenges: string[];
  growthPath: string;
}

export function calculateInnerDriverResult(answers: InnerDriverAnswer[]): InnerDriverResult {
  const driverScores: Record<string, number> = {};
  
  // Calculate scores for each driver type
  answers.forEach(answer => {
    if (!driverScores[answer.driver]) {
      driverScores[answer.driver] = 0;
    }
    driverScores[answer.driver] += answer.value;
  });

  // Find dominant driver
  const dominantDriver = Object.keys(driverScores).reduce((a, b) => 
    driverScores[a] > driverScores[b] ? a : b
  );

  const dominantType = driverTypes[dominantDriver as keyof typeof driverTypes];

  return {
    dominantDriver,
    driverScores,
    traits: dominantType.traits,
    strengths: dominantType.strengths,
    challenges: dominantType.challenges,
    growthPath: dominantType.growthPath
  };
}

export function getInnerDriverProgress(currentIndex: number): number {
  return Math.round((currentIndex / innerDriverQuestions.length) * 100);
}

export function canInnerDriverProceed(answers: InnerDriverAnswer[], currentIndex: number): boolean {
  return answers.length > currentIndex;
}

export function shareInnerDriverResult(driver: string): void {
  const text = `I've discovered what drives me: ${driver}! Understanding my core motivations. 🚀`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Inner Driver Result',
      text: text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(`${text} ${window.location.href}`);
  }
}
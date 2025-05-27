import { questions } from "@/data/questions";

export interface TestAnswer {
  questionIndex: number;
  optionIndex: number;
  archetype: string;
}

export interface TestState {
  currentQuestionIndex: number;
  answers: TestAnswer[];
  isComplete: boolean;
}

export function calculateDominantArchetype(answers: TestAnswer[]): string {
  const archetypeCounts: Record<string, number> = {};
  
  answers.forEach(answer => {
    archetypeCounts[answer.archetype] = (archetypeCounts[answer.archetype] || 0) + 1;
  });

  return Object.keys(archetypeCounts).reduce((a, b) => 
    archetypeCounts[a] > archetypeCounts[b] ? a : b
  );
}

export function getProgress(currentIndex: number): number {
  return ((currentIndex + 1) / questions.length) * 100;
}

export function canProceed(answers: TestAnswer[], currentIndex: number): boolean {
  return answers.some(answer => answer.questionIndex === currentIndex);
}

export function shareResult(archetypeName: string): void {
  const text = `I just discovered my Shadow Archetype: ${archetypeName}! Uncover yours at Shadow Test.`;
  const url = window.location.origin;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Shadow Archetype',
      text: text,
      url: url
    }).catch(console.error);
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard.writeText(text + ' ' + url).then(() => {
      // Could show a toast notification here
      alert('Result copied to clipboard!');
    }).catch(() => {
      // Fallback if clipboard API is not available
      alert('Share: ' + text + ' ' + url);
    });
  }
}

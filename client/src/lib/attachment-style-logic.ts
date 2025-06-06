import { attachmentStyleQuestions, attachmentStyles } from "@/data/attachment-style-questions";

export interface AttachmentStyleAnswer {
  questionIndex: number;
  optionIndex: number;
  style: string;
  value: number;
}

export interface AttachmentStyleState {
  currentQuestionIndex: number;
  answers: AttachmentStyleAnswer[];
  isComplete: boolean;
}

export interface AttachmentStyleResult {
  dominantStyle: string;
  styleScores: Record<string, number>;
  traits: string[];
  strengths: string[];
  growthAreas: string[];
  tips: string[];
}

export function calculateAttachmentStyleResult(answers: AttachmentStyleAnswer[]): AttachmentStyleResult {
  const styleScores: Record<string, number> = {};
  
  // Calculate scores for each style
  answers.forEach(answer => {
    if (!styleScores[answer.style]) {
      styleScores[answer.style] = 0;
    }
    styleScores[answer.style] += answer.value;
  });

  // Find dominant style
  const dominantStyle = Object.keys(styleScores).reduce((a, b) => 
    styleScores[a] > styleScores[b] ? a : b
  );

  const dominantStyleInfo = attachmentStyles[dominantStyle as keyof typeof attachmentStyles];

  return {
    dominantStyle,
    styleScores,
    traits: dominantStyleInfo.traits,
    strengths: dominantStyleInfo.strengths,
    growthAreas: dominantStyleInfo.growthAreas,
    tips: dominantStyleInfo.tips
  };
}

export function getAttachmentStyleProgress(currentIndex: number): number {
  return Math.round((currentIndex / attachmentStyleQuestions.length) * 100);
}

export function canAttachmentStyleProceed(answers: AttachmentStyleAnswer[], currentIndex: number): boolean {
  return answers.length > currentIndex;
}

export function shareAttachmentStyleResult(style: string): void {
  const text = `I've discovered my attachment style: ${style}! Understanding how I connect with others. 💝`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Attachment Style Result',
      text: text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(`${text} ${window.location.href}`);
  }
}
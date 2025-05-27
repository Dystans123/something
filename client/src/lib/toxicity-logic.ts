import { toxicityQuestions } from "@/data/toxicity-questions";

export interface ToxicityAnswer {
  questionIndex: number;
  optionIndex: number;
  value: number;
}

export interface ToxicityState {
  currentQuestionIndex: number;
  answers: ToxicityAnswer[];
  isComplete: boolean;
}

export interface ToxicityResult {
  zone: "green" | "yellow" | "red";
  score: number;
  maxScore: number;
  percentage: number;
}

export function calculateToxicityResult(answers: ToxicityAnswer[]): ToxicityResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
  const maxScore = answers.length * 5; // Maximum possible score
  const percentage = (totalScore / maxScore) * 100;
  
  let zone: "green" | "yellow" | "red";
  
  if (percentage <= 40) {
    zone = "green"; // Healthy Relationship
  } else if (percentage <= 70) {
    zone = "yellow"; // Unstable Relationship
  } else {
    zone = "red"; // Toxic Relationship
  }
  
  return {
    zone,
    score: totalScore,
    maxScore,
    percentage
  };
}

export function getToxicityProgress(currentIndex: number): number {
  return ((currentIndex + 1) / toxicityQuestions.length) * 100;
}

export function canToxicityProceed(answers: ToxicityAnswer[], currentIndex: number): boolean {
  return answers.some(answer => answer.questionIndex === currentIndex);
}

export function shareToxicityResult(zone: string): void {
  const zoneEmoji = zone === "green" ? "🟢" : zone === "yellow" ? "🟡" : "🔴";
  const text = `I just took the Toxicity Compass test and got ${zoneEmoji} ${zone.toUpperCase()} Zone! Discover your relationship health at Toxicity Compass.`;
  const url = window.location.origin;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Toxicity Compass Result',
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
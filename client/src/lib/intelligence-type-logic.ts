import { intelligenceTypeQuestions, intelligenceTypes } from "@/data/intelligence-type-questions";

export interface IntelligenceTypeAnswer {
  questionIndex: number;
  optionIndex: number;
  intelligence: string;
  value: number;
}

export interface IntelligenceTypeState {
  currentQuestionIndex: number;
  answers: IntelligenceTypeAnswer[];
  isComplete: boolean;
}

export interface IntelligenceTypeResult {
  dominantIntelligence: string;
  intelligenceScores: Record<string, number>;
  strengths: string[];
  weakAreas: string[];
  careerSuggestions: string[];
  developmentTips: string[];
  superpower: string;
  detailedAnalysis: string;
}

export function calculateIntelligenceTypeResult(answers: IntelligenceTypeAnswer[]): IntelligenceTypeResult {
  // Calculate raw scores for each intelligence type
  const intelligenceScores: Record<string, number> = {};
  
  // Initialize scores
  Object.keys(intelligenceTypes).forEach(intelligence => {
    intelligenceScores[intelligence] = 0;
  });

  // Sum up scores for each intelligence type
  answers.forEach(answer => {
    if (intelligenceScores[answer.intelligence] !== undefined) {
      intelligenceScores[answer.intelligence] += answer.value;
    }
  });

  // Find max possible score and actual max score for normalization
  const maxPossibleScore = answers.length * 5; // Maximum if all answers were 5
  const actualMaxScore = Math.max(...Object.values(intelligenceScores));
  
  // Normalize scores to 1-5 scale with proper distribution
  Object.keys(intelligenceScores).forEach(intelligence => {
    // Convert to percentage of max score, then scale to 1-5
    const percentage = intelligenceScores[intelligence] / actualMaxScore;
    intelligenceScores[intelligence] = Math.max(1, Math.min(5, 1 + (percentage * 4)));
  });

  // Find dominant intelligence
  const dominantIntelligence = Object.entries(intelligenceScores)
    .sort(([,a], [,b]) => b - a)[0][0];

  const dominantInfo = intelligenceTypes[dominantIntelligence as keyof typeof intelligenceTypes];

  // Identify strengths (top 3 intelligences)
  const sortedIntelligences = Object.entries(intelligenceScores)
    .sort(([,a], [,b]) => b - a);

  const strengths = sortedIntelligences
    .slice(0, 3)
    .map(([intelligence]) => intelligenceTypes[intelligence as keyof typeof intelligenceTypes].name);

  // Identify weak areas (bottom 2 intelligences with scores below 3)
  const weakAreas = sortedIntelligences
    .filter(([, score]) => score < 3)
    .slice(-2)
    .map(([intelligence]) => intelligenceTypes[intelligence as keyof typeof intelligenceTypes].name);

  // Generate detailed analysis
  const detailedAnalysis = generateDetailedAnalysis(dominantIntelligence, intelligenceScores, sortedIntelligences);

  return {
    dominantIntelligence,
    intelligenceScores,
    strengths,
    weakAreas,
    careerSuggestions: dominantInfo.careers,
    developmentTips: dominantInfo.development,
    superpower: dominantInfo.superpower,
    detailedAnalysis
  };
}

function generateDetailedAnalysis(
  dominantIntelligence: string, 
  scores: Record<string, number>,
  sortedIntelligences: [string, number][]
): string {
  const dominantInfo = intelligenceTypes[dominantIntelligence as keyof typeof intelligenceTypes];
  const topThree = sortedIntelligences.slice(0, 3);
  
  let analysis = `Your dominant intelligence is ${dominantInfo.name}, which means ${dominantInfo.description.toLowerCase()}\n\n`;
  
  analysis += `**Your Intelligence Profile:**\n`;
  topThree.forEach(([intelligence, score], index) => {
    const info = intelligenceTypes[intelligence as keyof typeof intelligenceTypes];
    const strength = index === 0 ? "Primary" : index === 1 ? "Secondary" : "Tertiary";
    analysis += `${strength}: ${info.name} (Score: ${score.toFixed(1)}/5.0)\n`;
  });
  
  analysis += `\n**What This Means for You:**\n`;
  analysis += `Your ${dominantInfo.name} gives you a unique perspective on the world. `;
  
  if (dominantIntelligence === 'linguistic') {
    analysis += `You process information through language and have a natural gift for communication. Your mind works like a library, organizing thoughts into words and stories that others can understand and be moved by.`;
  } else if (dominantIntelligence === 'logical-mathematical') {
    analysis += `You see patterns and relationships that others miss, approaching problems with systematic logic. Your mind works like a sophisticated computer, breaking down complex issues into manageable, solvable components.`;
  } else if (dominantIntelligence === 'spatial') {
    analysis += `You think in images and have an intuitive understanding of how things fit together in space. Your mind works like an advanced 3D modeling system, able to visualize and manipulate complex spatial relationships.`;
  } else if (dominantIntelligence === 'musical') {
    analysis += `You understand the emotional language of sound and rhythm. Your mind works like a sophisticated audio processor, detecting nuances in tone, tempo, and harmony that create deep emotional resonance.`;
  } else if (dominantIntelligence === 'bodily-kinesthetic') {
    analysis += `You learn through movement and have exceptional body awareness. Your mind works through your muscles and nervous system, understanding the world through physical experience and expression.`;
  } else if (dominantIntelligence === 'interpersonal') {
    analysis += `You have an intuitive understanding of human nature and social dynamics. Your mind works like an emotional radar, picking up on subtle cues and understanding what motivates and moves people.`;
  } else if (dominantIntelligence === 'intrapersonal') {
    analysis += `You have deep self-awareness and understand your inner psychological landscape. Your mind works like an internal guidance system, helping you navigate life with authenticity and purpose.`;
  } else if (dominantIntelligence === 'naturalistic') {
    analysis += `You understand the patterns and rhythms of the natural world. Your mind works like an ecological sensor, recognizing the interconnected systems that sustain all life.`;
  }
  
  analysis += `\n\n**Your Cognitive Superpowers:**\n`;
  analysis += `• ${dominantInfo.superpower}\n`;
  
  // Add insights about secondary intelligences
  if (topThree.length > 1) {
    const secondaryInfo = intelligenceTypes[topThree[1][0] as keyof typeof intelligenceTypes];
    analysis += `• Your secondary ${secondaryInfo.name} enhances your primary abilities, giving you a broader range of problem-solving tools.\n`;
  }
  
  if (topThree.length > 2) {
    const tertiaryInfo = intelligenceTypes[topThree[2][0] as keyof typeof intelligenceTypes];
    analysis += `• Your tertiary ${tertiaryInfo.name} provides additional depth and versatility to your cognitive toolkit.\n`;
  }
  
  return analysis;
}

export function getIntelligenceTypeProgress(currentIndex: number): number {
  return Math.round((currentIndex / intelligenceTypeQuestions.length) * 100);
}

export function canIntelligenceTypeProceed(answers: IntelligenceTypeAnswer[], currentIndex: number): boolean {
  return answers.length > currentIndex;
}

export function shareIntelligenceTypeResult(intelligence: string): void {
  const intelligenceInfo = intelligenceTypes[intelligence as keyof typeof intelligenceTypes];
  const text = `I just discovered my dominant intelligence type: ${intelligenceInfo.name}! ${intelligenceInfo.description}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Intelligence Type Result',
      text: text,
      url: window.location.href
    });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
}
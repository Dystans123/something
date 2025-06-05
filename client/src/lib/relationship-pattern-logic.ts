import { relationshipPatternQuestions, relationshipPatterns } from "@/data/relationship-pattern-questions";

export interface RelationshipPatternAnswer {
  questionIndex: number;
  optionIndex: number;
  pattern: string;
  value: number;
}

export interface RelationshipPatternState {
  currentQuestionIndex: number;
  answers: RelationshipPatternAnswer[];
  isComplete: boolean;
}

export interface RelationshipPatternResult {
  dominantPattern: string;
  patternScores: Record<string, number>;
  insights: string[];
  recommendations: string[];
}

export function calculateRelationshipPatternResult(answers: RelationshipPatternAnswer[]): RelationshipPatternResult {
  const patternScores: Record<string, number> = {};
  
  // Calculate scores for each pattern
  answers.forEach(answer => {
    if (!patternScores[answer.pattern]) {
      patternScores[answer.pattern] = 0;
    }
    patternScores[answer.pattern] += answer.value;
  });

  // Find dominant pattern
  const dominantPattern = Object.keys(patternScores).reduce((a, b) => 
    patternScores[a] > patternScores[b] ? a : b
  );

  // Generate insights based on pattern scores
  const insights = generateInsights(patternScores, dominantPattern);
  const recommendations = generateRecommendations(dominantPattern, patternScores);

  return {
    dominantPattern,
    patternScores,
    insights,
    recommendations
  };
}

function generateInsights(patternScores: Record<string, number>, dominantPattern: string): string[] {
  const insights: string[] = [];
  
  // Add insight about dominant pattern
  if (dominantPattern in relationshipPatterns) {
    const dominantPatternInfo = relationshipPatterns[dominantPattern as keyof typeof relationshipPatterns];
    insights.push(`Your primary relationship pattern is ${dominantPatternInfo.name}.`);
    insights.push(dominantPatternInfo.description);
  }

  // Add insights about secondary patterns
  const sortedPatterns = Object.entries(patternScores)
    .sort(([,a], [,b]) => b - a)
    .slice(1, 3);

  sortedPatterns.forEach(([pattern, score]) => {
    if (score > 15 && pattern in relationshipPatterns) {
      const patternInfo = relationshipPatterns[pattern as keyof typeof relationshipPatterns];
      insights.push(`You also show tendencies toward ${patternInfo.name}.`);
    }
  });

  return insights;
}

function generateRecommendations(dominantPattern: string, patternScores: Record<string, number>): string[] {
  const recommendations: string[] = [];

  switch (dominantPattern) {
    case "anxious-attachment":
      recommendations.push("Practice self-soothing techniques when feeling anxious about relationships");
      recommendations.push("Work on building secure relationships through clear communication");
      recommendations.push("Consider therapy to explore attachment wounds from childhood");
      break;
    case "avoidant-attachment":
      recommendations.push("Practice gradual emotional vulnerability with trusted people");
      recommendations.push("Notice when you withdraw and gently challenge yourself to stay present");
      recommendations.push("Explore what emotional intimacy means to you in a safe way");
      break;
    case "people-pleasing":
      recommendations.push("Practice saying 'no' in low-stakes situations to build confidence");
      recommendations.push("Identify your own needs and preferences separate from others'");
      recommendations.push("Work on self-worth that isn't dependent on others' approval");
      break;
    case "codependent-attraction":
      recommendations.push("Focus on your own healing and personal development");
      recommendations.push("Learn to distinguish between helping and enabling");
      recommendations.push("Practice maintaining your identity within relationships");
      break;
    case "boundary-violation":
      recommendations.push("Learn about healthy boundaries and practice respecting them");
      recommendations.push("Work on tolerating disappointment when others set limits");
      recommendations.push("Explore what drives the need to push past boundaries");
      break;
    default:
      recommendations.push("Continue developing self-awareness in your relationships");
      recommendations.push("Practice clear, honest communication with important people");
      recommendations.push("Consider working with a relationship coach or therapist");
  }

  return recommendations;
}

export function getRelationshipPatternProgress(currentIndex: number): number {
  return ((currentIndex + 1) / relationshipPatternQuestions.length) * 100;
}

export function canRelationshipPatternProceed(answers: RelationshipPatternAnswer[], currentIndex: number): boolean {
  return answers.some(answer => answer.questionIndex === currentIndex);
}

export function shareRelationshipPatternResult(pattern: string): void {
  const patternInfo = Object.entries(relationshipPatterns).find(([key]) => key === pattern);
  const patternName = patternInfo ? patternInfo[1].name : "Unknown Pattern";
  const text = `I just discovered my relationship pattern: ${patternName}! Understanding your relationship patterns can transform how you connect with others.`;
  const url = window.location.origin;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Relationship Pattern Result',
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
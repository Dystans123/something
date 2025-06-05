import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, RefreshCw, ArrowLeft, Users, Heart, Target } from "lucide-react";
import { relationshipPatterns } from "@/data/relationship-pattern-questions";
import { shareRelationshipPatternResult } from "@/lib/relationship-pattern-logic";

export default function RelationshipPatternResults() {
  const [, setLocation] = useLocation();
  const [pattern, setPattern] = useState<string>("secure-attachment");
  const [patternScores, setPatternScores] = useState<Record<string, number>>({});
  const [insights, setInsights] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const patternParam = urlParams.get('pattern');
    const scoresParam = urlParams.get('scores');
    const insightsParam = urlParams.get('insights');
    const recommendationsParam = urlParams.get('recommendations');
    
    if (patternParam) setPattern(patternParam);
    if (scoresParam) {
      try {
        setPatternScores(JSON.parse(scoresParam));
      } catch (e) {
        console.error('Error parsing scores:', e);
      }
    }
    if (insightsParam) {
      try {
        setInsights(JSON.parse(insightsParam));
      } catch (e) {
        console.error('Error parsing insights:', e);
      }
    }
    if (recommendationsParam) {
      try {
        setRecommendations(JSON.parse(recommendationsParam));
      } catch (e) {
        console.error('Error parsing recommendations:', e);
      }
    }

    // Automatically save results when component loads
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.relationshipPatterns = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'relationship-patterns');
    const newResult = {
      testId: 'relationship-patterns',
      result: { 
        dominantPattern: patternParam || pattern,
        patternScores: scoresParam ? JSON.parse(scoresParam) : patternScores,
        insights: insightsParam ? JSON.parse(insightsParam) : insights,
        recommendations: recommendationsParam ? JSON.parse(recommendationsParam) : recommendations
      },
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
  }, [pattern, patternScores, insights, recommendations]);

  const patternInfo = Object.entries(relationshipPatterns).find(([key]) => key === pattern);
  const patternData = patternInfo ? patternInfo[1] : relationshipPatterns["secure-attachment"];

  const handleShare = () => {
    shareRelationshipPatternResult(pattern);
  };

  const retakeTest = () => {
    setLocation("/relationship-patterns");
  };

  const continueJourney = () => {
    // Mark relationship patterns as completed and redirect to journey
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.relationshipPatterns = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Store result for comprehensive summary
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'relationship-patterns');
    const newResult = {
      testId: 'relationship-patterns',
      result: { pattern, patternScores, insights, recommendations },
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
    
    setLocation("/journey");
  };

  const backToJourney = () => {
    setLocation("/journey");
  };

  const getPatternColor = (patternKey: string) => {
    switch (patternKey) {
      case "secure-attachment": return "from-green-500 to-emerald-600";
      case "anxious-attachment": return "from-yellow-500 to-orange-600";
      case "avoidant-attachment": return "from-blue-500 to-indigo-600";
      case "people-pleasing": return "from-purple-500 to-pink-600";
      case "codependent-attraction": return "from-red-500 to-rose-600";
      case "boundary-violation": return "from-orange-500 to-red-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getPatternAnalysis = (patternKey: string): string => {
    const analyses: Record<string, string> = {
      "secure-attachment": "Your secure attachment style reflects a healthy foundation of emotional regulation and interpersonal trust. This pattern typically develops from consistent, responsive caregiving in early childhood, creating an internal working model that views relationships as safe and reliable. You demonstrate the capacity for emotional intimacy while maintaining personal autonomy, a balance that serves as the cornerstone of mature relationships.",
      "anxious-attachment": "Your anxious attachment pattern reveals a deep yearning for connection paired with fears of abandonment. This style often originates from inconsistent caregiving experiences, creating an internal hypervigilance system that constantly monitors relationship threats. While this sensitivity can lead to emotional intensity, it also indicates your profound capacity for love and connection when channeled constructively.",
      "avoidant-attachment": "Your avoidant attachment style represents a protective mechanism developed to maintain emotional safety through self-reliance. This pattern typically emerges from experiences where emotional expression was discouraged or unmet, leading to a sophisticated system of emotional regulation through distance. Your independence is both a strength and a potential barrier to deeper intimacy.",
      "people-pleasing": "Your people-pleasing pattern reflects a learned strategy for maintaining relationships through accommodation and self-sacrifice. This behavior often develops as a response to conditional love or criticism, creating a deep-seated belief that your worth depends on others' approval. While this demonstrates your empathetic nature, it can lead to emotional exhaustion and resentment over time.",
      "codependent-attraction": "Your codependent attraction pattern indicates a tendency to seek relationships where caretaking becomes central to your identity. This often stems from early experiences where you learned to derive self-worth through being needed by others. While this shows your nurturing capacity, it can create imbalanced dynamics that prevent authentic intimacy and personal growth.",
      "boundary-violation": "Your boundary pattern suggests challenges in recognizing and maintaining healthy interpersonal limits. This often develops in environments where boundaries were consistently crossed or unclear, leading to confusion about appropriate relationship dynamics. Understanding and establishing boundaries is crucial for developing healthy, respectful relationships."
    };
    return analyses[patternKey] || "Your relationship pattern reflects unique qualities that deserve exploration and understanding.";
  };

  const getEmotionalDynamics = (patternKey: string): string => {
    const dynamics: Record<string, string> = {
      "secure-attachment": "You experience emotions as valuable information rather than overwhelming forces. Your emotional regulation skills allow you to feel deeply while maintaining perspective, creating space for both vulnerability and strength in relationships. You tend to communicate feelings clearly and expect the same from partners, fostering emotional intimacy built on mutual understanding.",
      "anxious-attachment": "Your emotional world is rich and intense, with feelings often experienced at heightened levels. You may find yourself on an emotional rollercoaster, swinging between euphoria when connection feels secure and despair when it feels threatened. This emotional intensity, while challenging, also indicates your profound capacity for passion and deep connection.",
      "avoidant-attachment": "You tend to experience emotions more internally, often feeling safer processing feelings alone before sharing them. While others might perceive you as emotionally distant, you likely have a rich inner emotional life that you protect carefully. You may struggle with emotional expression but possess deep feelings that you prefer to communicate through actions rather than words.",
      "people-pleasing": "Your emotions are often filtered through concern for others' reactions, leading to suppression of authentic feelings in favor of maintaining harmony. You may experience guilt when prioritizing your needs and anxiety when others seem displeased. Learning to honor your emotional truth while maintaining compassion for others is key to your growth.",
      "codependent-attraction": "Your emotional well-being becomes intertwined with your partner's state, creating a merging that can feel both comforting and overwhelming. You may experience their emotions as your own and feel responsible for their happiness. Developing emotional boundaries while maintaining empathy is crucial for your psychological health.",
      "boundary-violation": "You may experience confusion about which emotions belong to you versus others, leading to emotional overwhelm or numbness. Your empathetic nature might cause you to absorb others' feelings without realizing it, creating internal chaos. Learning to distinguish between your emotions and others' is essential for emotional clarity."
    };
    return dynamics[patternKey] || "Your emotional dynamics are complex and deserve compassionate exploration.";
  };

  const getBehavioralPatterns = (patternKey: string): string => {
    const behaviors: Record<string, string> = {
      "secure-attachment": "Your behaviors in relationships tend to be consistent and authentic, reflecting your inner emotional state. You're likely to communicate directly, set healthy boundaries, and respond rather than react during conflicts. You can be alone without feeling lonely and together without losing yourself, demonstrating the flexibility that healthy relationships require.",
      "anxious-attachment": "You may engage in protest behaviors when feeling disconnected - calling frequently, seeking reassurance, or becoming emotionally reactive. These behaviors, while sometimes appearing 'needy,' are actually adaptive strategies your nervous system uses to maintain connection. Understanding these patterns can help you communicate your needs more effectively.",
      "avoidant-attachment": "Your behaviors tend toward self-protection through emotional and sometimes physical distance. You might minimize the importance of relationships, avoid difficult conversations, or shut down during emotional intensity. These strategies served you well in the past but may now limit your capacity for deeper intimacy.",
      "people-pleasing": "You likely engage in accommodating behaviors - saying yes when you mean no, anticipating others' needs before your own, and minimizing your preferences to avoid conflict. You may also overfunction in relationships, taking on more than your share of emotional labor. These behaviors stem from genuine care but can lead to resentment and burnout.",
      "codependent-attraction": "Your behaviors often revolve around caretaking and enabling, sometimes at the expense of your own well-being. You might find yourself making excuses for partners, managing their responsibilities, or feeling guilty when focusing on yourself. These patterns reflect your generous heart but can prevent others from growing and taking responsibility.",
      "boundary-violation": "You may struggle with saying no, recognizing when someone is overstepping, or knowing when you're doing the same to others. Your behaviors might swing between being overly accommodating and then suddenly withdrawing when you feel overwhelmed. Learning to recognize and communicate boundaries is essential for healthy relationships."
    };
    return behaviors[patternKey] || "Your behavioral patterns reflect learned strategies that once served you but may need updating.";
  };

  const getRelationshipImpact = (patternKey: string): string => {
    const impacts: Record<string, string> = {
      "secure-attachment": "Your relationships tend to be stable, satisfying, and growth-oriented. Partners likely feel safe to be authentic around you, and conflicts become opportunities for deeper understanding rather than threats to the relationship. You model healthy interdependence, showing others how to love without losing oneself.",
      "anxious-attachment": "Your relationships may experience intensity and volatility, with periods of deep connection alternating with anxiety-driven conflicts. Partners might feel both cherished and overwhelmed by your emotional needs. When you learn to self-soothe and communicate your attachment needs clearly, your relationships can become deeply fulfilling and secure.",
      "avoidant-attachment": "Your relationships may lack emotional depth or struggle with intimacy issues, as partners might feel shut out or unimportant. However, you offer stability, reliability, and respect for independence. As you learn to share your inner world more openly, your relationships can develop the emotional richness you may secretly crave.",
      "people-pleasing": "Your relationships may become unbalanced, with you giving more than you receive. Partners might become comfortable with this dynamic, potentially taking your generosity for granted. When you begin honoring your own needs alongside others', your relationships can become more mutual and satisfying.",
      "codependent-attraction": "Your relationships may become enmeshed and unhealthy, with unclear boundaries and roles. While your caring nature is beautiful, it can prevent both you and your partner from developing individual strength and resilience. Learning to love without rescuing can transform your relationships into truly supportive partnerships.",
      "boundary-violation": "Your relationships may feel chaotic or unstable, with frequent misunderstandings about expectations and limits. Both you and your partners might feel confused about roles and responsibilities. As you develop boundary awareness, your relationships can become clearer, more respectful, and ultimately more intimate."
    };
    return impacts[patternKey] || "Your relationship impact is unique and can be transformed through awareness and intentional growth.";
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--dark-gray))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your Relationship Pattern
            </motion.h1>
            
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Pattern Icon */}
              <motion.div 
                className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${getPatternColor(pattern)} rounded-full flex items-center justify-center animate-glow`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              >
                <Users className="h-16 w-16 text-white" />
              </motion.div>

              {/* Pattern Name */}
              <motion.h2 
                className="font-serif text-2xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] text-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {patternData.name}
              </motion.h2>

              {/* Pattern Description */}
              <motion.p 
                className="text-lg text-[hsl(var(--metallic-silver))] text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {patternData.description}
              </motion.p>

              {/* Pattern Characteristics */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 text-center">
                  Key Characteristics
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {patternData.characteristics.map((characteristic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                      <Heart className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                      <span className="text-[hsl(var(--metallic-silver))]">{characteristic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Result
                </Button>
                
                <Button
                  onClick={retakeTest}
                  variant="outline"
                  className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake Test
                </Button>
                
                <Button
                  onClick={continueJourney}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Continue Journey
                  <Target className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  onClick={() => setLocation('/journey')}
                  variant="outline"
                  className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Journey
                </Button>
              </motion.div>
            </motion.div>

            {/* Psychological Analysis Section */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                    <Target className="mr-2 h-4 w-4" />
                    Psychological Analysis
                  </Badge>
                  <div className="space-y-4">
                    <div className="p-4 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">Core Pattern Understanding</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed mb-3">
                        {getPatternAnalysis(pattern)}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">Emotional Dynamics</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        {getEmotionalDynamics(pattern)}
                      </p>
                    </div>

                    <div className="p-4 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">Behavioral Patterns</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        {getBehavioralPatterns(pattern)}
                      </p>
                    </div>

                    <div className="p-4 bg-[hsl(var(--deep-black)/0.5)] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">Relationship Impact</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        {getRelationshipImpact(pattern)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Personal Insights Section */}
            {insights.length > 0 && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                      <Users className="mr-2 h-4 w-4" />
                      Personal Insights
                    </Badge>
                    <div className="space-y-3">
                      {insights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-[hsl(var(--deep-black)/0.3)] rounded-lg">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Recommendations Section */}
            {recommendations.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                      <Heart className="mr-2 h-4 w-4" />
                      Growth Recommendations
                    </Badge>
                    <div className="space-y-3">
                      {recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-[hsl(var(--deep-black)/0.3)] rounded-lg">
                          <div className="w-2 h-2 bg-[hsl(var(--metallic-silver))] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[hsl(var(--metallic-silver))] leading-relaxed">{recommendation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
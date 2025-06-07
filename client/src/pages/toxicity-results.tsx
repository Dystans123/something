import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share, RotateCcw, Home, Brain, Shield, AlertTriangle, TrendingUp, Heart, ArrowRight, RefreshCw } from "lucide-react";
import { shareToxicityResult } from "@/lib/toxicity-logic";

interface ZoneInfo {
  name: string;
  emoji: string;
  color: string;
  description: string;
  recommendations: string[];
}

const zoneInfo: Record<string, ZoneInfo> = {
  green: {
    name: "Green Zone - Healthy Relationship",
    emoji: "🟢",
    color: "text-green-400",
    description: "Conflicts are handled with respect. Both partners feel safe, seen, and have personal space. Your relationship shows strong foundations of trust, communication, and mutual respect.",
    recommendations: [
      "Continue nurturing open communication",
      "Maintain healthy boundaries and independence",
      "Celebrate your strong relationship foundation",
      "Support each other's individual growth"
    ]
  },
  yellow: {
    name: "Yellow Zone - Unstable Relationship", 
    emoji: "🟡",
    color: "text-yellow-400",
    description: "Warning signs appear: imbalance, passive-aggression, control. Time to reflect on deeper patterns. Your relationship has some concerning dynamics that need attention.",
    recommendations: [
      "Have honest conversations about concerning patterns",
      "Consider couples counseling or therapy",
      "Work on establishing clearer boundaries",
      "Address communication issues before they escalate",
      "Focus on building trust and emotional safety"
    ]
  },
  red: {
    name: "Red Zone - Toxic Relationship",
    emoji: "🔴", 
    color: "text-red-400",
    description: "Your needs are ignored. There may be emotional manipulation, fear, control, or abuse. This relationship shows significant toxic patterns that are harmful to your wellbeing.",
    recommendations: [
      "Prioritize your safety and wellbeing",
      "Reach out to trusted friends, family, or professionals",
      "Consider speaking with a counselor who specializes in toxic relationships",
      "Know that you deserve respect and healthy love",
      "If you're in immediate danger, contact emergency services"
    ]
  }
};

export default function ToxicityResults() {
  const [, setLocation] = useLocation();
  const [zone, setZone] = useState<string>("green");
  const [score, setScore] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  // Get results from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const zoneParam = urlParams.get('zone');
    const scoreParam = urlParams.get('score');
    const percentageParam = urlParams.get('percentage');
    
    if (zoneParam) setZone(zoneParam);
    if (scoreParam) setScore(parseInt(scoreParam));
    if (percentageParam) setPercentage(parseFloat(percentageParam));
  }, []);

  const info = zoneInfo[zone];

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[hsl(var(--metallic-silver))] mb-4">No results found</p>
          <Button onClick={() => setLocation("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    shareToxicityResult(zone);
  };

  const retakeTest = () => {
    setLocation("/toxicity-compass");
  };

  const continueJourney = () => {
    // Mark toxicity compass as completed and redirect to journey
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.toxicityCompass = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Store result for comprehensive summary
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'toxicity-compass');
    const newResult = {
      testId: 'toxicity-compass',
      result: { zone, score, percentage },
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
    
    setLocation("/journey?type=relationship");
  };

  const backToJourney = () => {
    setLocation("/journey?type=relationship");
  };

  const getToxicityExplanation = (zone: string) => {
    const explanations = {
      green: "You demonstrate strong emotional resilience and healthy relationship patterns. Your boundaries are well-established, and you maintain psychological stability even in challenging situations.",
      yellow: "You show moderate resilience with some areas of vulnerability. While you generally maintain healthy relationships, certain situations or people may still impact your emotional wellbeing significantly.",
      red: "You may be experiencing significant impact from toxic relationship patterns. This suggests a need for immediate attention to boundary setting, self-care, and potentially professional support."
    };
    return explanations[zone as keyof typeof explanations] || explanations.red;
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--dark-gray))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your Toxicity Compass Result
            </motion.h1>
            
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Zone Icon */}
              <motion.div 
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] rounded-full flex items-center justify-center animate-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              >
                <div className="text-6xl">{info.emoji}</div>
              </motion.div>
              
              <motion.h2 
                className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${info.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {info.name}
              </motion.h2>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-[hsl(var(--metallic-silver))] mb-2">
                  {percentage}%
                </div>
                <div className="text-sm text-[hsl(var(--silver-glow))]">
                  Score: {score} / 200
                </div>
              </motion.div>
              
              <motion.p 
                className="text-lg text-[hsl(var(--silver-glow))] mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {info.description}
              </motion.p>
              
              <motion.div 
                className="text-left space-y-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-[hsl(var(--metallic-silver))] mb-4">
                  Recommendations:
                </h3>
                {info.recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-2 h-2 bg-[hsl(var(--metallic-silver))] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[hsl(var(--silver-glow))]">{rec}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              <Button
                onClick={continueJourney}
                size="lg"
                className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                Continue Journey
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <Share className="mr-2 h-4 w-4" />
                Share Result
              </Button>
              
              <Button
                variant="outline"
                onClick={retakeTest}
                className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Test
              </Button>
            </motion.div>

            {/* Detailed Psychological Analysis */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-amber-900/20 to-[hsl(var(--deep-black))] border-amber-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-amber-400 border-amber-400">
                    <Brain className="mr-2 h-4 w-4" />
                    Understanding Toxicity Impact
                  </Badge>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-2">Your Toxicity Zone: {zone.toUpperCase()}</h4>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        {getToxicityExplanation(zone)}
                      </p>
                    </div>
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-2">Psychological Resilience</h4>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Your resilience score of {percentage}% indicates how well you maintain emotional stability 
                        and psychological health when exposed to toxic relationship patterns and environmental stressors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recovery & Healing Strategies */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/20 to-[hsl(var(--deep-black))] border-emerald-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-emerald-400 border-emerald-400">
                    <Shield className="mr-2 h-4 w-4" />
                    Healing & Recovery Practices
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Emotional Detox</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Practice daily emotional release through journaling</li>
                        <li>• Set firm boundaries with toxic individuals</li>
                        <li>• Engage in regular physical exercise for stress relief</li>
                        <li>• Use breathing techniques for emotional regulation</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Relationship Boundaries</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Learn to say "no" without guilt or explanation</li>
                        <li>• Identify and exit toxic relationship patterns</li>
                        <li>• Practice assertive communication techniques</li>
                        <li>• Surround yourself with supportive people</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Mental Protection</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Develop a strong sense of self-worth</li>
                        <li>• Practice mindfulness to stay grounded</li>
                        <li>• Challenge negative self-talk patterns</li>
                        <li>• Create safe spaces for emotional processing</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-emerald-900/10 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-3">Energy Management</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Limit exposure to negative media and people</li>
                        <li>• Practice energy-protecting visualization</li>
                        <li>• Engage in activities that restore your spirit</li>
                        <li>• Maintain healthy sleep and nutrition habits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Warning Signs & Red Flags */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-[hsl(var(--deep-black))] border-red-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-red-400 border-red-400">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Toxicity Warning Signs
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-900/10 rounded-lg">
                      <h4 className="font-semibold text-red-300 mb-3">Relationship Red Flags</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Constant criticism and put-downs</li>
                        <li>• Manipulation and guilt-tripping</li>
                        <li>• Controlling behavior and isolation tactics</li>
                        <li>• Gaslighting and reality distortion</li>
                        <li>• Emotional or physical intimidation</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-900/10 rounded-lg">
                      <h4 className="font-semibold text-red-300 mb-3">Personal Impact Signs</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Chronic anxiety and stress symptoms</li>
                        <li>• Loss of self-confidence and identity</li>
                        <li>• Isolation from friends and family</li>
                        <li>• Physical symptoms without medical cause</li>
                        <li>• Difficulty making decisions independently</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recovery Timeline */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-[hsl(var(--deep-black))] border-purple-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    30-Day Recovery Plan
                  </Badge>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-purple-900/10 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-3">Week 1-2: Awareness</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Identify toxic patterns and triggers</li>
                        <li>• Start daily emotional check-ins</li>
                        <li>• Begin boundary-setting practice</li>
                        <li>• Document your experiences</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-900/10 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-3">Week 3-4: Action</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Implement protective strategies</li>
                        <li>• Practice assertive communication</li>
                        <li>• Seek support from trusted friends</li>
                        <li>• Develop self-care routines</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-900/10 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-3">Ongoing: Healing</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Continue therapy and support groups</li>
                        <li>• Build healthy relationship skills</li>
                        <li>• Maintain strong personal boundaries</li>
                        <li>• Practice ongoing self-compassion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Resources */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/20 to-[hsl(var(--deep-black))] border-cyan-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
                    <Heart className="mr-2 h-4 w-4" />
                    Support & Resources
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-3">Professional Help</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Trauma-informed therapy specialists</li>
                        <li>• Support groups for toxic relationship survivors</li>
                        <li>• Domestic violence hotlines and resources</li>
                        <li>• Mental health crisis intervention services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-3">Self-Help Resources</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• "Why Does He Do That?" by Lundy Bancroft</li>
                        <li>• "The Verbally Abusive Relationship" by Patricia Evans</li>
                        <li>• "Trauma and Recovery" by Judith Herman</li>
                        <li>• Online support communities and forums</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-cyan-900/10 rounded-lg">
                    <p className="text-[hsl(var(--metallic-silver))] text-sm text-center">
                      <strong className="text-cyan-300">Remember:</strong> Recovery is a journey, not a destination. 
                      Be patient with yourself and seek professional help when needed. You deserve healthy, respectful relationships.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons at Bottom */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
            >
              <Button
                onClick={continueJourney}
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white border-0"
              >
                Continue Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                onClick={retakeTest}
                className="border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--dark-gray))]"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retake Test
              </Button>
              
              <Button
                variant="outline"
                onClick={handleShare}
                className="border-[hsl(var(--border))] text-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--dark-gray))]"
              >
                <Share className="mr-2 h-4 w-4" />
                Share Results
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
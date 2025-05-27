import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Share, RotateCcw, Home } from "lucide-react";
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

  const goHome = () => {
    setLocation("/");
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
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              <Button
                onClick={handleShare}
                className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] text-[hsl(var(--deep-black))] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Share className="mr-2 h-4 w-4" />
                Share Your Result
              </Button>
              
              <Button
                variant="outline"
                onClick={retakeTest}
                className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Take Test Again
              </Button>
              
              <Button
                variant="outline"
                onClick={goHome}
                className="px-6 py-3 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
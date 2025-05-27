import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Share, RotateCcw } from "lucide-react";
import { archetypes } from "@/data/archetypes";
import { shareResult } from "@/lib/test-logic";

export default function Results() {
  const [, setLocation] = useLocation();
  const [archetypeName, setArchetypeName] = useState<string>("Avenger");

  // Get archetype from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const archetype = urlParams.get('archetype');
    if (archetype && archetypes[archetype]) {
      setArchetypeName(archetype);
    }
  }, []);

  const archetype = archetypes[archetypeName];

  if (!archetype) {
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
    shareResult(archetype.name);
  };

  const retakeTest = () => {
    setLocation("/test");
  };

  // Format description into sections
  const formatDescription = (text: string) => {
    const sections = text.split('\n\n');
    return sections.map((section, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {section}
      </p>
    ));
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--dark-gray))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
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
              Your Shadow Archetype
            </motion.h1>
            
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Archetype Icon */}
              <motion.div 
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] rounded-full flex items-center justify-center animate-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              >
                <div className="text-4xl text-[hsl(var(--deep-black))]">🎭</div>
              </motion.div>
              
              <motion.h2 
                className="font-serif text-4xl md:text-5xl font-bold text-[hsl(var(--metallic-silver))] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {archetype.name}
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[hsl(var(--silver-glow))] mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {archetype.subtitle}
              </motion.p>
              
              <motion.div 
                className="text-left space-y-6 text-[hsl(var(--silver-glow))] leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {formatDescription(archetype.description)}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Button
                onClick={handleShare}
                className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] text-[hsl(var(--deep-black))] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Share className="mr-2 h-5 w-5" />
                Share Your Shadow
              </Button>
              
              <Button
                variant="outline"
                onClick={retakeTest}
                className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Take Test Again
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

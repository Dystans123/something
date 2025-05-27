import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { archetypes } from "@/data/archetypes";

export default function Archetypes() {
  const [, setLocation] = useLocation();

  const backToLanding = () => {
    setLocation("/");
  };

  const formatDescription = (text: string) => {
    // Get first paragraph only for the overview
    const firstParagraph = text.split('\n\n')[0];
    return firstParagraph;
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[hsl(var(--silver-glow))] mb-6">
              The Eight Shadow Archetypes
            </h1>
            <p className="text-xl text-[hsl(var(--metallic-silver))]">
              Explore the hidden aspects of the psyche
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(archetypes).map(([key, archetype], index) => (
              <motion.div
                key={key}
                className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-2xl p-6 border border-[hsl(var(--metallic-silver)/0.2)] hover:border-[hsl(var(--metallic-silver)/0.4)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] rounded-lg flex items-center justify-center mr-4">
                    <div className="text-xl text-[hsl(var(--deep-black))]">🎭</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--metallic-silver))]">
                      {archetype.name}
                    </h3>
                    <p className="text-[hsl(var(--silver-glow))] text-sm">
                      {archetype.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[hsl(var(--silver-glow))] leading-relaxed">
                  {formatDescription(archetype.description)}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={backToLanding}
              className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

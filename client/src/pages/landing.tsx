import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArchetypeSilhouette } from "@/components/archetype-silhouette";
import { SmokeParticles } from "@/components/smoke-particles";

const archetypeNames = [
  "The Avenger",
  "The Controller", 
  "The Manipulator",
  "The Cynic",
  "The Rebel",
  "The Seducer",
  "The Martyr",
  "The Inner Child"
];

export default function Landing() {
  const [, setLocation] = useLocation();

  const startTest = () => {
    setLocation("/test");
  };

  const viewArchetypes = () => {
    setLocation("/archetypes");
  };

  return (
    <div className="min-h-screen relative">
      <SmokeParticles />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--dark-gray))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]" />
      
      {/* Navigation Bar */}
      <motion.nav 
        className="relative z-20 flex justify-between items-center p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))]">
          Shadow Test
        </h1>
        <Button
          onClick={() => setLocation("/toxicity-compass")}
          variant="outline"
          className="px-4 py-2 bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
        >
          Toxicity Compass
        </Button>
      </motion.nav>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-0">
        {/* Eight Archetype Silhouettes - moved inside hero content */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {archetypeNames.map((name, index) => (
              <ArchetypeSilhouette
                key={name}
                index={index}
                title={name}
              />
            ))}
          </div>
        </div>
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[hsl(var(--silver-glow))] via-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] bg-clip-text text-transparent">
              You are more than who you appear to be.
            </span>
          </motion.h1>
          
          <motion.div 
            className="space-y-6 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-[hsl(var(--silver-glow))]">
              Beneath the surface lies your <span className="font-semibold text-[hsl(var(--metallic-silver))]">Shadow</span> — parts of you you deny, fear, or hide.
            </p>
            <p className="text-[hsl(var(--silver-glow))]">
              Answer <span className="font-semibold text-white">40 projection questions</span> to reveal your Shadow archetype.
            </p>
            <p className="text-[hsl(var(--metallic-silver))] font-medium">
              But beware — once you see it, you can't unsee it.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              onClick={startTest}
              className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] text-[hsl(var(--deep-black))] font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
            >
              <span className="relative z-10">Start the Test</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={viewArchetypes}
              className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))] hover:scale-105"
            >
              View Archetypes
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.footer 
        className="relative z-10 text-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-[hsl(var(--metallic-silver))] text-sm font-light">
          Ponad milion przeprowadzonych testów
        </p>
      </motion.footer>
    </div>
  );
}

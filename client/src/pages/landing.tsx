import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArchetypeSilhouette } from "@/components/archetype-silhouette";
import { SmokeParticles } from "@/components/smoke-particles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Users, Shield, Heart, Clock, CheckCircle, Eye, Lightbulb, Target } from "lucide-react";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const startTest = () => {
    setLocation("/test");
  };

  const viewArchetypes = () => {
    setLocation("/archetypes");
  };

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
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
      
      {/* Content Container */}
      <div className="relative z-10 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center min-h-screen text-center pt-0">
            {/* Eight Archetype Silhouettes */}
            <div className="mb-8">
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
                  Discover Your Shadow Self
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-[hsl(var(--metallic-silver))] mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Unlock the mysteries of your unconscious mind through scientifically-backed psychological assessments. 
                Journey into the depths of your psyche and understand the hidden forces that shape your behavior, 
                relationships, and life choices.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Button
                  onClick={startTest}
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={viewArchetypes}
                  size="lg"
                  className="px-8 py-4 text-lg bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
                >
                  Explore Archetypes
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Understanding Your Inner Self Section */}
          <motion.section 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="mb-6 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))] hover:bg-[hsl(var(--metallic-silver)/0.1)] transition-all duration-300">
                  <Brain className="mr-2 h-4 w-4" />
                  Nieświadome Archetypy
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Odkryj Ukryte Oblicza Swojej Psychiki
              </motion.h2>
              
              <motion.p 
                className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Każdy z nas nosi w sobie ukryte archetypy - wzorce zachowań i reakcji, które kształtują nasze relacje, 
                decyzje i sposób postrzegania świata. Te nieświadome siły mogą być źródłem zarówno mocy, jak i destrukcji. 
                Czas poznać swoje prawdziwe oblicze.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)] hover:border-[hsl(var(--metallic-silver)/0.4)] transition-all duration-300 h-full group cursor-pointer">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Eye className="h-6 w-6 text-[hsl(var(--deep-black))]" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-3 group-hover:text-white transition-colors duration-300">
                      Nieświadome Wzorce
                    </h3>
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed group-hover:text-[hsl(var(--metallic-silver)/0.9)] transition-colors duration-300">
                      Twoje ukryte reakcje i automatyczne zachowania, które sterują Tobą bez Twojej świadomości. 
                      Poznaj mechanizmy, które kształtowały Cię przez lata i odkryj, jak możesz je przekształcić.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)] hover:border-[hsl(var(--metallic-silver)/0.4)] transition-all duration-300 h-full group cursor-pointer">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="h-6 w-6 text-[hsl(var(--deep-black))]" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-3 group-hover:text-white transition-colors duration-300">
                      Dynamika Relacji
                    </h3>
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed group-hover:text-[hsl(var(--metallic-silver)/0.9)] transition-colors duration-300">
                      Sposób, w jaki Twój archetyp wpływa na relacje z innymi. Zrozum, dlaczego przyciągasz określone 
                      osoby, jakie konflikty się powtarzają i jak przerwać destrukcyjne cykle.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)] hover:border-[hsl(var(--metallic-silver)/0.4)] transition-all duration-300 h-full group cursor-pointer">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Shield className="h-6 w-6 text-[hsl(var(--deep-black))]" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-3 group-hover:text-white transition-colors duration-300">
                      Integracja Cienia
                    </h3>
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed group-hover:text-[hsl(var(--metallic-silver)/0.9)] transition-colors duration-300">
                      Gdy poznasz swój cień, zyskujesz moc świadomego wyboru. Proces integracji prowadzi do 
                      autentyczności, odporności emocjonalnej i życia zgodnego z prawdziwym sobą.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={startTest}
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[hsl(var(--metallic-silver)/0.3)]"
                >
                  Odkryj Swój Archetyp Cienia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Toxicity Compass Section */}
          <motion.section 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                <Heart className="mr-2 h-4 w-4" />
                Relationship Health Assessment
              </Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6">
                How Toxic Relationships Reshape Your Inner World
              </h2>
              <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
                Toxic relationships don't just cause emotional pain - they fundamentally alter your psychological 
                landscape. Our Toxicity Compass reveals how harmful relationship patterns impact your sense of self, 
                emotional well-being, and ability to form healthy connections. Understanding these effects is crucial 
                for reclaiming your authentic identity.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-6">
                  The Psychological Impact of Toxic Relationships
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Identity Erosion</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        Constant criticism, manipulation, and gaslighting gradually erode your sense of self. 
                        You begin questioning your perceptions, values, and inherent worth, losing touch with 
                        who you truly are beneath the layers of imposed doubt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Emotional Dysregulation</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        Living in chronic stress and fear rewires your nervous system. Your emotional responses 
                        become hypervigilant or completely shut down, making it difficult to trust your feelings 
                        or form genuine connections with others.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Shadow Projection</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        Toxic dynamics prevent healthy shadow integration. Instead of acknowledging your own 
                        denied aspects, you may project them onto others or have others' shadows imposed on you, 
                        creating distorted self-perception.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Trauma Bonding</h4>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                        Cycles of abuse followed by affection create powerful psychological bonds that override 
                        rational thinking. This makes it extremely difficult to recognize unhealthy patterns 
                        or trust your instincts about what constitutes normal relationship behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 border border-[hsl(var(--metallic-silver)/0.2)]">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[hsl(var(--deep-black))]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-2">
                    Assess Your Relationship Health
                  </h4>
                  <p className="text-[hsl(var(--metallic-silver))]">
                    Take our comprehensive assessment to understand how your relationships affect your inner psychological landscape.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-[hsl(var(--metallic-silver))]">Identify toxic relationship patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-[hsl(var(--metallic-silver))]">Understand psychological impact on your identity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-[hsl(var(--metallic-silver))]">Get personalized recovery insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                    <span className="text-[hsl(var(--metallic-silver))]">5-minute comprehensive assessment</span>
                  </div>
                </div>

                <Button
                  onClick={() => setLocation("/toxicity-compass")}
                  className="w-full px-6 py-3 bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Take the Toxicity Compass Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.section>

          {/* Recovery and Healing Section */}
          <motion.section 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6">
                Reclaiming Your Authentic Self
              </h2>
              <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
                Recovery from toxic relationships isn't just about ending harmful dynamics - it's about rediscovering 
                who you are beneath the layers of conditioning, manipulation, and self-doubt. Understanding how these 
                experiences have shaped your inner world is the first step toward genuine healing and authentic self-expression.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-green-900/20 to-[hsl(var(--deep-black))] border-green-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-green-400 mb-3">Recognition</h3>
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    Identify how toxic patterns have influenced your self-perception, emotional responses, and 
                    relationship expectations. Awareness is the foundation of all meaningful change.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-900/20 to-[hsl(var(--deep-black))] border-yellow-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-yellow-400 mb-3">Healing</h3>
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    Begin the process of emotional healing through self-compassion, boundary setting, and 
                    reconnecting with your authentic feelings, needs, and values.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-[hsl(var(--deep-black))] border-blue-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-blue-400 mb-3">Integration</h3>
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    Integrate these insights into healthier relationship patterns with yourself and others, 
                    breaking cycles of dysfunction and creating authentic connections.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center flex-wrap">
              <Button
                onClick={startTest}
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] rounded-lg transition-all duration-300 hover:scale-105 mb-4 md:mb-0"
              >
                Explore Your Shadow Self
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={() => setLocation("/toxicity-compass")}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))] mb-4 md:mb-0"
              >
                Assess Relationship Health
              </Button>
              
              <Button
                onClick={() => setLocation("/relationship-patterns")}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))] mb-4 md:mb-0"
              >
                Relationship Patterns
              </Button>
              
              <Button
                onClick={() => setLocation("/integration-guide")}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent border border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                Personal Integration
              </Button>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            className="py-20 border-t border-[hsl(var(--metallic-silver)/0.1)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-2">
                  Shadow Test
                </h3>
                <p className="text-[hsl(var(--metallic-silver))] text-lg">
                  Professional psychological insights for authentic self-discovery
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-[hsl(var(--metallic-silver))] mb-3">Our Approach</h4>
                  <p className="text-[hsl(var(--metallic-silver)/0.8)] leading-relaxed">
                    Based on Carl Jung's analytical psychology and modern relationship research, 
                    our assessments provide scientifically-grounded insights into your unconscious patterns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--metallic-silver))] mb-3">Available Tests</h4>
                  <ul className="text-[hsl(var(--metallic-silver)/0.8)] space-y-1">
                    <li>Shadow Archetype Assessment</li>
                    <li>Toxicity Compass Analysis</li>
                    <li>Relationship Pattern Recognition</li>
                    <li>Personal Integration Guide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--metallic-silver))] mb-3">Your Privacy</h4>
                  <p className="text-[hsl(var(--metallic-silver)/0.8)] leading-relaxed">
                    All responses are completely anonymous and confidential. We believe psychological 
                    exploration should be a safe, judgment-free experience.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-[hsl(var(--metallic-silver)/0.1)] pt-6">
                <p className="text-[hsl(var(--metallic-silver))] mb-2">
                  Over 1 million psychological assessments completed worldwide
                </p>
                <p className="text-[hsl(var(--metallic-silver)/0.6)] text-sm">
                  © 2024 Shadow Test. Empowering authentic self-discovery through psychological insight.
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}

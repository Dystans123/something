import { motion } from "framer-motion";
import { useLocation } from "wouter";
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
              <Badge variant="outline" className="mb-6 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                <Brain className="mr-2 h-4 w-4" />
                Psychology & Self-Discovery
              </Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6">
                The Psychology of Your Inner Self
              </h2>
              <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
                Carl Jung's revolutionary work revealed that our psyche contains vast unexplored territories. 
                The "shadow" represents the parts of ourselves we've repressed, denied, or never fully acknowledged. 
                These hidden aspects profoundly influence our decisions, relationships, and life trajectory in ways 
                we rarely recognize.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-[hsl(var(--deep-black))]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-3">
                    Unconscious Patterns
                  </h3>
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    Your shadow contains the behavioral patterns that operate beneath conscious awareness. 
                    These automatic responses, formed in childhood and reinforced through life experiences, 
                    drive many of your actions without you realizing it.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[hsl(var(--deep-black))]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-3">
                    Relationship Dynamics
                  </h3>
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    Your shadow archetype determines how you unconsciously interact with others. 
                    Understanding these patterns helps you recognize why certain relationships feel 
                    familiar, why conflicts arise, and how to break destructive cycles.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.2)]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[hsl(var(--metallic-silver))] rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[hsl(var(--deep-black))]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-3">
                    Personal Integration
                  </h3>
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    When you become aware of your shadow, you gain the power to integrate these aspects 
                    consciously. This process leads to greater authenticity, emotional resilience, 
                    and the ability to make choices aligned with your true self.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                onClick={startTest}
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] rounded-lg transition-all duration-300 hover:scale-105"
              >
                Discover Your Shadow Archetype
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
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

          {/* Comprehensive Assessment Suite Section */}
          <motion.section 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
                <Target className="mr-2 h-4 w-4" />
                Comprehensive Assessment Suite
              </Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6">
                Four Paths to Self-Discovery
              </h2>
              <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
                Our scientifically-backed assessment suite offers multiple perspectives on your psychological landscape. 
                Each test reveals different aspects of your inner world, from unconscious archetypes to relationship patterns, 
                providing a comprehensive understanding of your authentic self.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Shadow Archetype Test */}
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.3)] hover:border-[hsl(var(--metallic-silver)/0.6)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-1">
                          Shadow Archetype Test
                        </h3>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          Core Assessment
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-[hsl(var(--metallic-silver))] mb-6 leading-relaxed">
                      Discover your dominant shadow archetype through 40 psychological projection questions. 
                      Uncover the hidden aspects of your personality that influence your decisions, relationships, 
                      and life patterns in ways you never realized.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">40 deep psychological questions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">8 Jungian shadow archetypes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Personalized archetype analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                        <span className="text-[hsl(var(--metallic-silver))]">10-15 minutes</span>
                      </div>
                    </div>

                    <Button
                      onClick={startTest}
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      Begin Shadow Test
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Toxicity Compass */}
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.3)] hover:border-[hsl(var(--metallic-silver)/0.6)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-1">
                          Toxicity Compass
                        </h3>
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                          Relationship Health
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-[hsl(var(--metallic-silver))] mb-6 leading-relaxed">
                      Assess the psychological impact of toxic relationships on your identity and well-being. 
                      Understand how harmful patterns have shaped your emotional landscape and receive 
                      personalized insights for healing and recovery.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Comprehensive toxicity assessment</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Three-zone impact analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Recovery guidance and resources</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                        <span className="text-[hsl(var(--metallic-silver))]">5-8 minutes</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setLocation("/toxicity-compass")}
                      className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      Take Toxicity Compass
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Relationship Patterns */}
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.3)] hover:border-[hsl(var(--metallic-silver)/0.6)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-1">
                          Relationship Patterns
                        </h3>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          Behavioral Analysis
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-[hsl(var(--metallic-silver))] mb-6 leading-relaxed">
                      Identify your dominant relationship patterns and understand how they influence your 
                      connections with others. Discover recurring themes in your romantic, familial, 
                      and professional relationships.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Pattern recognition analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Attachment style insights</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Relationship improvement strategies</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                        <span className="text-[hsl(var(--metallic-silver))]">7-10 minutes</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setLocation("/relationship-patterns")}
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                    >
                      Analyze Patterns
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Integration Guide */}
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--metallic-silver)/0.3)] hover:border-[hsl(var(--metallic-silver)/0.6)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-1">
                          Integration Guide
                        </h3>
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                          Personal Growth
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-[hsl(var(--metallic-silver))] mb-6 leading-relaxed">
                      Receive personalized guidance for integrating your shadow aspects into conscious awareness. 
                      Learn practical strategies for emotional healing, authentic self-expression, 
                      and creating healthier relationships.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Personalized integration roadmap</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Practical growth exercises</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-[hsl(var(--metallic-silver))]">Ongoing development strategies</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[hsl(var(--metallic-silver))]" />
                        <span className="text-[hsl(var(--metallic-silver))]">8-12 minutes</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setLocation("/integration-guide")}
                      className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                    >
                      Start Integration
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Interactive Stats Section */}
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 border border-[hsl(var(--metallic-silver)/0.2)] mb-16"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                  Trusted by Thousands Worldwide
                </h3>
                <p className="text-[hsl(var(--metallic-silver))] text-lg">
                  Join a global community of individuals committed to authentic self-discovery
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-2">1M+</div>
                  <div className="text-[hsl(var(--metallic-silver))]">Assessments Completed</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-2">150+</div>
                  <div className="text-[hsl(var(--metallic-silver))]">Countries Reached</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-2">96%</div>
                  <div className="text-[hsl(var(--metallic-silver))]">Report Valuable Insights</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-2">4.8/5</div>
                  <div className="text-[hsl(var(--metallic-silver))]">Average User Rating</div>
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-[hsl(var(--metallic-silver))] text-lg mb-8 max-w-2xl mx-auto">
                Start with any assessment that resonates with you. Each provides unique insights into different 
                aspects of your psychological landscape.
              </p>
              <Button
                onClick={startTest}
                size="lg"
                className="px-10 py-4 text-lg font-semibold bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start with Shadow Test
                <ArrowRight className="ml-2 h-5 w-5" />
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

import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Shield, Users, Lightbulb, Clock, CheckCircle } from "lucide-react";

interface ToolCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  features: string[];
  buttonText: string;
  route: string;
  duration: string;
}

const tools: ToolCard[] = [
  {
    id: "shadow-test",
    title: "Shadow Archetype Test",
    subtitle: "Core Assessment",
    description: "Discover your dominant shadow archetype through 40 psychological projection questions. Uncover the hidden aspects of your personality that influence your decisions, relationships, and life patterns in ways you never realized.",
    icon: <Brain className="h-6 w-6" />,
    color: "text-purple-400",
    bgGradient: "from-purple-500/20 to-indigo-500/20",
    features: [
      "40 deep psychological questions",
      "8 Jungian shadow archetypes",
      "Personalized archetype analysis"
    ],
    buttonText: "Begin Shadow Test",
    route: "/test",
    duration: "10-15 minutes"
  },
  {
    id: "toxicity-compass",
    title: "Toxicity Compass",
    subtitle: "Relationship Health",
    description: "Assess the psychological impact of toxic relationships on your identity and well-being. Understand how harmful patterns have shaped your emotional landscape and receive personalized insights for healing and recovery.",
    icon: <Shield className="h-6 w-6" />,
    color: "text-red-400",
    bgGradient: "from-red-500/20 to-orange-500/20",
    features: [
      "Comprehensive toxicity assessment",
      "Three-zone impact analysis",
      "Recovery guidance and resources"
    ],
    buttonText: "Take Toxicity Compass",
    route: "/toxicity-compass",
    duration: "5-8 minutes"
  },
  {
    id: "relationship-patterns",
    title: "Relationship Patterns",
    subtitle: "Behavioral Analysis",
    description: "Identify your dominant relationship patterns and understand how they influence your connections with others. Discover recurring themes in your relationships and learn strategies for building healthier bonds.",
    icon: <Users className="h-6 w-6" />,
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    features: [
      "Pattern identification system",
      "Relationship behavior analysis",
      "Connection improvement strategies"
    ],
    buttonText: "Explore Patterns",
    route: "/relationship-patterns",
    duration: "7-10 minutes"
  },
  {
    id: "integration-guide",
    title: "Integration Guide",
    subtitle: "Personal Growth",
    description: "Receive personalized guidance for integrating your shadow aspects into conscious awareness. Learn practical strategies for emotional healing, authentic self-expression, and psychological wholeness.",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "text-amber-400",
    bgGradient: "from-amber-500/20 to-yellow-500/20",
    features: [
      "Personal integration assessment",
      "Customized growth strategies",
      "Practical healing techniques"
    ],
    buttonText: "Start Integration",
    route: "/integration-guide",
    duration: "8-12 minutes"
  }
];

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      {/* Navigation */}
      <motion.nav 
        className="relative z-20 flex justify-between items-center p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-[hsl(var(--metallic-silver))] border-[hsl(var(--metallic-silver))]">
            Comprehensive Assessment Suite
          </Badge>
        </div>
        <h1 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))]">
          Four Paths to Self-Discovery
        </h1>
        <div className="w-48"></div> {/* Spacer for centering */}
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(var(--silver-glow))]">
            Four Paths to Self-Discovery
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
            Our scientifically-backed assessment suite offers multiple perspectives on your psychological landscape. Each 
            test reveals different aspects of your inner world, from unconscious archetypes to relationship patterns, 
            providing a comprehensive understanding of your authentic self.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className={`h-full bg-gradient-to-br ${tool.bgGradient} border-[hsl(var(--border))] hover:border-[hsl(var(--metallic-silver)/0.5)] transition-all duration-300 hover:shadow-glow`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tool.bgGradient} flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <Badge variant="outline" className={`${tool.color} border-current`}>
                      {tool.subtitle}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-2">
                    {tool.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-3">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${tool.color} flex-shrink-0`} />
                        <span className="text-[hsl(var(--metallic-silver))] text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--border))]">
                    <div className="flex items-center space-x-2 text-[hsl(var(--metallic-silver))] text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{tool.duration}</span>
                    </div>
                    
                    <Button
                      onClick={() => setLocation(tool.route)}
                      className={`bg-gradient-to-r ${tool.bgGradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-300`}
                    >
                      {tool.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 border border-[hsl(var(--border))] max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(var(--silver-glow))] mb-4">
              Begin Your Journey of Self-Discovery
            </h3>
            <p className="text-[hsl(var(--metallic-silver))] mb-6 leading-relaxed">
              Each assessment offers unique insights into your psychological landscape. Start with any tool that 
              resonates with you, or take them all for a comprehensive understanding of your inner world.
            </p>
            <Button
              onClick={() => setLocation("/test")}
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-[hsl(var(--metallic-silver))] text-[hsl(var(--deep-black))] hover:bg-[hsl(var(--silver-glow))] transition-all duration-300 hover:scale-105"
            >
              Start with Shadow Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* AdSense placeholder areas - strategically placed for good user experience */}
        <div className="mt-16 space-y-8">
          {/* Top banner ad space */}
          <div className="w-full h-24 bg-[hsl(var(--dark-gray))] border border-[hsl(var(--border))] rounded-lg flex items-center justify-center opacity-50">
            <span className="text-[hsl(var(--metallic-silver))] text-sm">Advertisement Space</span>
          </div>
          
          {/* Side banner ad spaces for desktop */}
          <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 w-32 h-96 bg-[hsl(var(--dark-gray))] border border-[hsl(var(--border))] rounded-lg flex items-center justify-center opacity-50 z-30">
            <span className="text-[hsl(var(--metallic-silver))] text-xs transform -rotate-90">Ad Space</span>
          </div>
        </div>
      </div>
    </div>
  );
}
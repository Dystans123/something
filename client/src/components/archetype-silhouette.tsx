import { motion } from "framer-motion";

interface ArchetypeSilhouetteProps {
  index: number;
  title: string;
}

export function ArchetypeSilhouette({ index, title }: ArchetypeSilhouetteProps) {
  const shortTitle = title.replace("The ", "");
  
  return (
    <motion.div
      className="archetype-silhouette h-16 md:h-20 cursor-pointer relative overflow-hidden"
      title={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }}
      style={{
        animationDelay: `${index * 0.5}s`
      }}
    >
      {/* Archetype name overlay with automatic shine effect */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span 
          className="text-[10px] md:text-xs font-bold text-center px-1 leading-tight animate-shine"
          style={{
            animationDelay: `${index * 1}s`
          }}
        >
          {shortTitle}
        </span>
      </div>
      
      {/* Automatic shine effect overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--metallic-silver)/0.4)] to-transparent transform -skew-x-12 -translate-x-full animate-shine-sweep"
        style={{
          animationDelay: `${index * 1}s`
        }}
      />
    </motion.div>
  );
}

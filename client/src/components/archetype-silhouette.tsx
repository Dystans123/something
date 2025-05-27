import { motion } from "framer-motion";

interface ArchetypeSilhouetteProps {
  index: number;
  title: string;
}

export function ArchetypeSilhouette({ index, title }: ArchetypeSilhouetteProps) {
  return (
    <motion.div
      className="archetype-silhouette h-20 md:h-24 cursor-pointer relative overflow-hidden group"
      title={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.05 }}
      style={{
        animationDelay: `${index * 0.5}s`
      }}
    >
      {/* Archetype name overlay with shine effect */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-xs md:text-sm font-semibold text-transparent group-hover:text-[hsl(var(--metallic-silver))] transition-all duration-500 text-center px-2 group-hover:animate-shine">
          {title}
        </span>
      </div>
      
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--metallic-silver)/0.3)] to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
    </motion.div>
  );
}

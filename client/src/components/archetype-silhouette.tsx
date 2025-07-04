import { motion } from "framer-motion";

interface ArchetypeSilhouetteProps {
  index: number;
  title: string;
}

export function ArchetypeSilhouette({ index, title }: ArchetypeSilhouetteProps) {
  const shortTitle = title.replace("The ", "");
  
  return (
    <div
      className="archetype-silhouette h-16 md:h-20 cursor-pointer relative overflow-hidden"
      title={title}
    >
      {/* Archetype name overlay - always visible */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span 
          className="text-[10px] md:text-sm lg:text-base font-bold text-center px-1 leading-tight text-[hsl(var(--metallic-silver))] opacity-90"
        >
          {shortTitle}
        </span>
      </div>
      
      {/* Subtle shine effect overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--metallic-silver)/0.2)] to-transparent transform -skew-x-12 -translate-x-full animate-shine-sweep"
        style={{
          animationDelay: `${index * 0.3}s`
        }}
      />
    </div>
  );
}

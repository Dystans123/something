import { motion } from "framer-motion";

interface ArchetypeSilhouetteProps {
  index: number;
  title: string;
}

export function ArchetypeSilhouette({ index, title }: ArchetypeSilhouetteProps) {
  return (
    <motion.div
      className="archetype-silhouette h-20 md:h-24 cursor-pointer"
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
    />
  );
}

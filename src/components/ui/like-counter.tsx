"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
import { getLikes, incrementLikes, LikeType } from "@/lib/supabase";

interface LikeCounterProps {
  type: LikeType;
  projectId?: number;
}

export function LikeCounter({ type, projectId }: LikeCounterProps) {
  const [value, setValue] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikes = async () => {
      setLoading(true);
      const count = await getLikes(type, projectId);
      setValue(count);
      setLoading(false);
    };
    fetchLikes();
  }, [type, projectId]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Optimistic update
    setValue(prev => prev + 1);
    setIsLiked(true);

    const success = await incrementLikes(type, projectId);
    
    if (!success) {
      // Revert if failed
      setValue(prev => prev - 1);
      setIsLiked(false);
    }
  };

  if (loading) {
    return (
      <Button variant="outline" className="min-w-[90px] gap-2">
        <Heart className="h-4 w-4" />
        <span className="font-mono text-sm">...</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={handleLike}
      className={cn(
        "group relative min-w-[90px] overflow-hidden transition-all duration-300 hover:border-primary/50",
        isLiked && "border-primary/50 bg-primary/5"
      )}
    >
      <motion.div
        className="relative z-10 flex items-center gap-2"
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <motion.div
            initial={false}
            animate={{
              scale: isLiked ? 1.2 : 1,
              color: isLiked ? "#ef4444" : "currentColor",
            }}
            transition={{
              duration: 0.4,
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 400,
                restDelta: 0.001
              }
            }}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors duration-300",
                isLiked ? "fill-red-500 stroke-red-500" : "group-hover:text-primary"
              )}
            />
          </motion.div>
          
          {/* Burst effect particles */}
          <AnimatePresence>
            {isLiked && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 0, 
                      scale: 1, 
                      x: Math.cos(i * 60 * (Math.PI / 180)) * 12, 
                      y: Math.sin(i * 60 * (Math.PI / 180)) * 12 
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="relative h-5 min-w-[1ch] overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={value}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="block font-mono text-sm font-medium"
            >
              {value}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </Button>
  );
}
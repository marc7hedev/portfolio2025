"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    fetchLikes();
  }, [type, projectId]);

  const fetchLikes = async () => {
    setLoading(true);
    const count = await getLikes(type, projectId);
    setValue(count);
    setLoading(false);
  };

  const handleLike = async () => {
    const success = await incrementLikes(type, projectId);
    
    if (success) {
      setValue(prev => prev + 1);
      setIsLiked(true);
      
      // Efecto temporal de like
      setTimeout(() => {
        setIsLiked(false);
      }, 1000);
    }
  };

  if (loading) {
    return (
      <Button variant="outline" className="min-w-[100px]">
        <motion.div className="flex items-center">
          <Heart className="mr-2 h-4 w-4" />
          <span className="font-mono text-base">...</span>
        </motion.div>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={handleLike}
      className={cn(
        "transition-colors min-w-[100px]",
        isLiked && "bg-primary/10 text-primary hover:bg-primary/20"
      )}
    >
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Heart 
          className={cn(
            "mr-2 h-4 w-4 transition-colors duration-300",
            isLiked ? "fill-red-500 stroke-red-500" : "stroke-current"
          )}
        />
        <span className="font-mono text-base">{value}</span>
      </motion.div>
    </Button>
  );
}
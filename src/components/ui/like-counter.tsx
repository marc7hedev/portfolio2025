"use client";

import { useEffect, useState } from "react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LikeCounter() {
  const [value, setValue] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Cargar likes y estado del localStorage
    const storedLikes = parseInt(localStorage.getItem("portfolioLikes") || "0");
    const userHasLiked = localStorage.getItem("userHasLiked") === "true";
    setValue(storedLikes);
    setHasLiked(userHasLiked);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newValue = value + 1;
      setValue(newValue);
      setHasLiked(true);
      localStorage.setItem("portfolioLikes", newValue.toString());
      localStorage.setItem("userHasLiked", "true");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleLike}
      className={cn(
        "transition-colors",
        hasLiked && "bg-primary/10 text-primary hover:bg-primary/20"
      )}
      disabled={hasLiked}
    >
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          className={cn(
            "mr-2 h-4 w-4 fill-transparent stroke-current stroke-[1.3]",
            hasLiked && "fill-primary stroke-primary"
          )}
        >
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
        </svg>
        <AnimatedNumber
          className="font-mono text-base"
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={value}
        />
      </motion.div>
    </Button>
  );
}
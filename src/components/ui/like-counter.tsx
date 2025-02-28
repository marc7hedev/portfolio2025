"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { createClient } from '@supabase/supabase-js';

// Creamos el cliente de Supabase
const supabase = createClient(
  'https://gggrnxxxvgmkqbcbbepo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZ3JueHh4dmdta3FiY2JiZXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNzA0ODksImV4cCI6MjAyNDg0NjQ4OX0.JrgdqsQUBhYgP6DLGDPuGJ8rRB2lL7xCxIQJ9U2rpeo'
);

export function LikeCounter() {
  const [value, setValue] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario ya dio like usando localStorage
    const userHasLiked = localStorage.getItem("userHasLiked") === "true";
    setHasLiked(userHasLiked);
    
    // Obtener el total de likes
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      const { data, error } = await supabase
        .from('likes')
        .select('count')
        .single();
      
      if (error) throw error;
      
      setValue(data?.count || 0);
    } catch (error) {
      console.error('Error fetching likes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!hasLiked) {
      try {
        const { error } = await supabase.rpc('increment_likes');
        
        if (error) throw error;

        setValue(prev => prev + 1);
        setHasLiked(true);
        localStorage.setItem("userHasLiked", "true");
      } catch (error) {
        console.error('Error incrementing likes:', error);
      }
    }
  };

  if (loading) {
    return (
      <Button variant="outline" disabled>
        <motion.div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            className="mr-2 h-4 w-4 fill-transparent stroke-current stroke-[1.3]"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
          </svg>
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
        <span className="font-mono text-base">{value}</span>
      </motion.div>
    </Button>
  );
}
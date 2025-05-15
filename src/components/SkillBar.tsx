
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  proficiency: number;
  delay?: number;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  proficiency, 
  delay = 0,
  className 
}) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.style.setProperty('--width', `${proficiency}%`);
        progressRef.current.classList.add('animate-grow-width');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [proficiency, delay]);

  return (
    <div className={cn("mb-3", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{proficiency}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-purple-500 rounded-full w-0"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

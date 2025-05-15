
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

  // Determine color based on proficiency
  const getColorClass = () => {
    if (proficiency >= 85) return 'bg-green-500';
    if (proficiency >= 70) return 'bg-blue-500';
    if (proficiency >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className={cn("mb-5", className)}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-sm font-medium text-purple-600">{proficiency}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div 
          ref={progressRef}
          className={cn("h-full rounded-full w-0 transition-all", getColorClass())}
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

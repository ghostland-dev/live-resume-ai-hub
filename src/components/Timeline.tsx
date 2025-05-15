
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  index?: number;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  duration,
  description,
  index = 0,
  className
}) => {
  return (
    <div 
      className={cn(
        "pl-12 relative pb-8", 
        "animate-fade-in opacity-0",
        className
      )} 
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      <div className="timeline-line" />
      <div className="timeline-dot" />
      <div className="bg-card rounded-lg p-4 shadow-sm border">
        <h3 className="text-lg font-medium">{title}</h3>
        <h4 className="text-sm font-medium text-purple-600">{subtitle}</h4>
        <p className="text-xs text-muted-foreground mb-2">{duration}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.company}
          subtitle={item.position}
          duration={item.duration}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default Timeline;


import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Share2, Briefcase, GraduationCap, Award } from 'lucide-react';
import Timeline from './Timeline';
import SkillBar from './SkillBar';

interface Education {
  institution: string;
  degree: string;
  duration: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Skill {
  name: string;
  proficiency: number;
}

interface CVData {
  name: string;
  title: string;
  summary: string;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
}

interface CVPreviewProps {
  data: CVData;
  className?: string;
}

const CVPreview: React.FC<CVPreviewProps> = ({ data, className }) => {
  return (
    <Card className={className}>
      <CardHeader className="bg-purple-500 text-white pb-12 pt-8 rounded-t-lg">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2 animate-fade-in">{data.name}</h1>
          <h2 className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '100ms' }}>{data.title}</h2>
        </div>
      </CardHeader>
      
      <CardContent className="-mt-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h3 className="text-lg font-medium mb-2">Professional Summary</h3>
          <p className="text-gray-700">{data.summary}</p>
        </div>
        
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="experience">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills">
              <Award className="mr-2 h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience">
            <Timeline items={data.experience} />
          </TabsContent>
          
          <TabsContent value="skills">
            <div className="grid gap-4 md:grid-cols-2">
              {data.skills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  delay={index * 100}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-4 shadow-sm border animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <h3 className="text-lg font-medium">{edu.institution}</h3>
                  <p className="text-purple-600">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share CV
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CVPreview;

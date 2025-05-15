
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Share2, Briefcase, GraduationCap, Award, User } from 'lucide-react';
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
    <Card className={cn("overflow-hidden shadow-lg", className)}>
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-400 text-white pb-12 pt-10 rounded-t-lg">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
            <User className="h-12 w-12 text-purple-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2 animate-fade-in">{data.name}</h1>
          <h2 className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {data.title}
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
              Available for hire
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="-mt-8 px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <span className="bg-purple-100 p-1 rounded-full mr-2">
              <User className="h-4 w-4 text-purple-500" />
            </span>
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </div>
        
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="experience" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              <Award className="mr-2 h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
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
                  className="bg-white rounded-lg p-5 shadow-md border animate-fade-in opacity-0 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <GraduationCap className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{edu.institution}</h3>
                      <p className="text-purple-600 font-medium">{edu.degree}</p>
                      <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t py-5 px-6 bg-gray-50">
        <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:text-purple-700">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:text-purple-700">
          <Share2 className="mr-2 h-4 w-4" />
          Share CV
        </Button>
      </CardFooter>
    </Card>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default CVPreview;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Linkedin, FileText } from 'lucide-react';

// Mock data for development
const mockCV = {
  name: "Jane Doe",
  title: "Senior Frontend Developer",
  summary: "Passionate frontend developer with 7+ years of experience building modern web applications. Specialized in React, TypeScript and animation libraries. Led development teams at startups and enterprise companies.",
  experience: [
    {
      company: "Tech Innovators",
      position: "Senior Frontend Developer",
      duration: "2020 - Present",
      description: "Led frontend development for a SaaS platform with 50k monthly users. Improved performance by 40% through code optimization."
    },
    {
      company: "Digital Solutions Inc",
      position: "Frontend Developer",
      duration: "2018 - 2020",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with UX team to implement design systems."
    },
    {
      company: "StartupXYZ",
      position: "Web Developer",
      duration: "2016 - 2018",
      description: "Built front-end interfaces for e-commerce applications. Implemented cart and checkout processes."
    }
  ],
  skills: [
    { name: "React", proficiency: 90 },
    { name: "TypeScript", proficiency: 85 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "Next.js", proficiency: 80 },
    { name: "UI/UX Design", proficiency: 75 },
    { name: "State Management", proficiency: 85 }
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "BS in Computer Science",
      duration: "2012 - 2016"
    }
  ]
};

interface CVFormProps {
  onSubmit: (data: any) => void;
}

const CVForm: React.FC<CVFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the prompt to an API
    // For now, we'll just use our mock data
    onSubmit(mockCV);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Generate Your Professional CV</CardTitle>
        <CardDescription>
          Describe your experience or connect with LinkedIn to create your interactive CV
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="prompt" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="prompt">
              <FileText className="mr-2 h-4 w-4" />
              Text Prompt
            </TabsTrigger>
            <TabsTrigger value="linkedin">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Import
            </TabsTrigger>
          </TabsList>
          <TabsContent value="prompt">
            <form onSubmit={handleSubmit}>
              <Textarea 
                placeholder="Describe your experience, skills, and career goals. For example: 'I'm a frontend developer with 5 years of experience in React, TypeScript, and UI/UX design. I've worked at tech startups and led teams of 3-5 developers.'"
                className="min-h-[200px] mb-4"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button 
                type="submit" 
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                Generate CV
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="linkedin">
            <div className="flex flex-col items-center justify-center py-8">
              <Linkedin className="h-12 w-12 text-blue-600 mb-4" />
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => alert('LinkedIn integration would be implemented here')}
              >
                Connect with LinkedIn
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                We'll import your profile information to create your CV
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-sm text-muted-foreground">Your data is processed securely</p>
        <Button variant="ghost" size="sm" onClick={() => onSubmit(mockCV)}>
          See Example
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CVForm;

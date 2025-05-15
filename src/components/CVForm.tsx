
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Linkedin, FileText, Sparkles, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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

const EXAMPLE_PROMPTS = [
  "I'm a frontend developer with 3 years experience in React, TypeScript and Next.js. I've worked at two startups and contributed to open source.",
  "UX/UI designer with expertise in Figma and Adobe Creative Suite. I've designed mobile apps and websites for e-commerce clients.",
  "Full-stack developer specialized in MERN stack. I've built several web applications and have a strong background in database design."
];

const CVForm: React.FC<CVFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real application, this would send the prompt to an API
      onSubmit(mockCV);
      setIsLoading(false);
    }, 1500);
  };

  const handleExamplePrompt = (examplePrompt: string) => {
    setPrompt(examplePrompt);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Generate Your Professional CV</CardTitle>
        <CardDescription className="text-base">
          Describe your experience or connect with LinkedIn to create your interactive CV
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="prompt" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="prompt" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              <FileText className="mr-2 h-4 w-4" />
              Text Prompt
            </TabsTrigger>
            <TabsTrigger value="linkedin" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Import
            </TabsTrigger>
          </TabsList>
          <TabsContent value="prompt">
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex gap-2 flex-wrap">
                  {EXAMPLE_PROMPTS.map((examplePrompt, i) => (
                    <Button 
                      key={i} 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleExamplePrompt(examplePrompt)}
                      className="text-xs"
                    >
                      Example {i + 1}
                    </Button>
                  ))}
                </div>
                <Textarea 
                  placeholder="Describe your experience, skills, and career goals. For example: 'I'm a frontend developer with 5 years of experience in React, TypeScript, and UI/UX design. I've worked at tech startups and led teams of 3-5 developers.'"
                  className="min-h-[200px] mb-4 resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <Alert className="bg-purple-50 border-purple-200">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  <AlertDescription className="text-sm text-purple-700">
                    Add more details about your projects, achievements, and specific skills for a more personalized CV.
                  </AlertDescription>
                </Alert>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-500 hover:bg-purple-600"
                onClick={handleSubmit}
                disabled={!prompt.trim() || isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⟳</span> 
                    Generating...
                  </>
                ) : (
                  <>Generate CV</>
                )}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="linkedin">
            <div className="flex flex-col items-center justify-center py-8 space-y-6">
              <div className="bg-blue-50 p-6 rounded-full">
                <Linkedin className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-medium">Connect with LinkedIn</h3>
                <p className="text-sm text-gray-600 max-w-md">
                  Import your profile information directly from LinkedIn to create your professional CV
                </p>
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => alert('LinkedIn integration would be implemented here')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect with LinkedIn
              </Button>
              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-sm text-blue-700">
                  We'll only access the public information on your profile to create your CV.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-sm text-gray-500">Your data is processed securely</p>
        <Button variant="ghost" size="sm" onClick={() => onSubmit(mockCV)}>
          <Sparkles className="mr-2 h-4 w-4" />
          See Example
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CVForm;

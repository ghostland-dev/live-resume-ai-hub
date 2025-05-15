
import React, { useState } from 'react';
import Header from '@/components/Header';
import CVForm from '@/components/CVForm';
import CVPreview from '@/components/CVPreview';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Zap, RefreshCw, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Placeholder image URL
const heroImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const Index = () => {
  const [cvData, setCvData] = useState<any>(null);
  const { toast } = useToast();
  
  const handleCVSubmit = (data: any) => {
    setCvData(data);
    toast({
      title: "CV Generated!",
      description: "Your interactive CV has been created successfully.",
    });
    
    // Scroll to preview after a slight delay
    setTimeout(() => {
      document.getElementById('cv-preview')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered <span className="text-purple-500">Interactive CV</span> Generator
              </h1>
              <p className="text-lg text-muted-foreground">
                Create a professional, interactive CV and portfolio in minutes using AI and keep it automatically updated with your latest projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-500 hover:bg-purple-600"
                  onClick={() => document.getElementById('generate-cv')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Generate Your CV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Examples
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-100 rounded-lg -z-10 -rotate-3"></div>
              <img 
                src={heroImage} 
                alt="Person creating CV" 
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why Choose LiveCV AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create beautiful, interactive CVs that stand out and stay up-to-date automatically
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Generate professional CV content from a simple prompt or import from LinkedIn
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <RefreshCw className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Auto-Updating</h3>
              <p className="text-muted-foreground">
                Sync with Notion and other tools to keep your CV automatically updated
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Lock className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your data is encrypted and never shared without your explicit permission
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creating your professional interactive CV takes just minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-semibold text-purple-500">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Enter Your Details</h3>
              <p className="text-muted-foreground">
                Describe your experience or connect to LinkedIn
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-semibold text-purple-500">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">AI Creates Your CV</h3>
              <p className="text-muted-foreground">
                Our AI generates a professional, tailored CV
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-semibold text-purple-500">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Share & Update</h3>
              <p className="text-muted-foreground">
                Download as PDF, share online, and sync for updates
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Generate CV Section */}
      <section id="generate-cv" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <FileText className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-3">Create Your Interactive CV</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Generate a professional CV in minutes with our AI-powered platform
              </p>
            </div>
            
            <CVForm onSubmit={handleCVSubmit} />
          </div>
        </div>
      </section>
      
      {/* CV Preview Section, only shown when a CV has been generated */}
      {cvData && (
        <section id="cv-preview" className="py-16">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Your Interactive CV</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here's your professionally generated CV. Download, share, or edit it to match your needs.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CVPreview data={cvData} />
            </div>
          </div>
        </section>
      )}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <FileText className="h-6 w-6 text-purple-300" />
              <h2 className="text-xl font-bold">LiveCV AI</h2>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LiveCV AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

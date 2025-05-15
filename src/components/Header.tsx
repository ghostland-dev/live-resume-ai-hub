
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-purple-500" />
          <h1 className="text-xl font-bold text-foreground">LiveCV AI</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
          <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Examples</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <Button size="sm" variant="outline">Sign in</Button>
          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

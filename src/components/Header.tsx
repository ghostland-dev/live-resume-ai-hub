
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 p-2 rounded-lg">
            <FileText className="h-5 w-5 text-purple-500" />
          </div>
          <h1 className="text-xl font-bold text-foreground">LiveCV AI</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:underline">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:underline">How it Works</a>
          <a href="#examples" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:underline">Examples</a>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <Button size="sm" variant="outline">Sign in</Button>
          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
        </div>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-6">
              <a href="#features" className="text-lg font-medium">Features</a>
              <a href="#how-it-works" className="text-lg font-medium">How it Works</a>
              <a href="#examples" className="text-lg font-medium">Examples</a>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full">Sign in</Button>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

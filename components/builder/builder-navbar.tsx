"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Download, Save, ArrowLeft, Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { CVFormData, CVTemplate } from "@/lib/types";
import { generatePDF } from "@/lib/pdf-generator";

interface BuilderNavbarProps {
  formData: CVFormData;
  template: CVTemplate;
}

export function BuilderNavbar({ formData, template }: BuilderNavbarProps) {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  
  const handleDownload = () => {
    generatePDF("cv-preview", `${formData.personalInfo.fullName.replace(/\s+/g, "_")}_CV.pdf`);
    toast({
      title: "PDF generated!",
      description: "Your CV has been downloaded as a PDF file.",
    });
  };
  
  const handleSave = () => {
    // In a real app, this would save to a database
    localStorage.setItem("cv-draft", JSON.stringify({ formData, template }));
    toast({
      title: "Progress saved",
      description: "Your CV has been saved. You can continue editing later.",
    });
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">KentCV</span>
          </Link>
          <Link href="/dashboard" className="hidden md:flex">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button variant="outline" onClick={handleSave} className="hidden md:flex">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>
    </header>
  );
}
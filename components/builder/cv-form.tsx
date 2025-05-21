"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfoForm } from "./form-sections/personal-info-form";
import { EducationForm } from "./form-sections/education-form";
import { ExperienceForm } from "./form-sections/experience-form";
import { SkillsForm } from "./form-sections/skills-form";
import { TemplateSelector } from "./template-selector";
import { CVFormData, CVTemplate } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CVFormProps {
  formData: CVFormData;
  setFormData: (data: CVFormData) => void;
  selectedTemplate: CVTemplate;
  setSelectedTemplate: (template: CVTemplate) => void;
}

export function CVForm({ 
  formData, 
  setFormData,
  selectedTemplate,
  setSelectedTemplate
}: CVFormProps) {
  const [activeTab, setActiveTab] = useState("personal");
  const { toast } = useToast();
  
  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "template", label: "Template" },
  ];
  
  const handleNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };
  
  const handlePrevious = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };
  
  const handleRequestAIReview = () => {
    toast({
      title: "AI Review Started",
      description: "Our AI is analyzing your CV. This may take a few moments...",
    });
    
    // Simulate AI review process
    setTimeout(() => {
      toast({
        title: "Review Complete",
        description: "Your CV review is ready. Check the review section for feedback.",
      });
      // In a real app, this would redirect to the review page with real feedback
    }, 2000);
  };
  
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Build Your CV</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-6">
          {tabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="personal">
          <PersonalInfoForm 
            data={formData.personalInfo} 
            onChange={(personalInfo) => setFormData({ ...formData, personalInfo })} 
          />
        </TabsContent>
        
        <TabsContent value="education">
          <EducationForm 
            educationList={formData.education} 
            onChange={(education) => setFormData({ ...formData, education })} 
          />
        </TabsContent>
        
        <TabsContent value="experience">
          <ExperienceForm 
            experienceList={formData.experience} 
            onChange={(experience) => setFormData({ ...formData, experience })} 
          />
        </TabsContent>
        
        <TabsContent value="skills">
          <SkillsForm 
            skillsList={formData.skills} 
            languages={formData.languages}
            summary={formData.summary}
            onChange={(data) => 
              setFormData({ 
                ...formData, 
                skills: data.skills, 
                languages: data.languages,
                summary: data.summary
              })
            } 
          />
        </TabsContent>
        
        <TabsContent value="template">
          <TemplateSelector 
            selectedTemplate={selectedTemplate} 
            onChange={setSelectedTemplate} 
          />
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={activeTab === "personal"}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <Button
          variant="default"
          onClick={handleRequestAIReview}
          className="mx-auto"
        >
          <Bot className="mr-2 h-4 w-4" />
          Request AI Review
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={activeTab === "template"}
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
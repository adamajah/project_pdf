"use client";

import { CVTemplate } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplateSelectorProps {
  selectedTemplate: CVTemplate;
  onChange: (template: CVTemplate) => void;
}

export function TemplateSelector({ selectedTemplate, onChange }: TemplateSelectorProps) {
  const templates = [
    {
      id: "minimal" as CVTemplate,
      name: "Minimal",
      description: "Clean, straightforward design with a focus on content",
      image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "professional" as CVTemplate,
      name: "Professional",
      description: "Traditional structure with a modern touch",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "creative" as CVTemplate,
      name: "Creative",
      description: "Stand out with a unique layout and design",
      image: "https://images.pexels.com/photos/8867426/pexels-photo-8867426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card 
            key={template.id}
            className={cn(
              "cursor-pointer overflow-hidden transition-all",
              selectedTemplate === template.id 
                ? "ring-2 ring-primary" 
                : "hover:border-primary/50"
            )}
            onClick={() => onChange(template.id)}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={template.image}
                alt={template.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xl flex items-center justify-between">
                {template.name}
                {selectedTemplate === template.id && (
                  <Check className="h-5 w-5 text-primary" />
                )}
              </CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardFooter className="p-4 pt-2">
              <Button 
                variant={selectedTemplate === template.id ? "default" : "outline"}
                className="w-full"
                onClick={() => onChange(template.id)}
              >
                {selectedTemplate === template.id ? "Selected" : "Select"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-medium mb-2">Template Tips</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>All templates are ATS-friendly and will pass through applicant tracking systems</li>
          <li>Choose a template that matches your industry and target positions</li>
          <li>You can change templates at any time without losing your content</li>
          <li>Preview how your CV will look before downloading the final PDF</li>
        </ul>
      </div>
    </div>
  );
}
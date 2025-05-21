"use client";

import { Skill, Language } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";
import { useState } from "react";

interface SkillsFormProps {
  skillsList: Skill[];
  languages: Language[];
  summary: string;
  onChange: (data: { skills: Skill[], languages: Language[], summary: string }) => void;
}

export function SkillsForm({ skillsList, languages, summary, onChange }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState<Skill["level"]>("intermediate");
  
  const [newLanguage, setNewLanguage] = useState("");
  const [newLanguageLevel, setNewLanguageLevel] = useState<Language["level"]>("fluent");
  
  const handleAddSkill = () => {
    if (newSkill.trim() === "") return;
    
    const skill: Skill = {
      name: newSkill.trim(),
      level: newSkillLevel,
    };
    
    onChange({
      skills: [...skillsList, skill],
      languages,
      summary,
    });
    
    setNewSkill("");
  };
  
  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...skillsList];
    updatedSkills.splice(index, 1);
    
    onChange({
      skills: updatedSkills,
      languages,
      summary,
    });
  };
  
  const handleAddLanguage = () => {
    if (newLanguage.trim() === "") return;
    
    const language: Language = {
      name: newLanguage.trim(),
      level: newLanguageLevel,
    };
    
    onChange({
      skills: skillsList,
      languages: [...languages, language],
      summary,
    });
    
    setNewLanguage("");
  };
  
  const handleRemoveLanguage = (index: number) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    
    onChange({
      skills: skillsList,
      languages: updatedLanguages,
      summary,
    });
  };
  
  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({
      skills: skillsList,
      languages,
      summary: e.target.value,
    });
  };
  
  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "beginner":
        return "outline";
      case "intermediate":
        return "secondary";
      case "advanced":
        return "default";
      case "expert":
        return "destructive";
      default:
        return "outline";
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="skills">Technical Skills</Label>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skillsList.map((skill, index) => (
            <Badge 
              key={index} 
              variant={getBadgeVariant(skill.level)}
              className="pl-2 pr-1 py-1.5 flex items-center gap-1"
            >
              {skill.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent"
                onClick={() => handleRemoveSkill(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill (e.g., React, Python, Project Management)"
            className="flex-1"
          />
          
          <Select 
            value={newSkillLevel} 
            onValueChange={(value: Skill["level"]) => setNewSkillLevel(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Skill Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
          
          <Button type="button" onClick={handleAddSkill}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="languages">Languages</Label>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((language, index) => (
            <Badge 
              key={index} 
              variant={getBadgeVariant(language.level === "native" ? "expert" : language.level === "fluent" ? "advanced" : "intermediate")}
              className="pl-2 pr-1 py-1.5 flex items-center gap-1"
            >
              {language.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent"
                onClick={() => handleRemoveLanguage(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input
            id="newLanguage"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            placeholder="Add a language (e.g., English, Spanish, French)"
            className="flex-1"
          />
          
          <Select 
            value={newLanguageLevel} 
            onValueChange={(value: Language["level"]) => setNewLanguageLevel(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Proficiency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="native">Native</SelectItem>
              <SelectItem value="fluent">Fluent</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="basic">Basic</SelectItem>
            </SelectContent>
          </Select>
          
          <Button type="button" onClick={handleAddLanguage}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={summary}
          onChange={handleSummaryChange}
          placeholder="A brief summary of your professional experience, major achievements, and career goals..."
          rows={5}
        />
        <p className="text-xs text-muted-foreground mt-1">
          This will appear at the top of your CV, so make it compelling and highlights your most impressive achievements.
        </p>
      </div>
    </div>
  );
}
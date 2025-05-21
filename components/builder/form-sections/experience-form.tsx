"use client";

import { useState } from "react";
import { Experience } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash, Pencil } from "lucide-react";

interface ExperienceFormProps {
  experienceList: Experience[];
  onChange: (experience: Experience[]) => void;
}

export function ExperienceForm({ experienceList, onChange }: ExperienceFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Experience>({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    achievements: [""],
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleAchievementChange = (index: number, value: string) => {
    const updatedAchievements = [...formData.achievements];
    updatedAchievements[index] = value;
    setFormData({ ...formData, achievements: updatedAchievements });
  };
  
  const handleAddAchievement = () => {
    setFormData({ ...formData, achievements: [...formData.achievements, ""] });
  };
  
  const handleRemoveAchievement = (index: number) => {
    const updatedAchievements = [...formData.achievements];
    updatedAchievements.splice(index, 1);
    setFormData({ ...formData, achievements: updatedAchievements });
  };
  
  const handleAdd = () => {
    setIsEditing(true);
    setCurrentIndex(null);
    setFormData({
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      achievements: [""],
    });
  };
  
  const handleEdit = (index: number) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setFormData(experienceList[index]);
  };
  
  const handleDelete = (index: number) => {
    const updatedList = [...experienceList];
    updatedList.splice(index, 1);
    onChange(updatedList);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out empty achievements
    const cleanedData = {
      ...formData,
      achievements: formData.achievements.filter(a => a.trim() !== ""),
    };
    
    if (currentIndex !== null) {
      // Edit existing item
      const updatedList = [...experienceList];
      updatedList[currentIndex] = cleanedData;
      onChange(updatedList);
    } else {
      // Add new item
      onChange([...experienceList, cleanedData]);
    }
    
    setIsEditing(false);
    setCurrentIndex(null);
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    setCurrentIndex(null);
  };
  
  return (
    <div>
      {!isEditing ? (
        <div className="space-y-4">
          {experienceList.length > 0 ? (
            <div className="space-y-4">
              {experienceList.map((experience, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{experience.position} at {experience.company}</CardTitle>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => handleEdit(index)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => handleDelete(index)}
                        >
                          <Trash className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate || "Present"} | {experience.location}
                    </p>
                    {experience.description && (
                      <p className="text-sm mt-2">{experience.description}</p>
                    )}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <ul className="list-disc list-inside text-sm mt-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 border rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-4">No experience entries yet</p>
              <Button onClick={handleAdd}>
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            </div>
          )}
          
          {experienceList.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button onClick={handleAdd}>
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Google"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Senior Software Engineer"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Mountain View, CA"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="Jan 2020"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                placeholder="Dec 2022 (or leave blank for current)"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of your role and responsibilities"
              rows={2}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Key Achievements</Label>
            {formData.achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={achievement}
                  onChange={(e) => handleAchievementChange(index, e.target.value)}
                  placeholder="Increased conversion rate by 25% through UI optimization"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveAchievement(index)}
                  disabled={formData.achievements.length === 1}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAddAchievement}
              className="w-full mt-2"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Achievement
            </Button>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {currentIndex !== null ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
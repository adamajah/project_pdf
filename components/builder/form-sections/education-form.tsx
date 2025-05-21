"use client";

import { useState } from "react";
import { Education } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash, Pencil } from "lucide-react";

interface EducationFormProps {
  educationList: Education[];
  onChange: (education: Education[]) => void;
}

export function EducationForm({ educationList, onChange }: EducationFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Education>({
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleAdd = () => {
    setIsEditing(true);
    setCurrentIndex(null);
    setFormData({
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };
  
  const handleEdit = (index: number) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setFormData(educationList[index]);
  };
  
  const handleDelete = (index: number) => {
    const updatedList = [...educationList];
    updatedList.splice(index, 1);
    onChange(updatedList);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentIndex !== null) {
      // Edit existing item
      const updatedList = [...educationList];
      updatedList[currentIndex] = formData;
      onChange(updatedList);
    } else {
      // Add new item
      onChange([...educationList, formData]);
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
          {educationList.length > 0 ? (
            <div className="space-y-4">
              {educationList.map((education, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{education.institution}</CardTitle>
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
                    <p className="font-medium">{education.degree} in {education.field}</p>
                    <p className="text-sm text-muted-foreground">
                      {education.startDate} - {education.endDate || "Present"}
                    </p>
                    {education.description && (
                      <p className="text-sm mt-2">{education.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 border rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-4">No education entries yet</p>
              <Button onClick={handleAdd}>
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </div>
          )}
          
          {educationList.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button onClick={handleAdd}>
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              placeholder="Harvard University"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                placeholder="Bachelor of Science"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Input
                id="field"
                name="field"
                value={formData.field}
                onChange={handleInputChange}
                placeholder="Computer Science"
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
                placeholder="Cambridge, MA"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="Sep 2018"
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
                placeholder="Jun 2022 (or leave blank for current)"
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
              placeholder="GPA, achievements, notable projects, etc."
              rows={3}
            />
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
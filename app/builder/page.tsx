"use client";

import { useState } from 'react';
import { BuilderNavbar } from '@/components/builder/builder-navbar';
import { CVForm } from '@/components/builder/cv-form';
import { CVPreview } from '@/components/builder/cv-preview';
import { CVFormData } from '@/lib/types';
import { defaultCVData } from '@/lib/constants';
import { CVTemplate } from '@/lib/types';

export default function Builder() {
  const [formData, setFormData] = useState<CVFormData>(defaultCVData);
  const [selectedTemplate, setSelectedTemplate] = useState<CVTemplate>('minimal');
  
  return (
    <div className="min-h-screen bg-background">
      <BuilderNavbar formData={formData} template={selectedTemplate} />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <CVForm 
            formData={formData} 
            setFormData={setFormData} 
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </div>
        <div className="w-full lg:w-1/2 sticky top-20 h-[calc(100vh-10rem)]">
          <CVPreview 
            formData={formData} 
            template={selectedTemplate} 
          />
        </div>
      </div>
    </div>
  );
}
"use client";

import { CVFormData, CVTemplate } from "@/lib/types";
import { MinimalTemplate } from "@/components/templates/minimal-template";
import { ProfessionalTemplate } from "@/components/templates/professional-template";
import { CreativeTemplate } from "@/components/templates/creative-template";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { generatePDF } from "@/lib/pdf-generator";

interface CVPreviewProps {
  formData: CVFormData;
  template: CVTemplate;
}

export function CVPreview({ formData, template }: CVPreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case "minimal":
        return <MinimalTemplate data={formData} />;
      case "professional":
        return <ProfessionalTemplate data={formData} />;
      case "creative":
        return <CreativeTemplate data={formData} />;
      default:
        return <MinimalTemplate data={formData} />;
    }
  };

  const handleDownload = () => {
    const filename = `${formData.personalInfo.fullName.replace(/\s+/g, "_")}_CV.pdf`;
    generatePDF("cv-preview", filename);
  };

  return (
    <div className="bg-card rounded-xl border shadow-sm flex flex-col h-full">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-medium">Preview</h3>
        <Button size="sm" onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
      <div className="overflow-auto flex-1 p-4 bg-muted/30">
        <div
          id="cv-preview"
          className="bg-white mx-auto shadow-md transition-all duration-300"
          style={{
            width: "210mm",
            height: "297mm",
            transform: "scale(0.7)",
            transformOrigin: "top center",
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}

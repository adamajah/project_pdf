"use client";

import { CVFormData } from "@/lib/types";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe 
} from "lucide-react";

interface MinimalTemplateProps {
  data: CVFormData;
}

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  return (
    <div className="min-h-full min-w-full p-8 text-black bg-white">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1">{data.personalInfo.fullName}</h1>
        <h2 className="text-xl font-medium text-gray-600 mb-4">{data.personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          
          {data.personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          
          {data.personalInfo.website && (
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" />
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>
      
      {data.summary && (
        <section className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Professional Summary</h3>
          <p className="text-sm text-gray-800">{data.summary}</p>
        </section>
      )}
      
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h3>
          
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{exp.position}</h4>
                    <div className="text-sm text-gray-600">{exp.company}</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </div>
                </div>
                
                {exp.description && (
                  <p className="text-sm mt-1 text-gray-800">{exp.description}</p>
                )}
                
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="text-sm mt-2 list-disc list-inside">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-800">{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {data.education.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Education</h3>
          
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{edu.degree} in {edu.field}</h4>
                    <div className="text-sm text-gray-600">{edu.institution}</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </div>
                </div>
                
                {edu.description && (
                  <p className="text-sm mt-1 text-gray-800">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      
      <div className="flex gap-6">
        {data.skills.length > 0 && (
          <section className="mb-6 flex-1">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h3>
            
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-sm px-2 py-1 rounded bg-gray-100 text-gray-800"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}
        
        {data.languages.length > 0 && (
          <section className="mb-6 flex-1">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Languages</h3>
            
            <ul className="space-y-1 text-sm">
              {data.languages.map((language, index) => (
                <li key={index} className="flex justify-between">
                  <span>{language.name}</span>
                  <span className="text-gray-600 capitalize">{language.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      
      {data.personalInfo.objective && (
        <section>
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Career Objective</h3>
          <p className="text-sm text-gray-800">{data.personalInfo.objective}</p>
        </section>
      )}
    </div>
  );
}
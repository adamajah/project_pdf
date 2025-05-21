"use client";

import { CVFormData } from "@/lib/types";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Calendar,
  Briefcase,
  GraduationCap,
  Languages,
  Wrench
} from "lucide-react";

interface ProfessionalTemplateProps {
  data: CVFormData;
}

export function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  return (
    <div className="min-h-full min-w-full bg-white text-black flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-blue-900 text-white p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-1">{data.personalInfo.fullName}</h1>
          <h2 className="text-lg text-blue-200">{data.personalInfo.jobTitle}</h2>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Contact</h3>
          
          <div className="space-y-3 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-300" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            
            {data.personalInfo.phone && (
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-300" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            
            {data.personalInfo.location && (
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            
            {data.personalInfo.website && (
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-blue-300" />
                <span>{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
        
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700 flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Skills
            </h3>
            
            <div className="space-y-3">
              {data.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="capitalize text-blue-300">{skill.level}</span>
                  </div>
                  <div className="w-full bg-blue-700 rounded-full h-1.5">
                    <div 
                      className="bg-blue-300 h-1.5 rounded-full" 
                      style={{ 
                        width: skill.level === "beginner" ? "25%" : 
                               skill.level === "intermediate" ? "50%" : 
                               skill.level === "advanced" ? "75%" : "100%" 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {data.languages.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700 flex items-center gap-2">
              <Languages className="h-4 w-4" />
              Languages
            </h3>
            
            <div className="space-y-3">
              {data.languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{language.name}</span>
                    <span className="capitalize text-blue-300">{language.level}</span>
                  </div>
                  <div className="w-full bg-blue-700 rounded-full h-1.5">
                    <div 
                      className="bg-blue-300 h-1.5 rounded-full" 
                      style={{ 
                        width: language.level === "basic" ? "25%" : 
                               language.level === "intermediate" ? "50%" : 
                               language.level === "fluent" ? "75%" : "100%" 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {data.personalInfo.objective && (
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">Objective</h3>
            <p className="text-sm">{data.personalInfo.objective}</p>
          </div>
        )}
      </div>
      
      {/* Main Content */}
      <div className="w-2/3 p-8">
        {data.summary && (
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Professional Summary</h3>
            <p className="text-sm text-gray-800">{data.summary}</p>
          </section>
        )}
        
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
                  
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900">{exp.position}</h4>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.startDate} - {exp.endDate || "Present"}
                    </div>
                  </div>
                  
                  <div className="text-sm font-medium text-blue-900 mb-2">
                    {exp.company}, {exp.location}
                  </div>
                  
                  {exp.description && (
                    <p className="text-sm mb-2 text-gray-700">{exp.description}</p>
                  )}
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {data.education.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </h3>
            
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
                  
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900">{edu.degree} in {edu.field}</h4>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.startDate} - {edu.endDate || "Present"}
                    </div>
                  </div>
                  
                  <div className="text-sm font-medium text-blue-900 mb-2">
                    {edu.institution}, {edu.location}
                  </div>
                  
                  {edu.description && (
                    <p className="text-sm text-gray-700">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
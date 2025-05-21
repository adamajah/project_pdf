"use client";

import { CVFormData } from "@/lib/types";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  User,
  Book,
  Award
} from "lucide-react";

interface CreativeTemplateProps {
  data: CVFormData;
}

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  return (
    <div className="min-h-full min-w-full bg-white text-black">
      {/* Header */}
      <div className="bg-orange-500 p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">{data.personalInfo.fullName}</h1>
          <h2 className="text-xl mt-2">{data.personalInfo.jobTitle}</h2>
          
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            
            {data.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            
            {data.personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Summary */}
      {data.summary && (
        <div className="bg-orange-50 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-full text-white">
                <User className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-orange-900">About Me</h3>
            </div>
            <p className="text-gray-700">{data.summary}</p>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="md:col-span-2">
              {data.experience.length > 0 && (
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-500 p-2 rounded-full text-white">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-900">Experience</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {data.experience.map((exp, index) => (
                      <div key={index} className="pl-5 border-l-2 border-orange-200">
                        <h4 className="text-lg font-bold text-gray-800">{exp.position}</h4>
                        <div className="text-orange-500 font-medium mb-2">{exp.company}</div>
                        <div className="text-sm text-gray-600 mb-3">
                          {exp.startDate} - {exp.endDate || "Present"} | {exp.location}
                        </div>
                        
                        {exp.description && (
                          <p className="text-gray-700 mb-2">{exp.description}</p>
                        )}
                        
                        {exp.achievements && exp.achievements.length > 0 && (
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
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
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-500 p-2 rounded-full text-white">
                      <Book className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-900">Education</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {data.education.map((edu, index) => (
                      <div key={index} className="pl-5 border-l-2 border-orange-200">
                        <h4 className="text-lg font-bold text-gray-800">{edu.degree} in {edu.field}</h4>
                        <div className="text-orange-500 font-medium mb-2">{edu.institution}</div>
                        <div className="text-sm text-gray-600 mb-3">
                          {edu.startDate} - {edu.endDate || "Present"} | {edu.location}
                        </div>
                        
                        {edu.description && (
                          <p className="text-gray-700">{edu.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
            
            {/* Skills & Languages */}
            <div>
              {data.skills.length > 0 && (
                <div className="mb-8 bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-900 mb-4">Skills</h3>
                  
                  <div className="space-y-4">
                    {data.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="capitalize text-orange-600">{skill.level}</span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full" 
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
                <div className="mb-8 bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-900 mb-4">Languages</h3>
                  
                  <div className="space-y-4">
                    {data.languages.map((language, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-800">{language.name}</span>
                          <span className="capitalize text-orange-600">{language.level}</span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full" 
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
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-900 mb-4">Career Objective</h3>
                  <p className="text-gray-700">{data.personalInfo.objective}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
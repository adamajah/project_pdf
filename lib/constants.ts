import { CVFormData } from './types';

export const defaultCVData: CVFormData = {
  personalInfo: {
    fullName: "John Doe",
    jobTitle: "Software Engineer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    location: "New York, NY",
    website: "linkedin.com/in/johndoe",
    objective: "Passionate software engineer with 5 years of experience seeking to leverage technical skills in a challenging role."
  },
  summary: "Innovative software engineer with 5 years of experience developing web applications using JavaScript, React, and Node.js. Proven track record of delivering high-quality, scalable solutions for enterprise clients.",
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Boston, MA",
      startDate: "Sep 2015",
      endDate: "Jun 2019",
      description: "Graduated with honors. Specialized in web development and algorithms."
    }
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      location: "New York, NY",
      startDate: "Jan 2021",
      endDate: "",
      description: "Lead developer for customer-facing web applications.",
      achievements: [
        "Reduced page load time by 40% through code optimization and caching strategies",
        "Implemented CI/CD pipeline that reduced deployment time by 60%",
        "Mentored junior developers and led technical training sessions"
      ]
    },
    {
      company: "Digital Innovations",
      position: "Software Engineer",
      location: "Boston, MA",
      startDate: "Jul 2019",
      endDate: "Dec 2020",
      description: "Developed and maintained enterprise web applications.",
      achievements: [
        "Created responsive UI components using React and Tailwind CSS",
        "Integrated third-party APIs to enhance application functionality",
        "Participated in code reviews and contributed to technical documentation"
      ]
    }
  ],
  skills: [
    { name: "JavaScript", level: "expert" },
    { name: "React", level: "advanced" },
    { name: "Node.js", level: "advanced" },
    { name: "TypeScript", level: "intermediate" },
    { name: "HTML/CSS", level: "expert" },
    { name: "Git", level: "advanced" },
    { name: "REST APIs", level: "advanced" },
    { name: "SQL", level: "intermediate" }
  ],
  languages: [
    { name: "English", level: "native" },
    { name: "Spanish", level: "intermediate" },
    { name: "French", level: "basic" }
  ]
};
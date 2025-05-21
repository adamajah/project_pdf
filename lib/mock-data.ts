import { ReviewData } from './types';

export const mockReviewData: ReviewData = {
  cvTitle: "Software Developer Resume",
  summary: "Your CV demonstrates strong technical skills and professional experience, but could benefit from more specific achievements and quantifiable results. Overall, it's a solid foundation that needs some refinement to maximize impact.",
  items: [
    {
      section: "summary",
      title: "Professional summary lacks specificity",
      description: "Your professional summary is too generic and doesn't highlight what makes you unique as a candidate.",
      severity: "medium",
      suggestion: "Include specific achievements, specializations, or unique value propositions that set you apart.",
      example: "Results-driven software engineer with 5+ years of experience specializing in high-performance web applications that have increased client revenue by 30%. Expert in React ecosystem with a track record of reducing application load times by 40%."
    },
    {
      section: "experience",
      title: "Strong technical role descriptions",
      description: "Your job descriptions clearly outline your responsibilities and technical environment.",
      severity: "positive"
    },
    {
      section: "experience",
      title: "Missing quantifiable achievements",
      description: "Most of your experience bullets describe what you did, but not the impact or results of your work.",
      severity: "high",
      suggestion: "Add metrics, percentages, or specific outcomes to your achievements.",
      example: "Instead of 'Implemented CI/CD pipeline', try 'Implemented CI/CD pipeline that reduced deployment time by 60% and decreased production bugs by 25%'."
    },
    {
      section: "skills",
      title: "Well-organized technical skills",
      description: "Your skills section clearly shows your technical capabilities with appropriate proficiency levels.",
      severity: "positive"
    },
    {
      section: "education",
      title: "Education details could be enhanced",
      description: "Your education section is basic and missing relevant coursework or academic achievements.",
      severity: "low",
      suggestion: "Add relevant coursework, projects, or academic honors that relate to your target position."
    },
    {
      section: "overall",
      title: "ATS optimization needed",
      description: "Your CV may not pass through Applicant Tracking Systems effectively due to missing key keywords.",
      severity: "medium",
      suggestion: "Analyze job descriptions for your target roles and incorporate those keywords naturally throughout your CV."
    },
    {
      section: "language",
      title: "Minor grammatical issues",
      description: "There are a few grammatical errors and inconsistent tense usage throughout the document.",
      severity: "low",
      suggestion: "Use past tense for previous roles and present tense for current positions consistently."
    }
  ],
  suggestions: [
    {
      title: "Enhanced Professional Summary",
      text: "Results-driven software engineer with 5+ years of experience specializing in high-performance web applications. Expert in React, Node.js, and TypeScript with a proven track record of reducing load times by 40% and implementing scalable solutions that increased client revenue by 30%."
    },
    {
      title: "Quantified Achievement Example",
      text: "Architected and implemented a CI/CD pipeline using GitHub Actions and Docker that reduced deployment time by 60%, decreased production bugs by 25%, and enabled the team to increase release frequency from monthly to weekly."
    },
    {
      title: "Enhanced Education Description",
      text: "Bachelor of Science in Computer Science, University of Technology, 2019. Graduated with honors (3.8 GPA). Relevant coursework: Advanced Algorithms, Web Development, Database Systems, and Software Engineering. Capstone project: Developed a real-time collaborative code editor with WebSockets."
    },
    {
      title: "ATS-Optimized Skills Section",
      text: "Technical Skills: JavaScript (ES6+), React.js, Redux, Node.js, Express, TypeScript, RESTful APIs, GraphQL, Jest, React Testing Library, CI/CD, Docker, AWS, Git, Agile/Scrum methodology, SQL, NoSQL"
    }
  ],
  score: {
    overall: 72,
    content: 68,
    formatting: 85,
    language: 78
  }
};
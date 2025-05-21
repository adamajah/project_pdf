import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Eye, 
  Download, 
  Award,
  CheckCircle, 
  Sparkles, 
  MessageSquare,
  History
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Intuitive CV Builder",
      description: "Easy-to-use form with all essential sections for a comprehensive CV. Build your resume with real-time preview."
    },
    {
      icon: <Eye className="h-12 w-12 text-primary" />,
      title: "Modern Templates",
      description: "Choose from minimalist, professional, or creative designs that are ATS-friendly and optimized for recruiters."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "AI-Powered Review",
      description: "Get instant feedback on grammar, phrasing, and content strength with suggestions for improvement."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Grammar Check",
      description: "Automatically detect and correct grammar issues, ensuring your CV is error-free and professional."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Interview Simulation",
      description: "Practice common interview questions related to your target position with AI-evaluated responses."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "ATS Optimization",
      description: "Ensure your CV passes through Applicant Tracking Systems with our optimized templates and keyword suggestions."
    },
    {
      icon: <History className="h-12 w-12 text-primary" />,
      title: "Save & Edit",
      description: "Create an account to save your CVs and access them anytime for editing or creating new versions."
    },
    {
      icon: <Download className="h-12 w-12 text-primary" />,
      title: "Export & Share",
      description: "Download your CV as a PDF or share a link directly with recruiters and hiring managers."
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Create the perfect CV with powerful features</h2>
          <p className="text-muted-foreground">
            KentCV comes packed with all the tools you need to create a professional, attention-grabbing resume
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
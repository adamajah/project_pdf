import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "KentCV helped me land my dream job! The AI review feature pointed out weaknesses in my resume that I never would have caught myself.",
      author: "Sarah Johnson",
      role: "UX Designer",
      avatar: "SJ"
    },
    {
      quote: "As a hiring manager, I can immediately tell when candidates have used KentCV. Their resumes are clean, professional, and highlight the right skills.",
      author: "Michael Chen",
      role: "Technical Recruiter",
      avatar: "MC"
    },
    {
      quote: "The instant feedback on my CV was incredibly valuable. I was able to make improvements and submit my application the same day I found the job listing.",
      author: "Thomas Wright",
      role: "Software Engineer",
      avatar: "TW"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What our users say</h2>
          <p className="text-muted-foreground">
            Thousands of job seekers have found success using KentCV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardHeader className="pb-0">
                <Quote className="h-8 w-8 text-primary opacity-40" />
              </CardHeader>
              <CardContent className="pt-4">
                <blockquote className="mb-6 text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Sparkles, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="container relative px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            <span>AI-Powered CV Builder with Instant Feedback</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Create stunning resumes that get noticed
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            KentCV helps you build professional resumes with AI review and instant feedback. Create, customize, and download your CV in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/builder">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Create your CV
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#templates">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View templates
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-16 bottom-0 top-auto"></div>
          <img
            src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="KentCV Interface"
            className="w-full h-auto"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-12">
          <div className="flex items-center">
            <FileCheck className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm">ATS-Friendly Templates</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm">AI-Powered Review</span>
          </div>
          <div className="flex items-center">
            <Download className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm">Instant PDF Download</span>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Suggestion } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ReviewSidebarProps {
  suggestions: Suggestion[];
  score: {
    overall: number;
    content: number;
    formatting: number;
    language: number;
  };
}

export function ReviewSidebar({ suggestions, score }: ReviewSidebarProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();
  
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
    
    toast({
      title: "Copied to clipboard",
      description: "You can now paste this suggestion into your CV",
    });
  };
  
  const getScoreColor = (value: number) => {
    if (value >= 80) return "text-chart-2";
    if (value >= 60) return "text-chart-4";
    return "text-destructive";
  };
  
  const getProgressColor = (value: number) => {
    if (value >= 80) return "bg-chart-2";
    if (value >= 60) return "bg-chart-4";
    return "bg-destructive";
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Score Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Overall</span>
                <span className={cn("text-sm font-medium", getScoreColor(score.overall))}>
                  {score.overall}/100
                </span>
              </div>
              <Progress value={score.overall} className={cn("h-2", getProgressColor(score.overall))} />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Content Quality</span>
                <span className={cn("text-sm", getScoreColor(score.content))}>
                  {score.content}/100
                </span>
              </div>
              <Progress value={score.content} className={cn("h-1.5", getProgressColor(score.content))} />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Format & Structure</span>
                <span className={cn("text-sm", getScoreColor(score.formatting))}>
                  {score.formatting}/100
                </span>
              </div>
              <Progress value={score.formatting} className={cn("h-1.5", getProgressColor(score.formatting))} />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Language & Grammar</span>
                <span className={cn("text-sm", getScoreColor(score.language))}>
                  {score.language}/100
                </span>
              </div>
              <Progress value={score.language} className={cn("h-1.5", getProgressColor(score.language))} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Bot className="h-5 w-5 mr-2 text-primary" />
            AI Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="space-y-2 pb-4 border-b last:border-0 last:pb-0">
                <div className="font-medium">{suggestion.title}</div>
                <p className="text-sm text-muted-foreground">{suggestion.text}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => handleCopy(suggestion.text, index)}
                >
                  {copiedIndex === index ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 mr-1 text-chart-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy suggestion
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Button className="w-full" variant="default">
        <Bot className="mr-2 h-4 w-4" />
        Request More Detailed Review
      </Button>
    </div>
  );
}
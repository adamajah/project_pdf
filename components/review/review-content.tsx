"use client";

import { ReviewData, ReviewItem } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface ReviewContentProps {
  reviewData: ReviewData;
}

export function ReviewContent({ reviewData }: ReviewContentProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <XCircle className="h-5 w-5 text-destructive" />;
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-chart-4" />;
      case "low":
        return <InfoIcon className="h-5 w-5 text-muted-foreground" />;
      case "positive":
        return <CheckCircle className="h-5 w-5 text-chart-2" />;
      default:
        return <InfoIcon className="h-5 w-5" />;
    }
  };
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-chart-4";
      case "low":
        return "text-muted-foreground";
      case "positive":
        return "text-chart-2";
      default:
        return "";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High Priority</Badge>;
      case "medium":
        return <Badge variant="outline" className="border-chart-4 text-chart-4">Medium Priority</Badge>;
      case "low":
        return <Badge variant="outline">Low Priority</Badge>;
      case "positive":
        return <Badge variant="outline" className="border-chart-2 text-chart-2">Strength</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">CV Review Results</h1>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <InfoIcon className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-medium">Review Summary</h2>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{reviewData.summary}</p>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Detailed Feedback</h2>
        
        {/* Group review items by section */}
        {Object.entries(
          reviewData.items.reduce<Record<string, ReviewItem[]>>((acc, item) => {
            if (!acc[item.section]) {
              acc[item.section] = [];
            }
            acc[item.section].push(item);
            return acc;
          }, {})
        ).map(([section, items]) => (
          <div key={section} className="space-y-3">
            <h3 className="text-lg font-medium capitalize">{section}</h3>
            
            {items.map((item, index) => (
              <Alert key={index} variant="outline" className="border-l-4" style={{
                borderLeftColor: item.severity === "high" ? "hsl(var(--destructive))" :
                                item.severity === "medium" ? "hsl(var(--chart-4))" :
                                item.severity === "positive" ? "hsl(var(--chart-2))" :
                                "hsl(var(--muted))"
              }}>
                <div className="flex items-start gap-2">
                  {getSeverityIcon(item.severity)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <AlertTitle className={getSeverityColor(item.severity)}>
                        {item.title}
                      </AlertTitle>
                      {getSeverityBadge(item.severity)}
                    </div>
                    <AlertDescription className="mt-2">
                      {item.description}
                    </AlertDescription>
                    {item.suggestion && (
                      <div className="mt-2 text-sm">
                        <strong>Suggestion:</strong> {item.suggestion}
                      </div>
                    )}
                    {item.example && (
                      <div className="mt-1 p-2 bg-muted rounded text-sm">
                        <strong>Example:</strong> {item.example}
                      </div>
                    )}
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
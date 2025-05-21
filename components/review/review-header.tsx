"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Download, Edit } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ReviewHeaderProps {
  cvTitle?: string;
  isLoading?: boolean;
}

export function ReviewHeader({ cvTitle, isLoading = false }: ReviewHeaderProps) {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">KentCV</span>
          </Link>
          
          {isLoading ? (
            <Skeleton className="h-4 w-40 ml-4" />
          ) : (
            cvTitle && (
              <span className="ml-4 text-muted-foreground">
                AI Review for <span className="font-medium text-foreground">{cvTitle}</span>
              </span>
            )
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          
          {!isLoading && (
            <>
              <Link href="/builder">
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit CV
                </Button>
              </Link>
              
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
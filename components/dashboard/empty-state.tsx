"use client";

import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onCreateNew: () => void;
}

export function EmptyState({ onCreateNew }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 border rounded-lg bg-muted/30">
      <div className="bg-primary/10 p-3 rounded-full mb-4">
        <FileText className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-xl font-semibold mb-2">No CVs yet</h2>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        You haven't created any CVs yet. Get started by creating your first professional resume.
      </p>
      <Button onClick={onCreateNew}>
        <Plus className="mr-2 h-4 w-4" />
        Create Your First CV
      </Button>
    </div>
  );
}
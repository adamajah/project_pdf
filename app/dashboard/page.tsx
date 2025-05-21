"use client";

import { useState, useEffect } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { CVList } from '@/components/dashboard/cv-list';
import { EmptyState } from '@/components/dashboard/empty-state';
import { CVCard } from '@/components/dashboard/cv-card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { PlusCircle } from 'lucide-react';

// Normally, we would fetch this data from the API
const mockCVs = [
  { id: '1', title: 'Software Developer CV', createdAt: new Date(), template: 'minimal' },
  { id: '2', title: 'UX Designer Resume', createdAt: new Date(), template: 'professional' },
];

export default function Dashboard() {
  const [cvs, setCvs] = useState(mockCVs);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();
  
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleCreateNew = () => {
    router.push('/builder');
  };
  
  const handleDelete = (id: string) => {
    setCvs(cvs.filter(cv => cv.id !== id));
    toast({
      title: "CV deleted",
      description: "Your CV has been successfully deleted",
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your CVs</h1>
          <Button onClick={handleCreateNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-muted rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : cvs.length > 0 ? (
          <CVList>
            {cvs.map((cv) => (
              <CVCard 
                key={cv.id}
                cv={cv}
                onDelete={() => handleDelete(cv.id)}
              />
            ))}
          </CVList>
        ) : (
          <EmptyState onCreateNew={handleCreateNew} />
        )}
      </main>
    </div>
  );
}
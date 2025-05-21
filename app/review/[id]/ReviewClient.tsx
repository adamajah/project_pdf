"use client";

import { useState, useEffect } from 'react';
import { ReviewHeader } from '@/components/review/review-header';
import { ReviewContent } from '@/components/review/review-content';
import { ReviewSidebar } from '@/components/review/review-sidebar';
import { mockReviewData } from '@/lib/mock-data';
import { ReviewData } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function ReviewClient({ id }: { id: string }) {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReviewData(mockReviewData);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <ReviewHeader isLoading={true} />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <Skeleton className="w-full h-12 mb-4" />
              <Skeleton className="w-full h-[600px]" />
            </div>
            <div className="w-full lg:w-1/3">
              <Skeleton className="w-full h-12 mb-4" />
              <Skeleton className="w-full h-[400px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!reviewData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Review not found</h1>
          <p className="text-muted-foreground mb-4">
            The review you're looking for doesn't exist or has been deleted.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ReviewHeader cvTitle={reviewData.cvTitle} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <ReviewContent reviewData={reviewData} />
          </div>
          <div className="w-full lg:w-1/3">
            <ReviewSidebar
              suggestions={reviewData.suggestions}
              score={reviewData.score}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

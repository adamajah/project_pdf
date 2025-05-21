"use client";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Edit, 
  Trash,
  Copy, 
  FileText,
  MoreVertical
} from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CVCardProps {
  cv: {
    id: string;
    title: string;
    createdAt: Date;
    template: string;
  };
  onDelete: () => void;
}

export function CVCard({ cv, onDelete }: CVCardProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  const timeAgo = formatDistanceToNow(cv.createdAt, { addSuffix: true });
  
  const handleEdit = () => {
    router.push(`/builder?id=${cv.id}`);
  };
  
  const handleDuplicate = () => {
    toast({
      title: "CV duplicated",
      description: "A copy of your CV has been created."
    });
  };
  
  const handleViewReview = () => {
    router.push(`/review/${cv.id}`);
  };
  
  return (
    <Card className="overflow-hidden">
      <div className="h-40 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <FileText className="h-16 w-16 text-muted-foreground/30" />
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{cv.title}</CardTitle>
            <CardDescription>Created {timeAgo}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleEdit}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDuplicate}>
                <Copy className="mr-2 h-4 w-4" />
                <span>Duplicate</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleViewReview}>
                <FileText className="mr-2 h-4 w-4" />
                <span>View Review</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={onDelete}
                className="text-destructive focus:text-destructive"
              >
                <Trash className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center text-xs text-muted-foreground">
          <span className="capitalize">{cv.template} Template</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="flex-1" onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
        <Button className="flex-1" onClick={handleViewReview}>
          View Review
        </Button>
      </CardFooter>
    </Card>
  );
}
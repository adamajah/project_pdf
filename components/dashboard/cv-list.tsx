"use client";

import { ReactNode } from "react";

interface CVListProps {
  children: ReactNode;
}

export function CVList({ children }: CVListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
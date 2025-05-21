import ReviewClient from './ReviewClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

// Server Component, tanpa "use client"
export default function ReviewPage({ params }: { params: { id: string } }) {
  // Render komponen client yang mengandung semua logic client-side
  return <ReviewClient id={params.id} />;
}

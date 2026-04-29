import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';
import { fetchNoteById } from '@/lib/api';

interface NoteDetailsPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({params}: NoteDetailsPageProps  ) =>{
  const { id } = await params

  const note  = await fetchNoteById(id)
  return {
    title : `Note ${note.title}`, 
    description:  `${note.content}`,
    openGraph:{
       title : `Note ${note.title}`, 
    description:  `${note.content}`,
    siteName: "Note-Hub",
    url: process.env.APP_URL
  }
  }
}

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

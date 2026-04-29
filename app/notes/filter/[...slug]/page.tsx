import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';


type Props ={
  params : Promise<{ slug: string[] }>
}

export const generateMetadata = async ({params}: Props  ) =>{
  const { slug } = await params
  return {
    title : `Note ${slug}`, 
    description: 'Nates fillter by name categories',
    openGraph:{
    title : `Note ${slug}`, 
    description: 'Nates fillter by name categories',
    siteName: "Note-Hub",
    url: process.env.APP_URL
  }
  }
}

export default async function NotesPage({ params }: Props ) {
  const queryClient = new QueryClient();

  const { slug } = await params;

  const tag = slug[0];

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => getNotes(1, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}

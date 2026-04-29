'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import css from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Not-found",
  description: "Sorry but this page not-found? plese try again",
      openGraph:{
    title: "Note-Hub title",
    description: "Welcome to Note-Hub title",
    siteName: "Note-Hub",
    url: process.env.APP_URL
  }
}

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      router.push('/');
      return;
    }
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.desc}>Sorry, the page you are looking for does not exist.</p>

      <Link href="/" className={css.link}>Go back home</Link>

      <p className={css.countdown}>
        Redirecting in <strong>{seconds}</strong> second{seconds !== 1 ? 's' : ''}…
      </p>
    </div>
  );
}
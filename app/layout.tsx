import type { Metadata } from 'next';
import { Roboto} from 'next/font/google';
import './global.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '../components/TanStackProvider/TanStackProvider';


const rodotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",

})


export const metadata: Metadata = {
  title: 'Title page',
  description: 'Nates website',
    openGraph:{
    title: "Note-Hub title",
    description: "Welcome to Note-Hub title",
    siteName: "Note-Hub",
    url: process.env.APP_URL
  }
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rodotoFont.variable}>
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

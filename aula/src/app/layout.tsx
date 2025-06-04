
import "./globals.css";
import {Header} from '../components/header/page';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aula Next JS do zero',
  description: 'Apredendo Next JS do zero com Sujeito Progrmador!',
  openGraph:{
    title: 'Aprendendo Next JS',
    description: 'Apredendo Next JS do zero com Sujeito Programdor!'
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iblockblast.com'),
  title: {
    default: 'Block Blast',
    template: '%s | Block Blast'
  },
  description: 'Play Block Blast, the addictive free puzzle game! Match colorful blocks, create combos, and challenge your mind. Perfect for all ages, play instantly in your browser.',
  keywords: [
    'block blast',
    'block blast puzzle',
    'puzzle game',
    'match blocks',
    'block blast online ',
    'block blast game ',
  ],
  openGraph: {
    title: 'Block Blast - Free Online Puzzle Game 2024',
    description: 'Match blocks, create combos, and challenge your mind in this addictive puzzle game. Play for free in your browser!',
    url: 'https://iblockblast.com',
    siteName: 'Block Blast',
    images: [
      {
        url: '/og-image.jpg',  // 需要添加一个 1200x630 的图片
        width: 1200,
        height: 630,
        alt: 'Block Blast Game Preview'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Block Blast - Free Online Puzzle Game 2024',
    description: 'Match blocks, create combos, and challenge your mind in this addictive puzzle game. Play for free in your browser!',
    images: ['/logo/block-blast-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 需要添加 Google Search Console 验证码
  },
  alternates: {
    canonical: 'https://iblockblast.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://iblockblast.com" />
        {/* 添加网站图标 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* 添加结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Block Blast",
              "url": "https://iblockblast.com",
              "description": "Match blocks, create combos, and challenge your mind in this addictive puzzle game.",
              "applicationCategory": "Game",
              "genre": "Puzzle",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans min-h-screen`}>
        <Header />
        {children}
        <Footer />

        <script defer data-domain="iblockblast.com" src="https://plausible.corsme.com/js/script.js"></script>
          
      </body>
    </html>
  );
}

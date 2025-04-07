// import { Geist, Geist_Mono } from "next/font/google";
// import Navbar from "@/components/navbar";
// import Adsence from "@/components/AdSence";
// import Footer from "@/components/Footer";
// import './styles.css'
// import dotenv  from 'dotenv'
// import Header from '@/components/Header'

// // dotenv.config()
// // console.log(process.env.PORT);


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <Adsence/>
//         </head>
//         <body
//         // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         style={{ margin: 0, padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}
//       >
//         <div style={{ marginBottom: "10px" }}>
//           {/* <Navbar /> */}
//           <Header/>
//         </div>
//         <div style={{ flex: 1 }}>{children}</div> {/* Pushes footer down */}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// with outfit font 

import { Outfit } from 'next/font/google';
import './styles.css';
import Adsence from "@/components/AdSence";
import Footer from "@/components/Footer";
import dotenv  from 'dotenv'
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/navbar';
// import Header from '@/components/Header'
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-outfit',
});

export const metadata = {
  title: "CareerValore - Latest Job Listings, Career Opportunities & Recruitment",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="icon-modified.png" />
     <Adsence />
   <meta name="google-adsense-account" content="ca-pub-8581033330533278"/> 
 {/*google console  */}
<meta name="google-site-verification" content="OpfS0hLfcCnfLia7JaZ_HyvUu4kc0kt-_S4jcO54je4" />
        {/* Meta Tags for SEO */}
        <meta name="description" content="Find the latest job listings and career opportunities at CareerValore. Explore top jobs, apply online, and kickstart your career with leading companies." />
        <meta name="keywords" content="job listings, career opportunities, recruitment, job search, employment, CareerValore, latest jobs, apply online, job vacancies" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="CareerValore - Latest Job Listings & Career Opportunities" />
        <meta property="og:description" content="Discover top job vacancies and career paths with CareerValore. Apply now and connect with leading employers!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.careervalore.com" /> {/* Replace with your actual domain */}
        <meta property="og:image" content="/icon-modified.png" /> {/* Use a relevant image URL */}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CareerValore - Latest Job Listings & Career Opportunities" />
        <meta name="twitter:description" content="Explore job openings and career opportunities with CareerValore. Start your job search today!" />
        <meta name="twitter:image" content="/icon-modified.png" /> {/* Use a relevant image URL */}

      </head>
      <body 
        className={outfit.variable}
        style={{ 
          margin: 0, 
          padding: 0, 
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column" 
        }}
      >
   

        <div style={{ marginBottom: "10px" }}>
          <Navbar />
        </div>
        <div style={{ flex: 1 }}>{children}</div>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8581033330533278"
          strategy="afterInteractive" // Loads after the page is interactive
          crossOrigin="anonymous"
        />
        <Footer />
        <Analytics />
          <SpeedInsights /> 

      </body>
    </html>
  );
}

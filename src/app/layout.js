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
import Navbar from "@/components/navbar";
import Adsence from "@/components/AdSence";
import Footer from "@/components/Footer";
import dotenv  from 'dotenv'
import Header from '@/components/Header'
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-outfit',
});

export const metadata = {
  title: "CareerValore",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="icon-modified1.png" />
      <Adsence />
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
          <Header />
        </div>
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
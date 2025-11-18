import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";


const JetbrainsMono = JetBrains_Mono({subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-JetbrainsMono'
})
export const metadata = {
  title: "for you love",
  description: "crafted for CYthia Onzere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={JetbrainsMono.variable}
      >
        <Header />
        {children}
      
      </body>
    </html>
  );
}

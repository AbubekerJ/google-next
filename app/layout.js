import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";



export const metadata = {
  title: "Google Nextjs",
  description: "Google clone nextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="relative min-h-screen">
        {children}
        

        <Footer />
      </body>
    </html>
  );
}


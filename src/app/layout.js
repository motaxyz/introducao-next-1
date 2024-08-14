import { Inter } from "next/font/google";
import "./globals.css";

import Rodape from "@/components/rodape";


const inter = Inter({ subsets: ["latin"] });

import Rodape from "@/components/rodape";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Rodape />
        {children}
        <Rodape />
      </body>
    </html>
  );
}

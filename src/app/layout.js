import "/src/styles/globals.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MenuBottom from "@/components/MenuBottom/MenuBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harvey Bennet - Software designer, founder, and amateur astronaut.",
  description: "Harvey Bennet - Software designer",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <MenuBottom />
          <Footer />
        </body>
      </html>
  );
}

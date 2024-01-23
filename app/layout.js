import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Enayet-Portfolio || Home",
  description: "Md Enayetur Rahman, portfolio project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
       <div className="w-[90%] mx-auto">
       <Navbar></Navbar>
        <div>{children}</div>
        <Footer></Footer>
       </div>
        </body>
    </html>
  );
}

import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Enayet-Portfolio || Home",
  description: "Md Enayetur Rahman, portfolio project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Camilo Velasquez Botero - Portfolio",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${firaCode.variable} font-mono antialiased bg-brand-dark text-brand-green selection:bg-brand-green selection:text-black min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

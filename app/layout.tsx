import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/_styles/globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clinix: Hospital Management System",
  description:
    "Clinix is a comprehensive hospital management system designed to simplify administrative tasks, enhance patient care, and improve operational efficiency. Our intuitive web-based platform connects healthcare professionals, patients, and administrators, facilitating seamless communication and collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className}`}>
        {children}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </body>
    </html>
  );
}

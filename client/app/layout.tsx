import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./components/ReduxProvider";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/routes/ProtectedRoute";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Healthy Environment",
  description: "Teake Yourself Environment for the Internet Environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
      <Spinner/>
        <Toaster position="top-center" reverseOrder={false} />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
                <ProtectedRoute>
              {children} 
          </ProtectedRoute>
        </body>
      </ReduxProvider>
    </html>
  );
}

import "@/styles/globals.css";

import { type Metadata } from "next";
import { AppProvider } from "@/context/AppContext";
import { ToastProvider } from "@/components/ui/Toast";
import localFont from "next/font/local";

const calSans = localFont({
  src: [
    {
      path: "../../public/fonts/Cal_Sans/CalSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cal-sans",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const jakarta = localFont({
  src: [
    {
      path: "../../public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit/Outfit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Dctrs. - Consultas médicas online",
  description:
    "Conectamos pacientes con doctores calificados para consultas médicas rápidas y confiables.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${calSans.variable} ${outfit.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-gray-50 font-sans">
        <AppProvider>
          <ToastProvider>{children}</ToastProvider>
        </AppProvider>
      </body>
    </html>
  );
}

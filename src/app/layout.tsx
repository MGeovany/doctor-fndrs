import "@/styles/globals.css";

import { type Metadata } from "next";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "@/components/ui/sonner";

import { GSAPProvider } from "@/components/ui/GSAPProvider";
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
  title: {
    default: "Dctrs. - Consultas médicas online",
    template: "%s | Dctrs.",
  },
  description:
    "Conectamos pacientes con doctores calificados para consultas médicas rápidas, seguras y confiables. Agenda tu cita en línea con los mejores especialistas.",
  keywords: [
    "consultas médicas online",
    "doctores en línea",
    "citas médicas",
    "telemedicina",
    "salud digital",
    "Dctrs",
    "especialistas médicos",
    "plataforma médica",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Dctrs. - Consultas médicas online",
    description:
      "Conectamos pacientes con doctores calificados para consultas médicas rápidas, seguras y confiables. Agenda tu cita en línea con los mejores especialistas.",
    url: "https://dctrs.com/", // Cambia por tu dominio real si es necesario
    siteName: "Dctrs.",
    images: [
      {
        url: "/imgs/dr1.png", // Cambia por una imagen representativa
        width: 1200,
        height: 630,
        alt: "Dctrs. - Consultas médicas online",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dctrs. - Consultas médicas online",
    description:
      "Conectamos pacientes con doctores calificados para consultas médicas rápidas, seguras y confiables. Agenda tu cita en línea con los mejores especialistas.",
    images: ["/imgs/dr1.png"], // Cambia por una imagen representativa
    creator: "@dctrs", // Cambia por tu usuario real si tienes
  },
  metadataBase: new URL("https://dctrs.com"), // Cambia por tu dominio real
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
          <GSAPProvider>
            <>
              <Toaster
                position="top-center"
                className="font-outfit"
                toastOptions={{
                  style: {
                    fontFamily: "var(--font-outfit)",
                  },
                }}
              />
              {children}
            </>
          </GSAPProvider>
        </AppProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'FVM Créations | Sites web modernes pour entreprises locales',
  description: 'FVM Créations aide les entreprises locales à attirer plus de clients grâce à des sites web performants, modernes et optimisés pour la conversion.',
  openGraph: {
    "title": "FVM Créations - Agence Web Locale",
    "description": "Sites web qui génèrent des clients.",
    "siteName": "FVM Créations"
  },
};


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

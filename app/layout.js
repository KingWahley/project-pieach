import "./globals.css";
import { IBM_Plex_Mono, Moderustic, Montserrat } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const moderustic = Moderustic({
  subsets: ["latin"],
  variable: "--font-moderustic",
  display: "swap",
});

export const metadata = {
  title: "PIEACH: Architectural Firm",
  description:
    "PIEACH Limited is a multidisciplinary studio of visionary architects, master planners, and interior designers. With an industry-leading reputation across West Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${montserrat.variable} ${moderustic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

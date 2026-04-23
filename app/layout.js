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
  title: "PIEACH: Research Centre",
  description:
    "PIEACH - Research Centre for Human Potential conducts applied research projects in the performing arts in collaboration with a broad network of partners.",
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

import "./globals.css";

export const metadata = {
  title: "PIEACH: Architectural Firm",
  description:
    "PIEACH Limited is a multidisciplinary studio of visionary architects, master planners, and interior designers. With an industry-leading reputation across West Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

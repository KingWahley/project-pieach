import "./globals.css";

export const metadata = {
  title: "PIEACH: Research Centre",
  description:
    "PIEACH – Research Centre for Human Potential conducts applied research projects in the performing arts in collaboration with a broad network of partners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

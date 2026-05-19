import "./globals.css";

export const metadata = {
  title: "SD Kiyan Studio",
  description: "An independent animation studio exploring loneliness, warmth, voices, and human connection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

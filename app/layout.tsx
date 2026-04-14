import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindCo Intranet",
  description: "MindCo internal workplace mock frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="h-screen overflow-hidden mindco-app-shell text-[#F5F7FF]">{children}</body>
    </html>
  );
}

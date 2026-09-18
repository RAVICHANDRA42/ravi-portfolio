import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravichandra — Premium 3D Developer Portfolio",
  description: "Digital Architecture — Interactive 3D Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--fg)] text-[var(--fg)]">{children}</body>
    </html>
  );
}

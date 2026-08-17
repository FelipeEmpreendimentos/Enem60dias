import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redação 60D PRO | Preparação completa para o ENEM 2026",
  description: "Um plano guiado de 60 dias para dominar estrutura, argumentação, repertório e proposta de intervenção na redação do ENEM.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}

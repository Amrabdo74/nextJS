import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, metadata }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata?.title || "Default Title"}</title>
        <meta name="description" content={metadata?.description || "Default description"} />
        {/* Add more default meta tags if needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

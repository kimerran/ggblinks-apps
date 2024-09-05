import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="ggtag" content="ggme:k1merran.sol" />
    <meta name="dscvr:canvas:version" content="vNext" />
    <meta name="description" content="Convert your social-media posts into Solana-powered Blinks. Send SOL, SEND, PYUSD tokens, mint NFTs, participate in airdrops and many more in the future!" />
    <meta name="og:description" content="Convert your social-media posts into Solana-powered Blinks. Send SOL, SEND, PYUSD tokens, mint NFTs, participate in airdrops and many more in the future!" />
    <meta name="twitter:description" content="Convert your social-media posts into Solana-powered Blinks. Send SOL, SEND, PYUSD tokens, mint NFTs, participate in airdrops and many more in the future!" />
    <meta name="og:image" content="https://i.imgur.com/CXh9lkt.jpeg" />
    <meta name="twitter:image" content="https://i.imgur.com/CXh9lkt.jpeg" />

    <meta name="dscvr:canvas:version" content="vNext"/>

    <title>GGBlinks</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />

</head>
      <body className={inter.className}>
      <AppWalletProvider>{children}</AppWalletProvider>
</body>
    </html>
  );
}

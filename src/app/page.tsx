"use client";
// import Image from "next/image";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
// import { CanvasClient, CanvasInterface } from "@dscvr-one/canvas-client-sdk";
// import { Transaction } from "@solana/web3.js";

// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import bs58 from 'bs58'
import { registerCanvasWallet } from "@dscvr-one/canvas-wallet-adapter";

export default function Home() {
  // const [canvasClient, setCanvasClient] = useState<CanvasClient>()

  const [finalUrl, setFinalUrl] = useState("")

  // useEffect(() => {
  //   const client = new CanvasClient()
  //   setCanvasClient(client)
    

  //   registerCanvasWallet(client);
  // }, [])

  // const createTx = async (
  //   response: CanvasInterface.User.ConnectWalletResponse
  // ): Promise<CanvasInterface.User.UnsignedTransaction | undefined> => {

  //   // const txString = "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMFH2BDnoPhvZkB2MOTAl1FPqnQz272zMkC6WG05igmLSxAtDtIGMrQ8aaGlWgAJ6jvyCqp83LWOUV25rUyawq3nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwZGb+UhFzL/7K26csOb57yM5bvF9xJrLEObOkAAAAAFSlNamSkhBk0k6HFg2jh8fDW13bySu4HkH6hAQQVEjST7pB0kfaExunZqVLw+cJbdpCT10osfPaxKZdVmjJUcBAMABQJAQg8AAwAJAxAnAAAAAAAAAgIAAQwCAAAAIKEHAAAAAAAEAQAiQmxpbmtzaWdodHNBY3Rpb258VjJ8MTcyNTQ1MDkzNTIyOA=="
  //   const transaction = new Transaction().compileMessage()
  //   transaction.serialize()
  //   const unsignedTx = bs58.encode(transaction.serialize());
  
  //   return {
  //     unsignedTx
  //   };
  // };

  return (
    <>
      <nav>
        <a href="/">GGBlinks</a>
        <a href="https://docs.ggbl.ink/">Docs</a>
        <a href="https://x.com/ggblinkme">@ggblinkme</a>
        <WalletMultiButton style={{}} />
      </nav>

      <div className="hero">
        <div>
          <h1>Convert your post into Blinks</h1>
          <input
            onChange={(e) => {
              setFinalUrl(`https://ggbl.ink/${e.target.value}`)
            }}
            id="hero-input"
            type="text"
            placeholder="Your link, for example https://www.facebook.com/devkodigo/posts/pfbid02ZTS8d3MHByoNZAKQmbEftcJLWBw8yS7nbBZ9tUb4tDHzrcdVETMkeVpmPEg4z3ghl"
          />
          <h2 id="output">{finalUrl}</h2>
          <a
            id="tweet-link"
            href={`https://twitter.com/intent/tweet?text=YOUR_TWEET @ggblinkme&url=${finalUrl}`}
            target="_blank"
            className="twitter-button"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" /> Share on X
          </a>
        </div>
      </div>

      <footer>
        <div className="social-icons" />
        <p>&copy; 2024 GGBlinks. All rights reserved.</p>
      </footer>
    </>
  )
}

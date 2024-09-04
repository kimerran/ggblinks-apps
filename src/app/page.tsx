"use client";
// import Image from "next/image";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";

// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {

  const [finalUrl, setFinalUrl] = useState("")

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

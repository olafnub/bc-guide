---
sidebar_position: 3
pagination_prev: foundation/introduction-to-web3
pagination_next: foundation/learn-blockchain-basics
slug: /foundation/bitcoin-hash-encrypt
---

# Bitcoin Origins: Why It Was Created

### Introduction

Before Dogecoin memes and NFT drama, there was **Bitcoin** — the OG cryptocurrency that started it all. In this lesson, we’ll explore:
- Why Bitcoin was created
- The history behind its launch
- The core problems it solves
- And how it set the stage for the entire crypto movement

Let’s rewind to a time before Web3 was even a thing.

---

### The Financial Crisis of 2008 💥

Bitcoin was born out of **chaos** — specifically the 2008 global financial meltdown. Banks collapsed, people lost homes, and confidence in the financial system was shattered.

On January 3, 2009, someone using the name **Satoshi Nakamoto** launched the Bitcoin network and embedded this message in the first block:

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

A clear statement: Bitcoin was created as an **alternative** to the traditional banking system — one that doesn’t require trust in governments or corporations.

---

### The Problem: Trust in Central Authorities

Before Bitcoin, digital money always relied on a **central authority**:
- PayPal, Venmo, banks — they keep the ledger
- You have to trust them to manage it fairly and not lose (or freeze) your funds

This centralized model works... until it doesn’t.
- Data breaches, bank freezes, inflation, censorship

Bitcoin asked: *What if we could remove the middleman entirely?*

> TLDR: Bitcoin solved the **double-spending problem** — how to ensure someone can’t spend the same digital coin twice — without needing a central server or bank to keep track.

---

### Enter Cryptography 🔐

The tech that makes Bitcoin work isn’t new — it’s built on decades of cryptographic research.

#### Hashing
A **hash function** takes any data and turns it into a fixed-length, unique string (a “digital fingerprint”).
- Input: "Hello"
- Output: `2cf24dba5fb0a...` (SHA-256)

Bitcoin uses **SHA-256** to secure its data and link blocks together.

#### Encryption (Light Intro)
Encryption protects data so only someone with the correct key can read it. Bitcoin doesn’t *encrypt* your balance, but it uses **public-key cryptography** so only *you* can spend your coins.

> Public key = wallet address (you can share this)
> Private key = your access pass (never share this)

Together, hashing and cryptography make Bitcoin:
- Secure
- Tamper-resistant
- Transparent

---

### Why Bitcoin Matters (Still Today)

Bitcoin flipped the script on finance:

- **No bank required**: You control your money
- **Limited supply**: Only 21 million BTC will ever exist
- **Permissionless**: Anyone with internet can use it
- **Transparent**: The entire ledger is public
- **Borderless**: Send money anywhere, anytime

For people in unstable economies or authoritarian countries, Bitcoin can be a **lifeline** — a way to store value and move money without relying on shaky banks or corrupt governments.

It’s also become a form of **digital gold** — a hedge against inflation and fiat currency risks.

---

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Read [Bitcoin’s whitepaper](https://bitcoin.org/bitcoin.pdf) (or skim the intro and conclusion if you’re short on time)
2. Try hashing your name using [SHA256 online tool](https://emn178.github.io/online-tools/sha256.html)
3. Research the current Bitcoin price on [CoinGecko](https://www.coingecko.com/en/coins/bitcoin) and look at its historical chart

</div>

---

### Knowledge Check

- What global event inspired the creation of Bitcoin?
- What problem does Bitcoin solve that digital money couldn’t before?
- What’s the role of hashing in Bitcoin?
- Why is a limited supply (21 million) important?

---

### Additional Resources

- [Bitcoin.org Introduction](https://bitcoin.org/en/how-it-works)
- [Bitcoin Whitepaper (PDF)](https://bitcoin.org/bitcoin.pdf)
- [Visual Explanation of SHA-256](https://www.youtube.com/watch?v=tz0aafY2NBY)

---

**Up Next**: [Lesson – Consensus Mechanisms](./consensus-mechanisms.md)

Let’s talk about how the network actually agrees on who owns what.


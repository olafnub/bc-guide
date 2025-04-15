---
sidebar_position: 6
pagination_prev: foundation/web3-wallets
pagination_next: foundation/sending-and-receiving-crypto
slug: /foundation/what-are-cryptocurrencies
---
<!-- 
File: 6-what-are-cryptocurrencies.md
Description: Overview of cryptocurrencies, token standards, and stablecoins.
-->
# Cryptocurrencies

### Introduction

Now that you’ve got your wallet set up and know how to stay safe out there in the wild west of blockchain, it’s time to learn about **cryptocurrencies** — what they are, how they’re used, and why they exist in the first place.

Spoiler: it’s more than just magic internet money 🪙. We’ll even get into smart contracts, token standards like **ERC-20**, and stablecoins like USDC. Let’s dive in 👇

---

### Native Tokens vs Smart Contract Tokens

In Lesson 1, we learned about **native tokens** — these are the built-in currencies of a blockchain.

- **ETH** (Ethereum)
- **MATIC** (Polygon)
- **AVAX** (Avalanche)

These are used to pay **gas fees** when making transactions.

But here’s where things get spicy: blockchains can run **programs** too — aka **smart contracts**. And these programs can issue **their own tokens**.

---

### Smart Contracts

A smart contract is a program that lives on a blockchain. Just like how a real-life contract says “if X happens, then do Y,” a smart contract can enforce rules like:

- If someone deposits tokens, add interest
- If a loan is overdue, charge a penalty
- If conditions are met, send funds to a specific wallet

These smart contracts are what allow DeFi apps like lending protocols, DEXs, and DAOs to work — without needing a middleman or bank.

---

### ERC-20 Tokens

The most common type of smart contract token on Ethereum is the **ERC-20** token.

It’s not a specific coin — it’s a **standard** that smart contracts follow so their tokens can:

- Be transferred between wallets
- Check balances (like a bank account)
- Let dApps interact with them easily

Think of ERC-20 like a universal plug that makes sure all apps know how to use the token.

**Famous ERC-20 Tokens:**
- **UNI** – Found on Ethereum, Arbitrum, Optimism, and Polygon
- **CAKE** – Found on Binance Smart Chain

Want to nerd out? Check out the full ERC-20 standard on [Ethereum.org](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)

---

### Stablecoins

Stablecoins are **crypto tokens pegged to real-world currencies**, most commonly the U.S. Dollar. They give the crypto world some price stability — a rare commodity.

Popular examples:
- **USDT** (Tether)
- **USDC** (USD Coin)

Both are ERC-20 tokens and are often used to measure the value of other cryptos (like “1 ETH = $3,200”) or to avoid price swings.

---

### How Swaps Work

Want to trade 1 ETH for 3,000 USDC? Or sell UNI to buy some CAKE? That’s where **swaps** come in.

A **swap** is a direct exchange of one token for another. It can happen:

- On-chain using decentralized exchanges (DEXs) like Uniswap or Jupiter
- Off-chain using centralized exchanges (CEXs) like Coinbase or Binance, then transferring to your wallet

Swaps are fast, simple, and super common.

---

### Different Chains, Different Tokens

Tokens live on the chain where their **smart contract was deployed**. That means:

- If $APE is only on Ethereum, you can’t use it on Polygon… unless a **bridge** exists.
- Bridges let you send a token across chains — like teleporting it 🌀

If no bridge exists, the token can’t exist on that chain. Always check compatibility before moving your assets around!

---

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Look up your favorite token on [CoinGecko](https://www.coingecko.com/) and check what chain it's on
2. Explore a token's smart contract on [Etherscan](https://etherscan.io/)

</div>

---

### Knowledge Check

- What’s the difference between a native token and an ERC-20 token?
- What role do smart contracts play in DeFi?
- What is a stablecoin and why are they important?
- What is a bridge in the context of cross-chain tokens?

---

### Additional Resources

- [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [What is a Stablecoin?](https://www.coinbase.com/learn/crypto-basics/what-is-a-stablecoin)
- [How to Use a Bridge](https://academy.binance.com/en/articles/what-are-cross-chain-bridges-in-crypto)

---

**Up Next**: [Lesson 4 – Sending and Receiving Crypto](./sending-and-receiving-crypto.md)

Let’s get hands-on and move some tokens 🔁
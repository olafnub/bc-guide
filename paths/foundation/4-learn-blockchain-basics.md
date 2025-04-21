---
sidebar_position: 4
pagination_prev: foundation/bitcoin-hash-encrypt
pagination_next: foundation/web3-wallets
slug: /foundation/learn-blockchain-basics
---
<!-- 
File: 4-learn-blockchain-basics.md
Description: Covers blockchain fundamentals, consensus mechanisms, and gas fees.
-->

# Blockchain 101: Blockchain Fundamentals

### Introduction

If you’ve ever heard words like *blockchain*, *Bitcoin*, or *NFTs* pop up in online convos or on the news — and instantly felt overwhelmed — this lesson is for you 🫵. The good news is: you don’t need to be an expert to understand the basics or even start using blockchain tech. This lesson gives you the **foundational understanding** of what a blockchain is, why it’s unique, and how blocks actually get added to a chain (spoiler: it’s not duct tape).

We’ll also demystify terms like *miners*, *validators*, *gas fees*, and *native tokens*. If it sounds complex now, don’t worry — by the end, you’ll be fluent enough to explain it to your friends (or your dog).

### Lesson Overview

In this lesson, we’ll cover:

- What is a blockchain, really?
- Why blockchains are different from normal databases
- How blocks get added (aka consensus mechanisms)
- Proof of Work vs Proof of Stake
- What are gas fees?
- Native tokens like ETH, MATIC, and AVAX

Let’s get into it 👇

---

### What is a Blockchain?

At its core, a **blockchain** is a digital chain of blocks that store data — usually transactions. Every block contains a group of transactions like transfers, swaps, lending, etc. Once a block is full, it’s sealed and linked to the previous block — creating a chain 📦➡📦➡📦.

Imagine person A has $1000 and sends $100 to person B. That transaction is bundled into a block, along with others, and then added to the chain. At Block 1: A has $900, B has $100. If A sends another $100 in Block 2, A has $800 and B has $200.

Each new block = a new historical record. So blockchain = public ledger 📜, similar to a bank statement that *everyone can see*.

**Genesis Block**: The very first block in any blockchain. Think of it like the first ever entry in the global ledger.

---

### Why is Blockchain Special?

Two words: **Decentralization** and **Transparency**.

- **Decentralized**: There’s no single computer or company controlling the blockchain. Instead, it's distributed across a bunch of servers (called nodes) worldwide. If one goes down? The system still works 🧠🌐.
- **Transparent**: Anyone can view the full transaction history. Seriously — you can download the entire Ethereum blockchain if you want. No secrets.

This combo means:
- Anyone can verify past transactions
- It’s super hard (basically impossible) to tamper with old records
- It builds trust without needing a middleman

Use case: A musician can sell music directly to fans *without* Spotify or Apple Music taking a cut.

Financial example: Imagine trading crypto and then the trade *disappears* the next day. Nightmare 😵. Blockchain ensures trades are permanent and verifiable — perfect for DeFi and investing.

---

### How are Blocks Added?

Before new transactions become part of the blockchain, the network has to agree they’re legit. This is called **consensus**, and there are two main ways to do it:

#### Proof of Work (PoW)

- Computers (called miners) compete to solve a complex math problem 🧠💻
- First to solve it gets to add the block + earn rewards
- Very secure, but super energy-hungry

> Examples: Bitcoin, early Ethereum

#### Proof of Stake (PoS)

- Validators are chosen to add blocks based on how much crypto they’ve staked (locked up)
- They vote and reach consensus without wasting energy
- Faster, cheaper, and more eco-friendly 🌱

> Examples: Ethereum (post-merge), Polygon, Avalanche

---

### What are Miners, Validators, and Nodes?

| Term       | Role in the Blockchain             |
|------------|------------------------------------|
| **Miner**  | Adds blocks using Proof of Work    |
| **Validator** | Adds blocks using Proof of Stake  |
| **Node**   | Stores and broadcasts blockchain data (read-only) |

Miners/validators = active participants adding to the blockchain.  
Nodes = passive participants holding data.

---

### Gas Fees and Native Tokens

When you interact with a blockchain (send crypto, mint an NFT, etc), you pay a **gas fee**.

Think of it like tipping the network to include your transaction sooner.

- Higher fee = faster inclusion
- Lower fee = maybe you wait a few blocks ⏳

These fees are paid in the blockchain’s **native token**:

| Blockchain | Native Token |
|------------|--------------|
| Ethereum   | ETH          |
| Polygon    | MATIC        |
| Avalanche  | AVAX         |
| BSC        | BNB          |

Blockchains with PoS tend to be cheaper and faster than PoW. That’s why Polygon transactions cost less than a penny, while Ethereum might cost a few bucks (or a few hundred if you’re minting NFTs during a bull market 😬).

---

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Watch this [Blockchain 101 - A visual Demo](https://youtu.be/_160oMzblY8?si=wIV3xan5YjDdHAmH)
2. Explore [Etherscan](https://etherscan.io/) to see real transactions on Ethereum

</div>

---

### Knowledge Check

- What is a Genesis Block?
- What are the roles of Miners vs Validators vs Nodes?
- What is a gas fee and why do we need it?
- How does Proof of Stake differ from Proof of Work?

---

### Additional Resources

- [Proof of Work vs Proof of Stake (Coinbase)](https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake)  
- [Blockchain Visual Demo (Anders Brownworth)](https://youtu.be/_160oMzblY8?si=wIV3xan5YjDdHAmH)  
- [Ethereum Whitepaper (for the nerds)](https://ethereum.org/en/whitepaper/)

---

We're now ready to learn how to actually *use* the blockchain — starting with crypto wallets 🔐

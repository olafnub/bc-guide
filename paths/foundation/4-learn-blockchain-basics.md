---
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

This lesson gives you the foundational understanding of what a blockchain is, why it’s unique, and how transactions in each block actually get added to a blockchain (spoiler: it’s not duct tape).

We’ll also cover terms like miners, validators, gas fees, and native tokens. These are important concepts to understand, and don't worry if you don't get them right away!

### Lesson Overview

- How all blockchains operate
- How blocks get added (aka consensus mechanisms)
- Proof of Work vs Proof of Stake
- Validators + Gas Fees

### What is a Blockchain?

At its core, a blockchain is a chain of bundled up transactions, meaning every transaction done is stored in a block, connected to previous blocks and soon future blocks. (Essentially, a linked list for the CS people).

Example: 


    [Transaction #1, Transaction #2, Transaction #3] -> [Transaction #4, Transaction #5, Transaction #6] -> [Transaction #7, Transaction #8, Transaction #9] -> etc.


So if Alice paid Bob 100 dollars, that transaction gets stored in a block along with other ongoing transactions, and once the block is full, a new block is created for the next set of transactions. What makes this unique and cool is that each block on the blockchain is copied onto every computer that's connected to the network, meaning everyone has a copy of the ledger.

```
Genesis Block: The very first block in any blockchain. Usually contains 
transactions from the developer(s) or the very first users of the blockchain.
```

### Why is Blockchain Special?

Decentralization and transparency are the two main reasons why blockchains are special and unique. 

Decentralized in a blockchain means there's no single computer or company controlling the entire ledger aka blockchain. Instead, it's distributed across a bunch of computers and servers (called nodes) worldwide. If one computer or node were to shut down, the blockchain will still be maintained by the rest of the nodes. 

Transparency in a blockchain means that anyone can view the full transaction history. For example: You can download the entire Bitcoin blockchain if you want to view transaction history but you can also view the full transaction history on websites like blockchain scanners.

Combining the two, you get:
- Anyone can verify past transactions
- It’s super hard (basically impossible) to tamper with old records
- It builds trust without needing a middleman

Verify, not trust.

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

### What are Miners, Validators, and Nodes?

| Term       | Role in the Blockchain             |
|------------|------------------------------------|
| **Miner**  | Adds blocks using Proof of Work    |
| **Validator** | Adds blocks using Proof of Stake  |
| **Node**   | Stores and broadcasts blockchain data (read-only) |

Miners/validators = active participants adding to the blockchain.  
Nodes = passive participants holding data.

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

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Watch this [Blockchain 101 - A visual Demo](https://youtu.be/_160oMzblY8?si=wIV3xan5YjDdHAmH)
2. Explore [Etherscan](https://etherscan.io/) to see real transactions on Ethereum

</div>

### Knowledge Check

- What is a Genesis Block?
- What are the roles of Miners vs Validators vs Nodes?
- What is a gas fee and why do we need it?
- How does Proof of Stake differ from Proof of Work?

### Additional Resources

- [Proof of Work vs Proof of Stake (Coinbase)](https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake)  
- [Blockchain Visual Demo (Anders Brownworth)](https://youtu.be/_160oMzblY8?si=wIV3xan5YjDdHAmH)  
- [Ethereum Whitepaper (for the nerds)](https://ethereum.org/en/whitepaper/)

We're now ready to learn how to actually *use* the blockchain — starting with crypto wallets 🔐

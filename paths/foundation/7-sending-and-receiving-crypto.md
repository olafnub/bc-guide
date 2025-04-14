---
sidebar_position: 7
pagination_prev: foundation/what-are-cryptocurrencies
pagination_next: foundation/intro-to-ethereum
slug: /foundation/sending-and-receiving-crypto
---

# Sending & Receiving Crypto, aka Transactions

### Introduction

We’ve covered wallets, tokens, and smart contracts — now comes the part everyone’s been waiting for: **how do I actually use the blockchain?**

This lesson is all about **transactions**: sending and receiving crypto, paying gas fees, interacting with dApps, and even checking your transaction history. By the end, you’ll be ready to move money like a web3 native 🧠💸

---

### On-Ramps and Off-Ramps

Before doing anything on-chain, you need crypto in your wallet. Enter: **on-ramps** (buying into crypto) and **off-ramps** (selling back to fiat).

Two main methods:

#### Centralized Exchanges (CEXs)
- Buy/sell crypto with fiat (USD, EUR, etc.)
- Examples: **Coinbase**, **Binance**
- Can use cards, bank accounts, or P2P payment systems

#### Payment Providers
- Platforms like **MoonPay** let you buy crypto with a credit card
- Integrated in dApps like OpenSea and BeatNami for easy checkout

---

### Sending & Receiving Crypto

This is the bread and butter of blockchain usage.

#### Sending
- You’ll need the **recipient’s public key** (wallet address)
- Use your wallet’s "Send" feature (e.g. MetaMask, Coinbase Wallet)
- Choose the right **network** (ERC-20 = Ethereum, BEP-20 = BNB, etc.)

#### Receiving
- Share **your public key** with the sender
- The sender handles network settings

⚠️ Double check the network! Sending tokens on the wrong chain can result in permanent loss.

---

### Gas Fees Refresher

Every transaction on-chain requires gas fees (paid in the **native token** of the chain).

- **Simple transfers** usually cost just a few cents (on fast chains)
- **Complex transactions** (like minting NFTs or interacting with DeFi) can get expensive

Gas fees are what power validators or miners to add your transaction to the blockchain.

---

### Interacting with Smart Contracts

Beyond sending money, most blockchain interactions happen through **dApps** (decentralized apps).

You’re not just sending money to an address — you’re **calling a function** on a smart contract:

- **Deposit** → `deposit()` function
- **Withdraw** → `withdraw()` or `withdrawAll()`

#### Two Ways You Earn Interest

1. **Auto-compounding**: Interest is automatically added to your deposit.
2. **Manual claiming**: You have to click “Claim” — and pay gas — to receive interest.

Most dApps handle this via buttons on their site. Click → sign → done ✅

---

### Block Explorers 🔎

Block explorers are your window into the blockchain.

- Check if your transaction succeeded
- See wallet balances and token holdings
- Export history to Google Sheets/Excel

Popular block explorers:
- [Etherscan](https://etherscan.io/)
- [BscScan](https://bscscan.com/)
- [PolygonScan](https://polygonscan.com/)

Try pasting your wallet address into one and explore!

---

### Validation Time

Transactions aren’t instant — they need time to be **confirmed**.

- **Bitcoin Lightning**: ~1 sec
- **Ethereum**: ~15 sec/block (6 blocks = confirmed)
- **Polygon/Solana**: seconds to near-instant

Some chains support **single-block finality**, meaning your transaction is confirmed as soon as it’s in the block. 🧠⚡

---

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Send testnet ETH to a friend using MetaMask
2. Look up the transaction on [Goerli Etherscan](https://goerli.etherscan.io/)
3. Explore your wallet activity on a block explorer

</div>

---

### Knowledge Check

- What is the difference between on-ramps and off-ramps?
- What happens if you use the wrong network when sending crypto?
- What’s the purpose of gas fees?
- How do you interact with a smart contract?
- What do block explorers let you do?

---

### Additional Resources

- [How to Send Crypto (MetaMask)](https://metamask.io/send-crypto)
- [How to Use Etherscan](https://ethereum.org/en/developers/docs/etherscan/)
- [Crypto On-Ramps Explained](https://www.moonpay.com/learn/on-ramp-off-ramp)

---

### 🎓 Course Wrap-Up

Congrats! You’ve finished the **Blockchain 101** track.

Here’s what we covered:
- What a blockchain is and why it matters
- How wallets work (and how to protect them)
- Smart contracts and token standards
- Sending, receiving, and interacting with crypto

There’s still so much more to learn — so check out our next course: **Blockchain 102**, where we dive into DeFi, protocols, tokenomics, and more.

<!-- 👉 [Get started with Blockchain 102](./blockchain-102.md) -->


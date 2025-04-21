---
sidebar_position: 3
pagination_prev: foundation/introduction-to-web3
pagination_next: foundation/learn-blockchain-basics
slug: /foundation/bitcoin-hash-encrypt
---
<!-- 
File: 3-bitcoin-hash-encrypt.md
Description: Explains Bitcoin's origins, cryptography, and its significance.
-->

# Bitcoin Origins: Why It Was Created

### Introduction

Bitcoin, the cryptocurrency and blockchain that made it out alive of previous cryptocurrencies. Yes, Bitcoin in fact was not the first cryptocurrency.

By the end of this lesson, we'll understand when, why, and the motivation behind Bitcoin. We'll also understand the underlying mechanism that Bitcoin uses to get a grasp on how Bitcoin has survived this long, while creating an entire industry with a $2.6 market cap along the way, as of [April 18 2025](https://coinmarketcap.com/crypto-heatmap/).

### Lesson Overview

- Bitcoin What, Bitcoin Why, Bitcoin How
- Overview of Bitcoin Transactions

### The Financial Crisis of 2008

While the main goal of Bitcoin was to allow online peer-to-peer (Person -> Person) payments without the need of a bank, Bitcoin happened to catch the wave of defying centralized banks and governments, as it was launched a little after the 2008 financial crisis. 

**A brief overview of the 2008 financial crisis:** The collapse of major banks like the Lehman Brothers was driven by greed and a false promise; banks approved loans with zero percent down payments, advertising that the housing market will always have a positive uptrend meaning that no one will lose money. Selling on this false promise, many people started "buying" multiple houses without the proof of a good financial history, or even income. 

This eventually led to a housing bubble that burst around the time of 2007-2008. Since many people struggled to pay their monthly mortgage bills, leading to many defaults and an over supply of houses that the banks couldn't sell, making them less valuable. And the result put a dent in the global economy, signifying that there were major improvements needed to the current financial system, and it also put a lot of distrust in governments and banks.

A year later on January 3, 2009, Bitcoin was launched by an entity using the name **Satoshi Nakamoto**. The Bitcoin protocol itself was in the works in 2007, whitepaper in 2008, and the first block was mined on January 3, 2009. It was perfect timing as it paved way for a new financial system, promoting decentralization, transparency, and security. 

If we were to look back at the very first message on the Bitcoin blockchain, the decrypted message says this, _"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."_  Hinting towards the 2008 financial crisis headline by _The Times_.

_Note: To this day, Satoshi Nakamoto's identity is unknown. People speculate that it could be one person, a group of people, an organization/government, or even the CIA to be responsible. But the truth still and will most likely remain unknow to the general public._

### Bitcoin How

Another main goal of Bitcoin was to prevent double-spending. As the world moves more towards an electronic world, the problem of double spending was yet to be solved. For example: 

- If you have 100 dollars online, you shouldn't be allowed to send $100 to your friend Alice. Then send another $100 to your friend Bob.

That's where Bitcoin comes in. It prevents double spending by using blockchain technology; blockchain uses hashing and encryption methods to verify every transaction that happens on the ledger; making sure there's no double spending or false transactions recorded on the ledger (like we've mentioned in the last lesson).

While apps such as PayPal, Venmo, and centralized banks already have their own ledgers, making sure transactions flowing through are valid. The problem is that these centralized models works... until they don't, which is what we saw in the 2008 financial crisis.

> Wrapping up: _Bitcoin solved the **double-spending problem** and allowed peer to peer transactions, without needing a central server or bank to keep track of transactions._

### Cryptography

Bitcoin uses a lot of cryptography for verifying transactions on the blockchain, especially the use of hashing and encrypting. "Hash" is a way of converting data into a fixed size character, unable to use the fixed chararcters back into it's original data. Encryption on the other hand is converting data into a chararcters that can be reversed by using a key. (blockchain and cryptocurrency are subtopics of Web3 just as hashing and encryption are subtopics of cryptography)

Cryptography is the backbone of how we interact with the internet today. Every email sent, every credit card details on a payment website, cryptography allows users to securely interact with the internet without exposing their personal information to bad actors.

_Note: Cryptography dates back to as early as 1900 BC in Egypt, where hieroglyphs were used in tomb writing, conveying secret messages._

Bitcoin uses a hashing method called SHA-256, and uses an encryption method called EDSA, don't worry about memorizing the acronyms as they mean little to us right now. Another note to add, in the world of computer science, methods and functions mean the same. So if I were to use a specific method of making eggs, it's the same as using the specific function of making eggs. Passing an raw egg into a method gives me a cooked egg = Passing a raw egg into a function gives me a cooked egg. Bitcoin uses the SHA-256 function to secure its data by linking each output together.

#### Example of Hashing
A hash function takes any data and turns it into a fixed-length, unique characters.
- Input: "Hello"
- Output: `185f8db32271fe...` (SHA-256)

Just switching a single letter in "Hello" changes the output, making it unique.
- Input: "Helo"
- Output: `375738319e8609...` (SHA-256)

The Encrpytion method that Bitcoin uses for transactions is called EDSA. EDSA allows a user to have a public and private key which is then used to create signautres of transactions. Just like in a legal document on paper, the signature is used to verify the authenticity of the document. The same applies to online transactions, the signature is used to verify the authenticity of the transaction.

#### Example of Encryption
An encryption function takes any data and turns it into a fixed-length, unique string (a “digital fingerprint”).
- Input: "Hello"
- Key: "123456789" (random and made up)
- Output: `185f8db32271fe...` (AES-256) 

#### Example of Decryption
A decryption function takes any encrypted data and turns it back into the original data.
- Input: `185f8db32271fe...` (AES-256)
- Key: "123456789" (using the same key from before)
- Output: "Hello"

#### Encryption != Hashing

A lot of people seem to misunderstand the difference between encryption and hashing (myself included). To clarify, the reason they're not the same even though they both use mathematical formulas to populate results, encrypted messages can be reverted back to the original message by using a key, but a hashed message cannot.

### Bitcoin What Pt.2

Other attributes that bitcoin has:

- **No bank required**: You're your own bank
- **Limited Supply**: Only 21 million BTC will ever exist
- **Permissionless**: Anyone with internet can use it around the world
- **Transparent**: The entire ledger is public and people can verify transactions
- **Borderless**: Send money anywhere and anytime, again without the need of a bank

### Assignment

<div class="lesson-content__panel" markdown="1">

Find a quiet place, sit down and check out the assignments below. 

1. Watch [3Blue1Brown's Bitcoin explanation](https://youtu.be/bBC-nXj3Ng4?si=e1O0sulIwZKjZS46)
2. Try hashing your name using [SHA256 online tool](https://emn178.github.io/online-tools/sha256.html)
3. Read the abstract of [Bitcoin’s whitepaper](https://bitcoin.org/bitcoin.pdf)

</div>

### Knowledge Check

- What problem does Bitcoin solve that [digital money couldn't before?](#bitcoin-how)
- [Are functions and methods the same?](#cryptography)
- [Bitcoin's limited supply](#bitcoin-what-pt2)

### Additional Resources

- [Bitcoin.org Introduction](https://bitcoin.org/en/how-it-works)
- [How Secure is 256 bit security?](https://youtu.be/S9JGmA5_unY?si=B5DEaX_cI8n-M9CF) (a fun watch even it's hard to understand)
- [Were there cryptocurrencies before Bitcoin?](https://www.investopedia.com/tech/were-there-cryptocurrencies-bitcoin/)

Let’s talk about how the network actually agrees on who owns what.


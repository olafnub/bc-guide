---
pagination_prev: foundation/how-this-course-will-work
pagination_next: foundation/introduction-to-web3
slug: /foundation/bitcoin-hash-encrypt
---
<!-- 
File: 5-bitcoin-hash-encrypt.md
Description: Explains Bitcoin's origins, cryptography, and its significance.
-->

# Bitcoin 2.0 -- Hashing and Cryptography

### Introduction

Bitcoin in fact was not the first cryptocurrency and there were other cryptocurrencies that had existed in the 1980s, projects like eCash, B-money, and HashCash. But they failed due to many technical and social issues which led to them never taking off. It wasn't until 2008, a pseudonymous going by the name "Satoshi Nakamoto" released Bitcoin that has then helped revolutionize digital currency.

By the end of this lesson, we'll understand the mechanisms behind Bitcoin. Diving a little into the math, and how blocks are added to the blockchain. Some sentences will have the same structure from Bitcoin 1.0 lesson but this lesson is more in depth on how it works.

### Lesson Overview

- Why a blockchain is secure
- Adding blocks to a blockchain

### Bitcoin

Reminder that a major innovation behind Bitcoin was to prevent double-spending. In the digital wild west where there's no government or banks involvment, duplicating money is pretty easy.

- If you have 100 dollars online, you shouldn't be allowed to send $100 to your friend Alice. Then send the same $100 to your friend Bob.

That's where Bitcoin comes in. It prevents double spending by using blockchain; blockchain uses hashing and encryption methods to verify every transaction that happens on the ledger, ensuring no one can double spend or fake a transactions on the ledger.

### Cryptography

Bitcoin relies heavily on cryptography, especially hashing and encrypting, to verify transactions on the blockchain. "Hash" is a way of converting data into a fixed size character, unable to use the fixed chararcters back into it's original data. Encryption on the other hand is converting data into a chararcters that can be reversed by using a key. (blockchain and cryptocurrency are subtopics of Web3 just as hashing and encryption are subtopics of cryptography)

Cryptography is the backbone of how we interact with the internet today. Every email sent, every credit card details on a payment website, cryptography allows users to securely interact with the internet without exposing their personal information to bad actors.

_Note: Cryptography dates back to as early as 1900 BC in Egypt, where hieroglyphs were used in tomb writing, conveying secret messages._

Bitcoin uses a hashing method called SHA-256, and uses an encryption method called ECDSA, don't worry about memorizing the acronyms as they mean little to us right now. Another note to add, in the world of computer science, methods and functions mean the same. So if I were to use a specific method of making eggs, it's the same as using the specific function of making eggs. For example, passing a raw egg into a method gives me a cooked egg is equal to saying passing a raw egg into a function gives me a cooked egg. Bitcoin uses the SHA-256 function to secure its data by linking each output together.

#### Example of Hashing
A hash function takes any data and turns it into a fixed-length, unique characters.
- Input: "Hello"
- Output: `185f8db32271fe...` (SHA-256)

Just switching a single letter in "Hello" changes the output, making it unique.
- Input: "Helo"
- Output: `375738319e8609...` (SHA-256)

The encryption method that Bitcoin uses for transactions is called ECDSA. ECDSA allows a user to have a public and private key which is then used to create signatures of transactions. Just like in a legal document on paper, the signature is used to verify the authenticity of the document. The same applies to online transactions, the signature is used to verify the authenticity of the transaction.

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

A lot of people seem to misunderstand the difference between encryption and hashing (myself included). To clarify, the reason they're not the same even though they both use mathematical formulas to populate results, encrypted messages can be reverted back to the original message by using a key, while a hash message cannot since it's irreversible.

### Bitcoin What Pt.2

Other attributes that bitcoin has:

- **No bank required**: You're your own bank and everyone participating in the bitcoin network verifies each other's balances.
- **Limited Supply**: Only 21 million BTC will ever exist. Currently there's about 20 million BTC mined and in the market. Though ~7.5% of it is lost from people losing their wallets.
- **Accessible**: Anyone with internet can use it around the world, and can send money anywhere and at anytime
- **Transparent**: The entire ledger is public. And through a thing called consensus mechanism (which we'll get into in a future lesson), all transactions are valid.

### Assignment

<div class="lesson-content__panel" markdown="1">

Find a quiet place, sit down and check out the assignments below. 

1. Watch [3Blue1Brown's Bitcoin explanation](https://youtu.be/bBC-nXj3Ng4?si=e1O0sulIwZKjZS46)
2. Try hashing your name using [SHA256 online tool](https://emn178.github.io/online-tools/sha256.html)
3. Read the abstract of [Bitcoin’s whitepaper](https://bitcoin.org/bitcoin.pdf)
4. [How SHA Works -- Computerphile](https://youtu.be/DMtFhACPnTY?si=B1VOu-buGX_txghb) Watch (0:00 - 3:41)

_A good way to visualize how a hash function is think of putting a fruit into a blender and getting the juice once blended. The juice can't be undone but you know that the fruit will always get you the juice when put in the blender._

</div>

### Knowledge Check

<div class="lesson-content__conclusion" markdown="1">

- What problem does Bitcoin solve that [digital money couldn't before?](#bitcoin-how)
- [Are functions and methods the same?](#cryptography)
- [Bitcoin's limited supply](#bitcoin-what-pt2)

</div>

### Additional Resources

<div class="lesson-content__conclusion" markdown="1">

- [Why Warren Buffett Said No to Lehman and AIG in 2008](https://youtu.be/1QeUcfqkUzc?si=aNvUmrO7qBv8nbIv)
- [How Secure is 256 bit security?](https://youtu.be/S9JGmA5_unY?si=B5DEaX_cI8n-M9CF) (a fun watch even it's hard to understand)
- [Were there cryptocurrencies before Bitcoin?](https://www.investopedia.com/tech/were-there-cryptocurrencies-bitcoin/)
- [Bitcoin supply distribution between exchanges, individuals, and lost BTC](https://www.ainvest.com/news/individuals-hold-69-bitcoin-supply-institutions-scramble-2502/)
- [How the Bitcoin Protocol Actually Works](https://michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/) is a great read (don't let the scrollbar fool you)

</div>
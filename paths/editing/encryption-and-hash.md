<!-- ---
: 4
pagination_prev: foundation/learn-blockchain-basics
pagination_next: foundation/bitcoin-origins
--- -->

# Cryptography Basics: Encryption and Hashing

### Introduction

Cryptography is the backbone of blockchain security. In this lesson, we'll explore the fundamental cryptographic concepts that make blockchain technology secure and trustworthy. We'll focus on encryption and hashing, two critical components that ensure the integrity and security of blockchain transactions.

### Lesson Overview

This section contains a general overview of topics that you will learn in this lesson.

- What is cryptography?
- Understanding encryption
- Understanding hashing
- Public and private keys
- Digital signatures
- Real-world applications in blockchain

### What is Cryptography?

Cryptography is the practice and study of techniques for secure communication in the presence of adversaries. In blockchain, cryptography is used to:
- Secure transactions
- Create digital identities
- Ensure data integrity
- Enable trustless interactions

### Understanding Encryption

Encryption is the process of converting plaintext into ciphertext to protect sensitive information.

1. **Symmetric Encryption**
   - Uses the same key for encryption and decryption
   - Fast and efficient
   - Example: AES (Advanced Encryption Standard)

2. **Asymmetric Encryption**
   - Uses a pair of keys: public and private
   - More secure but slower
   - Example: RSA (Rivest-Shamir-Adleman)

### Understanding Hashing

Hashing is a one-way function that converts input data of any size into a fixed-size string of characters.

Key properties of hash functions:
- Deterministic: Same input always produces same output
- One-way: Cannot reverse the process
- Fixed length: Output is always the same size
- Avalanche effect: Small changes in input create large changes in output

Common hash functions in blockchain:
- SHA-256 (Bitcoin)
- Keccak-256 (Ethereum)

### Public and Private Keys

1. **Public Key**
   - Can be shared with anyone
   - Used to encrypt messages or verify signatures
   - Like a public address

2. **Private Key**
   - Must be kept secret
   - Used to decrypt messages or create signatures
   - Like a password

### Digital Signatures

Digital signatures are used to:
- Verify the authenticity of messages
- Ensure message integrity
- Provide non-repudiation

How they work:
1. Message is hashed
2. Hash is encrypted with private key
3. Signature is attached to message
4. Recipient can verify using public key

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Watch this [Cryptography Basics video](https://www.youtube.com/watch?v=jhXCTbFnK8o) (10 minutes)
2. Create a simple message and hash it using an online SHA-256 generator
3. Research and explain how digital signatures are used in your favorite cryptocurrency

</div>

### Knowledge Check

- What's the difference between symmetric and asymmetric encryption?
- Why are hash functions important in blockchain?
- How do public and private keys work together?
- What role do digital signatures play in blockchain transactions?

### Additional Resources

- [Cryptography for Beginners by Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography)
- [Introduction to Cryptography by Stanford](https://crypto.stanford.edu/~dabo/cryptobook/)
- [Blockchain Cryptography by Binance Academy](https://academy.binance.com/en/articles/blockchain-cryptography)
- [Cryptography in Blockchain by IBM](https://www.ibm.com/topics/cryptography)
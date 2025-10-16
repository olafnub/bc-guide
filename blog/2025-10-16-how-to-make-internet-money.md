---
slug: how-to-make-internet-money
title: How to Make Internet Money
authors: [phillip]
tags: [web3-ideas]
---

How would you design ‘money’ from first principles, fit for the internet age?

<!-- truncate -->

No, this isn’t a guide to earning dollars online. It’s a thought experiment: how would you design ‘money’ from first principles, fit for the internet age?

## Teleological Views of Money
Economists usually describe money in terms of its functions:
- Medium of exchange
- Store of value
- This classic definition views money through the teleological lens: money defined by what it is for.

Another lens is its social function: Richard Dawkins considered it a method to convey delayed reciprocal altruism. In other words, money removes the friction to cooperate across time without requiring the fickleness of memory or trust.

These views capture why money matters, but as an engineer, I wonder from the mechanistic lens: what structural pieces are required for those functions to be fulfilled in the first place? In other words, how would we actually ‘implement’ money as a system, say, as an object-oriented class with methods and objects? Let’s try building out class eMoney together.

## Ownership
First question: How much do you have right now?

Money needs to be attached to owners to have a social function. Let’s call this relationship a "wallet.” We should be able to “check our wallet.”

In programming terms, let’s start with this method in our class eMoney:
- balanceOf(person) → how much does this person’s wallet own?

We can then describe the current state of our eMoney via a registry of these wallets; a simple hashmap between owner and balance can do.

## Movement
Money is only useful if it can move. For eMoney, that means it must support state transitions changing the registry. There seem to be two main varieties of movement, differentiated by the rules they ought to follow.

### Push
- **Action**: Alice sends 10 eMoney to Bob.
- **Result**: Subtract from Alice’s wallet, add to Bob’s.
- **Rules:** Alice initiates the transaction herself, so no special permissions are needed.
- **Method to add to eMoney: transfer(Bob, amount)**

### Pull
Sometimes Alice might want a third party to move funds on her behalf. For example, after dining at a restaurant, Alice hands her card to Alex the waiter. Alex initiates the charge, and Bob, the owner, receives the payment.¹

For this to work, Alice must grant Alex permission to pull funds, and that permission should be limited (e.g. to the total on the receipt). To address these situations, eMoney needs three additional functions:

- Approve spending: approve(Alex, amount): Alice grants Alex the right to spend a limited amount. Again, as a simple potential implementation, we can consider adding to a registry where these approvals are kept [Alice → (Alex, amount), …].
- Check allowance: allowance(Alice, Alex): Alex can check the registry to see how much he’s authorized to move.²
- Execute transfer: transferFrom(Alice, Bob, amount): Alex actually moves the funds from Alice’s wallet to Bob’s.

Pull mechanics may seem less obvious, but they’re critical in modern society. Much of our lives run on pre-approved, permissioned systems. Certainly recurring bills and subscriptions, but also more abstractly: a manager giving permission to her employee to go out and spend some fixed amount of company time on a task, or a university allowing a student access to campus resources (courses, dorm rooms, libraries, etc.) for a set period of time before graduation. The common thread is permission delegated in advance without constant “push requests” so that the asynchronous collaboration required in large-scale collaboration is possible.

## Miscellaneous
A couple ancillary touches to our eMoney class.
1. Controlling the supply by introducing and removing currency via create(amount) and delete(amount)
2. Checking the supply with a totalSupply()function

## Wrapping Up
So we’ve arrived at an interface for our eMoney class: a minimal set of requirements any implementation must satisfy. Different systems still can have quite varied implementations: just consider how many different ways there are to govern adding and removing currency. At its heart, though, the essential functions are:
- balanceOf for ownership
- transfer for push payments
- approve + allowance + transferFrom for pull payments
- totalSupply and create/delete for managing currency supply

Congratulations: you’ve just reinvented **IERC-20**, the blueprint behind ERC-20 tokens, which today make up the vast majority of fungible tokens on Ethereum and EVM-compatible blockchains.³

image can be found on the original [sub-stack post](https://phillipyan.substack.com/?r=2lc9i2&utm_campaign=pub&utm_medium=web)

The reason IERC-20 is so important is it distills the minimal requirements for digital money into a standardized interface. That mechanistic standardization let wallets, exchanges, and protocols interoperate seamlessly with tokens ranging from meme tokens to stablecoins.

This post might seem like overkill for such a seemingly straightforward concept. But I can think of three reasons why it might be helpful (at least for the write, and hopefully for you too, reader).
1. An exercise in practicing design from first principles thinking
2. How aligned some concepts in crypto can be to this kind of thinking (again rules, systems, etc made by people)
3. How much the technology mattered: only once we had public ledgers (so everyone can see and agree on who owns what) and verifiable state machines (so the system itself can prove that each update is valid) did reliable internet-scale money become possible.⁴

The surprise here is that those simple mechanics we derived, implemented cleanly and transparently, are enough to quietly underpin billions of dollars of assets.

And in that sense, the real power of IERC-20 was not in its complexity of invention but in its ability in reduction. It showed us that the infrastructure of value, like the infrastructure of the internet itself, can emerge from a tiny, standardized, and rather intuitive core. And you discovered it!

### Notes

[1] At least in the US. And your signature technically doesn’t stop the mechanical possibility of the waiter mischarging you. In Europe, you do it directly without a proxy. For a hub of trustless systems and individualism, Americans are oddly trusting.

[2] Spoiler: If you’ve skipped down here before finishing the article (and ruined the reveal), yes, this is about crypto infrastructure. But note that sometimes an approval in crypto can be “infinite,” meaning once you’ve granted it, that spender can move all your tokens of that type until you revoke it. That’s dangerous. Thankfully, most modern wallets let you check and revoke approvals from time to time, like cleaning out old permissions on your phone.

[3] Technically, IERC-20 also requires that every transfer, approval, and allowance be emitted as an event (like a log) to ensure transparency and let other contracts, wallets, and explorers keep track of what’s going on in the ecosystem.

[4] The questions here of who controls supply, how do you trust the ledger, who governs the registry are the classic questions the design of blockchain infrastructure tries to answer.

<div class="substack-post-embed"><p lang="en">How to Make Internet Money by Phillip Yan</p><p>How would you design ‘money’ from first principles, fit for the internet age?</p><a data-post-link href="https://phillipyan.substack.com/p/how-to-make-internet-money">Read it on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>

<a href="https://substack.com/inbox/post/174307408?r=75vkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false&triedRedirect=true">Read it here</a>
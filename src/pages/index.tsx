import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import PastUpdateLog from '@site/src/components/PastUpdateLog';
import Faq from '@site/src/components/Faq';
import FAQ from '../components/Faq/QNA.json';

import styles from './index.module.css';

interface CustomFields {
  serviceId: string;
  templateId: string;
  emailJsPubKey: string;
}

const StartLearnButton = () => {
  return (
    <div className={styles.buttons}>
      <Link
        className="button button--primary button--lg"
        to="/paths/foundation">
        Start Learning
      </Link>
    </div>
  )
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <StartLearnButton />
          <div className={styles.inspirationNote}>
            <p>Inspired by The Odin Project's learning approach</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhyWeb3Section() {
  return (
    <section className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2 className="text--center">Why Learn Web3?</h2>
            <p className="text--center">
              Web3 represents the next evolution of the internet, combining blockchain technology, 
              decentralized applications, and digital ownership. As a student, understanding Web3 
              opens doors to emerging career opportunities in software engineering, marketing, law, finance, and more.
              Quick terms: 
            </p>
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <h3>Crypto</h3>
                <p>Online currency that can be transferred anywhere and anytime around the world, using blockchain technology.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Blockchain</h3>
                <p>It's code that tracks all transactions done with cryptocurrency, meaning every buy, sell, and sends are public and on the blockchain.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Web3</h3>
                <p>Web1.0 and Web2.0 have been a thing since 1994, Web3.0 is said to be the next stage of the internet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqList = FAQ.faq;
  return (
    <section className="container">
      <h3>FAQ</h3>
      <div>
        {faqList.map(curr => (
          <Faq question={curr.question} answer={curr.answer} />
        ))}
      </div>
    </section>
  )
}

function WhatWellLearnSection() {
  return (
    <section className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2 className="text--center margin-bottom--lg">What We'll Learn</h2>
            <div className="row">
              <div className="col col--4">
                <div className="card">
                  <div className="card__header">
                    <h3>🔗 Blockchain Basics</h3>
                  </div>
                  <div className="card__body">
                    <p>Understand how blockchain technology works, including consensus mechanisms, cryptography, and distributed systems.</p>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card">
                  <div className="card__header">
                    <h3>💰 Cryptocurrency</h3>
                  </div>
                  <div className="card__body">
                    <p>Learn about Bitcoin, Ethereum, and other cryptocurrencies, including how to send, receive, and store them safely.</p>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card">
                  <div className="card__header">
                    <h3>🌐 Web3 Development</h3>
                  </div>
                  <div className="card__body">
                    <p>Build decentralized applications (dApps), smart contracts, and explore the Web3 ecosystem and tools.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text--center margin-top--lg">
              <Link
                className="button button--primary button--lg"
                to="/paths/foundation">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive guide to web3, blockchain, and cryptocurrency through hands-on learning."
    >
      <HomepageHeader />
      <main>
        <WhyWeb3Section />
        <FaqSection />
        <WhatWellLearnSection />
        
        {/* <PastUpdateLog /> */}
      </main>
    </Layout>
  );
}

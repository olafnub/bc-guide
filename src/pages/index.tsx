import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CoreContributors from '@site/src/components/CoreContributors';
import Heading from '@theme/Heading';

import { PostHogProvider } from 'posthog-js/react';

import styles from './index.module.css';

interface CustomFields {
  serviceId: string;
  templateId: string;
  emailJsPubKey: string;
  posthogPubKey: string;
  posthogHost: string;
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
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/paths">
              Start Learning
            </Link>
          </div>
          <div className={styles.inspirationNote}>
            <p>Inspired by The Odin Project's open-source learning approach</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const { posthogPubKey, posthogHost } = siteConfig.customFields as unknown as CustomFields;
  return (
    <PostHogProvider
      apiKey={posthogPubKey}
      options={{
        api_host: posthogHost,
        debug: process.env.NODE_ENV === "development",
      }}
    >
      <Layout
        title={`${siteConfig.title}`}
        description="A comprehensive guide to web3, blockchain, and cryptocurrency through hands-on learning."
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <CoreContributors />
        </main>
      </Layout>
    </PostHogProvider>
  );
}

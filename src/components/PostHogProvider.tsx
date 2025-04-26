import React from 'react';
import { PostHogProvider as BasePostHogProvider } from 'posthog-js/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface CustomFields {
  posthogPubKey: string;
  posthogHost: string;
}

export function PostHogProvider({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const { posthogPubKey, posthogHost } = siteConfig.customFields as unknown as CustomFields;

  // Disable tracking in test environment
  if (process.env.NODE_ENV === 'test') {
    return <>{children}</>;
  }

  return (
    <BasePostHogProvider
      apiKey={posthogPubKey}
      options={{
        api_host: posthogHost,
        autocapture: process.env.NODE_ENV === 'production', // Only autocapture in production
        capture_pageview: process.env.NODE_ENV === 'production', // Only capture pageviews in production
        loaded: (posthog) => {
          if (process.env.NODE_ENV !== 'production') {
            // Disable console logging in development
            posthog.opt_out_capturing();
          }
        },
      }}
    >
      {children}
    </BasePostHogProvider>
  );
}

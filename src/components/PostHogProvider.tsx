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

  return (
    <BasePostHogProvider
      apiKey={posthogPubKey}
      options={{
        api_host: posthogHost,
      }}
    >
      {children}
    </BasePostHogProvider>
  );
}

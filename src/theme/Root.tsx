import React from 'react';
import { PostHogProvider } from '@site/src/components/PostHogProvider';

// Default implementation, that you can customize
export default function Root({children}) {
  return <PostHogProvider>{children}</PostHogProvider>;
}

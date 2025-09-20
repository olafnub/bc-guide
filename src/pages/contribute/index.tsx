import React from 'react';
import Layout from '@theme/Layout';
import CoreContributors from '@site/src/components/CoreContributors';

const ContributeForm = () => {
  return (
    <Layout title="Contribute">
      <main className="container margin-vert--xl">
      <CoreContributors />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        </div>
      </main>
      
      {/* Fixed position Telegram message in bottom left */}
      <div style={{
        position: 'sticky',
        background: 'var(--assignment-box-primary)',
        borderRadius: '1rem',
        padding: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        maxWidth: '300px'
      }}>
        <p style={{ margin: 0, fontSize: 'bold', color: '#29784c'}}>
          Dm me on telegram @olafnub for any questions or to get invovled!
        </p>
      </div>
    </Layout>
  );
};

export default ContributeForm;

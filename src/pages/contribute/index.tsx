import React from 'react';
import Layout from '@theme/Layout';
import CoreContributors from '@site/src/components/CoreContributors';

const ContributeForm = () => {
  return (
    <Layout title="Contribute">
      <main className="container margin-vert--xl">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-dark))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Want to see a particular topic?
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--ifm-color-primary-lighter)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
             Help improve our guide by connecting with us on Telegram to share feedback and suggestions
            </p>
          </div>

          <div style={{
            background: 'var(--assignment-box-primary)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#94a3b8', 
              marginBottom: '1.5rem'
            }}>
              Can also dm us to speed up on releasing a topic!
            </p>
            <a
              href="https://t.me/olafnub"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--info button--lg"
            >
              @olafnub
            </a>
            <p style={{ 
              fontSize: '0.875rem',
              color: '#94a3b8',
              marginTop: '1rem'
            }}>
              Note: I'll never ask you for money or to download anything. Watch out for impersonators!
            </p>
          </div>

            <CoreContributors />
        </div>
      </main>
    </Layout>
  );
};

export default ContributeForm;

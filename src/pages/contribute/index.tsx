import React, { useRef } from 'react';
import Layout from '@theme/Layout';

const ContributeForm = () => {
  const formInput = useRef<HTMLFormElement | null>(null);

  return (
    <Layout title="Contribute">
      <main className="container margin-vert--lg">
        <div className="card shadow--md padding--lg">
          <h1 className="text--center">Contribute</h1>
          <p className="text--center margin-bottom--lg">
            Broken Link, mistyped words, or incorrect grammar?
          </p>

          <div className="text--center">
            <h3>Get involved through Telegram</h3>
            <p className="margin-bottom--sm">
              <a
                href="https://t.me/olafnub"
                className="button button--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                @olafnub
              </a>
            </p>
            {/* <p>
              (Remeber: I’ll never ask you for money or download anything, stay safe)
            </p> */}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContributeForm;

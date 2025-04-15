import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import postStyles from './createpost.module.css';
import Layout from '@theme/Layout';
import BlogPageExample from '@site/src/components/BlogPageExample';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface CustomFields {
  serviceId: string;
  templateId: string;
  emailJsPubKey: string;
}

const CreatePost = () => {
    const { siteConfig } = useDocusaurusContext();
    // Not sure how this works but it fixes the type error
    const { serviceId, templateId, emailJsPubKey } = siteConfig.customFields as unknown as CustomFields;

    const inputContent = useRef<HTMLFormElement | null>(null);

    // https://www.emailjs.com/docs/sdk/send/
    const options = {
      publicKey: emailJsPubKey,
      blockHeadless: true, // Do not allow headless browsers
      // blockList: {
      //   list: ['foo@emailjs.com', 'bar@emailjs.com'], // Block the suspended emails
      //   watchVariable: 'userEmail', // The variable contains the email address
      // },
      limitRate: {
        id: serviceId, // Set the limit rate for the application
        throttle: 10000, // Allow 1 request per 10s
      }
    }

    const handleFormSubmission = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm
            (
              serviceId, 
              templateId, 
              inputContent.current, 
              options
            )
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

  return (
    <Layout>
      <div className={postStyles.container}>
        {/* Left Side: Example Content */}
        <div className={postStyles.exampleContent}>
          <BlogPageExample />
        </div>

        {/* Right Side: User Input Form */}
        <div className={postStyles.userInput}>
          <form ref={inputContent} onSubmit={handleFormSubmission} className={postStyles.form}>
            <textarea
              id="content"
              name="content"
              rows={20}
              placeholder="Type your blog post content here..."
              required
              className={postStyles.textarea}
            />
            <button type="submit" className={postStyles.submitButton}>
              Send For Review
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import postStyles from './CreatePost.module.css';
import Layout from '@theme/Layout';
import BlogPageExample from '@site/src/components/BlogPageExample';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const CreatePost = () => {
    const { siteConfig: { customFields } } = useDocusaurusContext();

    const inputContent = useRef<HTMLFormElement | null>(null);

    const handleFormSubmission = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(customFields.serviceId, customFields.templateId, inputContent.current, customFields.emailJsPubKey)
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
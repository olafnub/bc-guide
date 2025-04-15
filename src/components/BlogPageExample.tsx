import React from 'react'

const BlogPageExample = () => {
  return (
    <>
    <div className="blog-example">
        <h1>Example Post ;) thank you for writing</h1>

        <p>Here are a few tips you might find useful for creating a blog post on here to be shared with everyone.</p>

        <hr />

        <p>Please include you (author), title, and any tags you'd like. Copy and paste this into your content section</p>
        <p>
          <ul>
            <li>Author (email/github/linkedin):</li>
            <li>Title:</li>
            <li>Tags (optional):</li>
          </ul>
        </p>

        <p>A blog post folder can be convenient to co-locate blog post images:</p>
        {/* <img src="./docusaurus-plushie-banner.jpeg" alt="Docusaurus Plushie" style="max-width: 100%; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" /> */}

        <p>The blog supports tags as well!</p>
    </div>
    </>
  );
}

export default BlogPageExample
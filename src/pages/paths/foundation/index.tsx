import React from 'react';
import Layout from '@theme/Layout';
import CourseLink from '@site/src/components/CourseLink';

const FoundationCourses = () => {

    const introduction = [
        {
            href: "/paths/foundation/how-this-course-will-work",
            courseTitle: "How This Course Will Work",
        },
        {
            href: "/paths/foundation/introduction-to-blockchain",
            courseTitle: "Introduction to Blockchain",
        },
        {
            href: "/paths/foundation/how-to-learn",
            courseTitle: "The Growth Mindset",
        },
        {
            href: "collegedao.io",
            courseTitle: "Join the Community",
        },
    ];
    const prerequisites = [

    ]
    const blockchain = [

    ]

  return (
    <Layout>
        <div className="container margin-vert--lg">
            <div className="text--center margin-bottom--lg">
                <img
                src="https://www.theodinproject.com/assets/badge-foundations-fc89cdc6.svg" // Replace with your logo/image URL
                alt="Foundations Logo"
                className="margin-bottom--md"
                />
                <h1>Foundations Course</h1>
                <p>
                    Welcome to the foundation! Feel free to hop around different courses to re-familiarize yourself with topics. 
                    Wish you the best of luck & have fun!
                </p>
            </div>

        {/* Course Content Section */}
        <div className="card shadow--md">
            <div className="card__header">
                <h3>Introduction</h3>
            </div>
            <div className="card__body">
                <ul className="list--unstyled">
                    {introduction.map((link, index) => (
                        <CourseLink 
                            key={index}
                            courseHref={link.href}
                            courseTitle={link.courseTitle}
                        />
                    ))}
                </ul>
            </div>
            <div className="card__body">
                <ul className="list--unstyled">
                    {prerequisites.map((link, index) => (
                        <CourseLink 
                            key={index}
                            courseHref={link.href}
                            courseTitle={link.courseTitle}
                        />
                    ))}
                </ul>
            </div>
            <div className="card__body">
                <ul className="list--unstyled">
                    {blockchain.map((link, index) => (
                        <CourseLink 
                            key={index}
                            courseHref={link.href}
                            courseTitle={link.courseTitle}
                        />
                    ))}
                </ul>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default FoundationCourses;
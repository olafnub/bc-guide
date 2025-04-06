import React from 'react';
import Layout from '@theme/Layout';
import CourseLink from '@site/src/components/CourseLink';

const FoundationCourses = () => {
  const topics = [
    {
      title: "Introduction",
      courses: [
        {
          href: "/paths/foundation/how-this-course-will-work",
          courseTitle: "How This Course Will Work",
        },
        {
          href: "/paths/foundation/introduction-to-web3",
          courseTitle: "Introduction to Web3",
        },
      ],
    },
    {
      title: "Editing",
      courses: [
        {
          href: "/paths/editing/bitcoin-origins",
          courseTitle: "Bitcoin Origins",
        },
        {
          href: "/paths/editing/consensus-mechanisms",
          courseTitle: "Consensus Mechanisms",
        },
        {
          href: "/paths/editing/encryption-and-hash",
          courseTitle: "Encryption and Hash",
        },
        {
          href: "/paths/editing/learn-blockchain-basics",
          courseTitle: "Learn Blockchain Basics",
        },
        {
          href: "/paths/editing/prequisites",
          courseTitle: "Prerequisites",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          {/* <img
            src="/img/logo.svg"
            alt="Foundations Logo"
            className="margin-bottom--md"
          /> */}
          <h1>Foundations Course</h1>
          <p>
            Welcome to the foundation! Feel free to hop around different courses to re-familiarize yourself with topics. 
            Wish you the best of luck & have fun!
          </p>
        </div>

        {/* Course Content Section */}
        {topics.map((topic, topicIndex) => (
          <div key={topicIndex} className="card shadow--md margin-bottom--lg">
            <div className="card__header">
              <h3>{topic.title}</h3>
            </div>
            <div className="card__body">
              <ul className="list--unstyled">
                {topic.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="course--link">
                    <CourseLink 
                      courseHref={course.href}
                      courseTitle={course.courseTitle}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FoundationCourses;
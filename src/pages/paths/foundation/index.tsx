import React from 'react';
import Layout from '@theme/Layout';
import CourseLink from '@site/src/components/CourseLink';
import topicsJSON from './foundation.json';

interface Topic {
  title: string;
  courses: {
    href: string;
    courseTitle: string;
  }[];
}

const FoundationCourses = () => {

  const topics: Topic[] = topicsJSON;

  return (
    <Layout>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
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
                    {topic.title.includes('(in the works)') ? (
                      <CourseLink 
                        courseHref={course.href}
                        courseTitle={course.courseTitle}
                        disabled={true}
                      />
                    ) : (
                      <CourseLink 
                        courseHref={course.href}
                        courseTitle={course.courseTitle}
                      />
                    )}
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
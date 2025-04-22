import React from 'react';
import Layout from '@theme/Layout';
import CourseLink from '@site/src/components/CourseLink';
import topicsJSON from './funzies.json';

interface Topic {
  title: string;
  courses: {
    href: string;
    courseTitle: string;
  }[];
}

const FunziesCourses = () => {
  const topics: Topic[] = topicsJSON;

  return (
    <Layout>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1 style={{color: '#FF69B4'}}>Crypto <span style={{color: '#00D1B2'}}>Funzies</span></h1>
          <p>
            Learn how people are making money in crypto (not financial advice)
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
                      disabled={true}
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

export default FunziesCourses;
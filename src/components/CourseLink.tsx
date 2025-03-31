import React from 'react';

interface CourseLinkProps {
  courseHref: string;
  courseTitle: string;
}

const CourseLink = ({ courseHref, courseTitle }: CourseLinkProps) => {
  return (
    <li className="margin-bottom--md background--hover">
      <a 
        href={courseHref} 
        className="course--link padding--sm"
      >
        <span 
          role="img" 
          aria-label="book" 
          style={{
            marginRight: '12px',
            fontSize: '1.5rem',
          }}
        >
          📖
        </span>
        <span 
          style={{
            color: 'var(--ifm-link-color)',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {courseTitle}
        </span>
      </a>
    </li>
  );
};

export default CourseLink;
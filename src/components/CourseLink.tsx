import React from 'react';
import Link from '@docusaurus/Link';

interface CourseLinkProps {
  courseHref: string;
  courseTitle: string;
  disabled?: boolean;
}

const CourseLink: React.FC<CourseLinkProps> = ({ courseHref, courseTitle, disabled }) => {
  return (
    <>
      {disabled ? (
        <Link className="courseLink">
          <button className="disabled" disabled={true}>
            {courseTitle}
          </button>
        </Link>
      ) : (
        <Link to={courseHref} className="courseLink">
          {courseTitle}
        </Link>
      )}
    </>
  );
};

export default CourseLink;
import React from 'react';
import Link from '@docusaurus/Link';

interface CourseLinkProps {
  courseHref: string;
  courseTitle: string;
}

const CourseLink: React.FC<CourseLinkProps> = ({ courseHref, courseTitle }) => {
  return (
    <Link to={courseHref} className="courseLink">
      {courseTitle}
    </Link>
  );
};

export default CourseLink;
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const courseId = useParams();
  console.log(courseId)

  return (
    <div className='nav-container' >
      
    </div>
  );
};

export default CourseDetails;
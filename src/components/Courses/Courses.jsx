import React, { useEffect } from 'react';
import { useGetCourseQuery } from '../../redux/features/courses/courseApi';
import Course from '../Course/Course';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: coursesData, isLoading } = useGetCourseQuery();
  console.log(coursesData);

  return (
    <div>
      <div className='grid gap-6 md:gap-y-8 lg:gap-y-12 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {coursesData?.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

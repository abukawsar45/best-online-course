import React from 'react';
import { useGetCourseQuery } from '../../redux/features/courses/courseApi';
import Course from '../Course/Course';
import {Link} from 'react-router-dom';

const CoursesForHomePage = () => {
  const { data: coursesData, isLoading } = useGetCourseQuery();
  console.log(coursesData);

  return (
    <div>
      <div className='grid gap-6 md:gap-y-8 lg:gap-y-12 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {coursesData?.slice(0, 6).map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
      <div className='mt-6 mb-2 text-center'>
        <Link
          to='/courseList'
          className='px-4 py-2 text-white font-bold rounded-3xl bg-blue-400 hover:bg-blue-600 '
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default CoursesForHomePage;

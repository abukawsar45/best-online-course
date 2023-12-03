import React from 'react';
import { useGetCourseQuery } from '../../redux/features/courses/courseApi';
import Course from '../Course/Course';

const Courses = () => {

    const { data: coursesData , isLoading } = useGetCourseQuery();
    console.log(coursesData);

  return (
    <div>
      <div className='grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {coursesData?.map((book) => (
          <Course key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
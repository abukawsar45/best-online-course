import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetCourseQuery } from '../../redux/features/courses/courseApi';
import LoaderSpinner from './../../utilities/LoaderSpinner';
import { GiAlliedStar, GiCalendar } from 'react-icons/gi';
import { BsCalendarDay } from 'react-icons/bs';

import RecommendedCourse from './../RecommendedCourse/RecommendedCourse';

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [getCourseData, setGetCourseData] = useState({});
  const [openSyllabus, setOpenSyllabus] = useState({});

  const { data: coursesData, isLoading } = useGetCourseQuery();
    useEffect(() => {
      window.scrollTo(0, 0);
      const specificCourse = coursesData.filter((course) => course._id === id);
      console.log(specificCourse);
      setGetCourseData(specificCourse[0]);
    }, []);

    if (isLoading) {
      return <LoaderSpinner />;
    }
  const {
    description,
    duration,
    enrollmentStatus,
    instructor,
    location,
    name,
    prerequisites,
    schedule,
    students,
    syllabus,
    thumbnail,
    _id,
  } =  getCourseData;
  console.log('line-15', syllabus);




  return (
    <div className=''>
      <div className='grid  grid-cols-12 gap-3 md:gap-5 lg:gap-8'>
        <div className='col-span-12 md:col-span-5'>
          <div>
            <h3 className='text-4xl font-bold'>{name}</h3>
            <p className='my-2 md:my-3 lg:my-4 text-xl lg:text-2xl font-semibold '>
              Instructor: {instructor}
            </p>
            <div className='my-3 md:my-6 lg:my-8 rounded-lg'>
              <div className='flex items-center mt-2 md:mt-4  lg:mt-6'>
                <div className='basis-1/2 flex items-center gap-4'>
                  <p className='font-semibold text-slate-700'>Status:</p>
                  <p className='font-semibold'>{enrollmentStatus} </p>
                </div>
                <div className='flex items-center gap-4 '>
                  <p className='text-slate-700 font-semibold'>Location:</p>
                  <p className='font-semibold'>{location} </p>
                </div>
              </div>
              <div className='flex items-center gap-4 mt-3 md:mt-4 lg:mt-8'>
                <p className=' text-slate-700 font-semibold'>Schedule:</p>
                <p className='font-semibold'>{schedule} </p>
              </div>
              <div className='my-2 md:mt-4 lg:mt-6 flex items-center gap-4'>
                <p className='text-xl '>Course Duration:</p>
                <p className='text-2xl font-bold'>{duration} </p>
              </div>
              <button className='mt-3 md:mt-6 bg-blue-500 font-semibold text-white rounded-lg border-2 border-blue-500 hover:text-blue-500 hover:border-blue-500   hover:bg-white px-10 py-3'>
                Inroll This Course
              </button>
            </div>
          </div>
        </div>
        <div className=' col-span-12 md:col-span-7'>
          <div>
            <img
              src={thumbnail || 'https://i.ibb.co/5RMWQpJ/images-2.jpg'}
              alt='course-pic'
              className='rounded-lg w-full'
              onError={(e) => {
                e.target.src = 'https://i.ibb.co/5RMWQpJ/images-2.jpg';
              }}
            />
          </div>
        </div>
      </div>
      <div className='mt-2 md:mt-4 lg:mt-8 md:flex gap-4'>
        <div className='mt-3 md:mt-4 lg:mt-8 md:basis-1/2 w-full'>
          <h4 className='my-1'>Topic:</h4>
          <ul>
            {prerequisites?.map((topic, index) => (
              <li key={index} className='bg-slate-200 px-3 py-2 rounded my-2'>
                {' '}
                {index + 1}. {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-3 md:mt-4 lg:mt-8 md:basis-1/2 w-full'>
          <h4 className='my-1'>Syllabus:</h4>
          <ul>
            {syllabus?.map((syllabusData, index) => {
              const { content, topic, week } = syllabusData;
              return (
                <div
                  key={syllabusData.topic}
                  className='bg-slate-200 px-3 py-2 rounded my-2'
                >
                  <button
                    onClick={() => setOpenSyllabus(week)}
                    className={`w-full flex items-center justify-between hover:bg-gray-300 rounded-md ${
                      openSyllabus === week ? '' : ''
                    } `}
                  >
                    {' '}
                    Week-{week}
                  </button>
                  {openSyllabus === week && <div>{content}</div>}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='mt-3 md:mt-4 lg:mt-8'>
        <p className='text-xl '>{description} </p>
      </div>
    </div>
  );
};

export default CourseDetails;
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetCourseQuery } from '../../redux/features/courses/courseApi';
import LoaderSpinner from './../../utilities/LoaderSpinner';
import { GiAlliedStar, GiCalendar } from 'react-icons/gi';
import { IoIosArrowDown, IoToggle } from 'react-icons/io';
import { BsCalendarDay } from 'react-icons/bs';

import RecommendedCourse from './../RecommendedCourse/RecommendedCourse';

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [getCourseData, setGetCourseData] = useState({});
  const [openSyllabus, setOpenSyllabus] = useState(null);

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


  const toggleSyllabus = (week) => {
    setOpenSyllabus((prev) => (prev === week ? null : week));
  };

  const handleInrollClass = (classId) => {
    console.log('line-51', classId)
  };

  return (
    <div className=''>
      <div className='grid  grid-cols-12 gap-3 md:gap-5 lg:gap-8'>
        <div className='col-span-12 md:col-span-5'>
          <div>
            <h3 className='text-4xl font-josefin'>{name}</h3>
            <p className='my-2 md:my-3 lg:my-4 text-xl font-orbit '>
              Instructor: {instructor}
            </p>
            <div className='my-3 md:my-6 lg:my-8 rounded-lg'>
              <div className='flex items-center mt-2 md:mt-3  lg:mt-4'>
                <div className='basis-1/2 flex items-center gap-4 font-josefin text-2xl'>
                  <p className='text-slate-700'>Status:</p>
                  <p className=''>{enrollmentStatus} </p>
                </div>
                <div className='flex items-center gap-4 font-josefin text-2xl'>
                  <p className='text-slate-700 '>Location:</p>
                  <p className=''>{location} </p>
                </div>
              </div>
              <div className='flex items-center gap-4 mt-3 md:mt-4 lg:mt-8 font-josefin text-lg'>
                <p className=' text-slate-700 '>Schedule:</p>
                <p className=''>{schedule} </p>
              </div>
              <div className='my-2 md:mt-4 lg:mt-6 flex items-center gap-4'>
                <p className='text-xl font-roboto'>Course Duration:</p>
                <p className='text-2xl font-exo'>{duration} </p>
              </div>
              <div className='my-2 md:mt-4 lg:mt-6 flex items-center gap-4'>
                <p className='text-xl font-roboto'>Total Students:</p>
                <p className='text-2xl font-exo'>{students?.length || 0} </p>
              </div>
              <button
                onClick={() => handleInrollClass(_id)}
                className='mt-3 md:mt-6 bg-blue-500 font-semibold text-white rounded-lg border-2 border-blue-500 hover:text-blue-500 hover:border-blue-500   hover:bg-white px-10 py-3'
              >
                Inroll This Course
              </button>
            </div>
          </div>
        </div>
        <div className=' col-span-12 md:col-span-7'>
          <div>
            <img
              src={
                thumbnail ||
                'https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg'
              }
              alt='course-pic'
              className='rounded-lg w-full h-full object-cover'
              onError={(e) => {
                e.target.src =
                  'https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg';
              }}
            />
          </div>
        </div>
      </div>
      <div className='mt-2 md:mt-4 lg:mt-8 md:flex gap-4'>
        <div className='mt-3 md:mt-4 lg:mt-8 md:basis-1/2 w-full'>
          <h4 className='my-1 py-2 text-2xl border-b border-green-500'>
            You can learn from this course:
          </h4>
          <ul>
            {prerequisites?.map((topic, index) => (
              <li
                key={index}
                className='bg-violet-400 px-3 py-2 rounded-full my-2 font-mukta text-xl'
              >
                {' '}
                {index + 1}. {topic}
              </li>
            ))}
          </ul>
        </div>
        {/* Syllabus */}
        <div className='mt-3 md:mt-4 lg:mt-8 md:basis-1/2 w-full'>
          <h4 className='my-1 py-2 text-2xl border-b border-green-500  '>
            Syllabus:
          </h4>
          <ul>
            {syllabus?.map((syllabusData, index) => {
              const { content, topic, week } = syllabusData;
              return (
                <div
                  key={syllabusData.topic}
                  className='bg-orange-200 px-3 py-2 rounded my-2'
                >
                  <button
                    onClick={() => toggleSyllabus(week)}
                    className={`w-full font-tektur px-2 py-1 flex items-center justify-between hover:bg-gray-300 rounded-md ${
                      openSyllabus === week
                        ? 'text-blue-500 bg-slate-200 hover:bg-slate-300 duration-300'
                        : 'duration-300'
                    } `}
                  >
                    Week-{week}
                    <span>
                      <IoIosArrowDown
                        className={`text-sm transform ${
                          openSyllabus === week
                            ? 'rotate-180 duration-300'
                            : 'duration-300'
                        }`}
                      />
                    </span>
                  </button>
                  {openSyllabus === week && (
                    <div className='mt-2 px-2 py-1'>
                      <h5 className='mt-1 md:my-2 font-nova text-xl '>
                        Topic: {topic}
                      </h5>
                      <p className='mb-1 md:mb-2 font-stoke'>
                        Content: {content}
                      </p>
                    </div>
                  )}
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
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetCourseQuery } from '../../redux/features/courses/courseApi';
import { GiAlliedStar, GiCalendar } from 'react-icons/gi';
import { BsCalendarDay } from 'react-icons/bs';

import RecommendedCourse from './../RecommendedCourse/RecommendedCourse';

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [getCourseData, setGetCourseData] = useState([]);

  const { data: coursesData, isLoading } = useGetCourseQuery();
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
  } = getCourseData.length > 0 ? getCourseData[0] : {};
  console.log('line-15', name);

  useEffect(() => {
    const specificCourse = coursesData.filter((course) => course._id === id);
    console.log(specificCourse);
    setGetCourseData(specificCourse);
  }, []);


  return (
    <div className=''>
      <div className=' md:my-36 px-2 md:px-4 lg:px-12 my-20 lg:mt-48 lg:mb-32  '>
        <div>
          <div className='grid  grid-cols-12 gap-3 md:gap-5 lg:gap-8'>
            <div className='col-span-12 md:col-span-5'>
              <div>
                <h3 className='text-4xl font-bold'>{name}</h3>
                <p className='my-2 md:my-3 lg:my-4 text-xl'>{name}</p>
                <div className=' flex items-center'>
                  <span className='text-xl'>{name }</span>
                </div>
                <div className='my-3 md:my-6 lg:my-8  p-2 md:p-4 lg:p-6 shadow-lg shadow-slate-300 rounded-lg'>
                  <div className='flex justify-between items-center'>
                    <p className='text-xl '>Course Duration:</p>
                    <p className='text-2xl font-bold'>{duration} </p>
                  </div>
                  <div className='flex items-center gap-3 my-2 md:my-6 lg:my-8'>
                    <p className='text-xl '>{instructor}</p>
                  </div>
                  <div className='flex justify-between items-center gap-3 my-2 md:my-4 lg:my-6'>
                    <button className='bg-[#0076CE] font-semibold text-white rounded-lg border-2 border-[#0076CE] hover:text-[#0076CE] hover:border-[#0076CE]   hover:bg-white px-10 py-3'>
                      Request Proposal
                    </button>
                    <button className='text-[#0076CE] font-semibold bg-white rounded-lg border-2 border-[#0076CE] hover:text-white hover:bg-[#0076CE] px-10 py-3'>
                      Chat with me
                    </button>
                  </div>
                </div>
                <div className='bg-gray-50 p-2 md:p-4 lg:p-6 shadow-lg shadow-slate-300 rounded-lg'>
                  <h3 className='text-4xl font-bold'>What People say?</h3>
                  <p className='my-2 md:my-3 lg:my-4 text-xl'>
                    {description}
                  </p>
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
                <div className='mt-2 md:mt-4 lg:mt-8'>
                  <h3 className='text-4xl font-bold'>About {name}</h3>
                  <div className='flex justify-between items-center mt-2 md:mt-4  lg:mt-6'>
                    <div>
                      <p className='uppercase font-semibold text-[#999999] mb-2'>
                        Status:
                      </p>
                      <p className='uppercase font-semibold'>{enrollmentStatus} </p>
                    </div>
                    <div>
                      <p className='uppercase text-[#999999] mb-2 font-semibold'>
                        Location
                      </p>
                      <p className='uppercase font-semibold'>{location} </p>
                    </div>
                    <div>
                      <p className='uppercase text-[#999999] mb-2 font-semibold'>
                        AVERAGE RESPONSE TIME
                      </p>
                      <p className='uppercase font-semibold'>
                        {schedule}{' '}
                      </p>
                    </div>
                  </div>
                  <div className='mt-3 md:mt-4 lg:mt-8'>
                    <p className='uppercase text-[#999999] mb-2 font-semibold '>
                      about
                    </p>
                    <p className='text-xl '>{description} </p>
                  </div>
                  <div className='flex justify-between'>
                    <div className='mt-3 md:mt-4 lg:mt-8'>
                      <p className='uppercase text-[#999999] mb-2 font-semibold '>
                        services offer
                      </p>
                      <p className='text-xl mt-2 '>
                        {syllabus?.map((service) => (
                          <li key={service} className=''>
                            {service}
                          </li>
                        ))}{' '}
                      </p>
                    </div>
                    <div className='mt-3 md:mt-4 lg:mt-8'>
                      <p className='uppercase text-[#999999] mb-2 font-semibold '>
                        why me?
                      </p>
                      <p className='text-xl mt-2 '>
                        {students?.map((benefit) => (
                          <li key={benefit} className=''>
                            {benefit}
                          </li>
                        ))}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
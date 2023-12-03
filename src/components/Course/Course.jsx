import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  console.log(course);
  // const {_id,name, instructor, duration, description, duration,enrollmentStatus, }
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
  } = course || {};

  console.log(course);

  return (
    <div className=''>
      <div className='overflow-hidden relative transition duration-300 transform md:hover:-translate-y-2 rounded'>
        <div>
          <img
            src={
              thumbnail ||
              'https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg'
            }
            alt='course-pic'
            className='md:rounded-lg w-full object-cover h-44 md:h-56 lg:h-64 max-h-80'
            onError={(e) => {
              e.target.src =
                'https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg';
            }}
          />
        </div>
        <div className='bg-black px-6 py-4 bg-opacity-60 md:opacity-0 md:hover:opacity-100 text-slate-200 md:absolute inset-0 transition-opacity duration-300 flex flex-col'>
          <p className='text-xl font-kenia'>{name} </p>
          <br />
          <p className='font-josefin'>{description.substring(0, 60)}... </p>
          <div className='mt-auto flex justify-between items-center'>
            <p className='font-josefin'>
              Total Students: {students.length || 0}
            </p>
            <Link to={`../courseDetails/${_id}`}>
              <button className=' px-4 py-2  font-medium text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <h4 className='font-bold text-xl '>{name} </h4>
      </div>
    </div>
  );
};

export default Course;

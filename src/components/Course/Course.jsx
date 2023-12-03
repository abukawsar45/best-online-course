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

  // console.log({
  //   description,
  //   duration,
  //   enrollmentStatus,
  //   instructor,
  //   location,
  //   name,
  //   prerequisites,
  //   schedule,
  //   students,
  //   syllabus,
  //   thumbnail,
  //   _id,
  // });
  return (
    <div className=''>
      <div className='overflow-hidden relative transition duration-300 transform hover:-translate-y-2 rounded'>
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
        <div className='bg-black px-6 py-4 bg-opacity-60 opacity-0 hover:opacity-100 text-slate-200 absolute inset-0 transition-opacity duration-300 flex flex-col'>
          <p className='text-xl'>{name} </p>
          <br />
          <p>{description.substring(0, 60)}... </p>
          <div className='mt-auto flex justify-between items-center'>
            <p>Total Students: {students.length || 0}</p>
            <Link to={`../courseDetails/${_id}`}>
              <button className='px-4 py-2  font-medium text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        <h4 className='font-thin text-xl'>{name} </h4>
      </div>
    </div>
  );
};

export default Course;

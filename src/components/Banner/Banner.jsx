import BannerImage from '../../assets/teacher.webp';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='px-2 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 md:flex bg-slate-200'>
      <div className=' w-full md:basis-1/2 flex flex-col justify-center '>
        <div className=''>
          <p className='bg-yellow-400 px-3 py-1 inline rounded-2xl text-sm font-thin'>
            Best Learning Platform!
          </p>
        </div>
        <h2 className='max-w-lg my-6  text-3xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl font-orbit'>
          Learn without <br />
          <span className='inline-block text-blue-400'>limits</span>
        </h2>
        <p className='text-base text-gray-700 md:text-lg font-nova'>
          Learn new skills, earn credit toward a degree, or advance your career
          at your own pace. Join our community to stay up to date, and build
          your bridges anywhere, anytime with free courses on the Tech Camp
          platform.
        </p>
        <div className='my-6'>
          <Link
            to='/courseList'
            className='inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700 md:w-auto md:mr-4'
          >
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>Visit Our Courses</p>
            </div>
          </Link>
          <Link
            to='/about'
            className=' h-12 px-6 mb-3  rounded shadow-md  md:mb-0  inline-flex items-center font-semibold text-gray-800 transition-colors border-2 hover:border-blue-500 border-slate-200 duration-200 hover:text-blue-500'
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className='hidden md:block md:basis-1/2 '>
        <img src={BannerImage} alt='banner' />
      </div>
    </div>
  );
};

export default Banner;
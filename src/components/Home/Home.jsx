import React,{useEffect} from 'react';
import Banner from '../Banner/Banner';
import CoursesForHomePage from '../CoursesForHomePage/CoursesForHomePage';
import LearnAndGrow from '../LearnAndGrow/LearnAndGrow';


const Home = () => {

  useEffect(()=>{
  window.scrollTo(0,0)
    }, [])

  return (
    <div className=''>
      <Banner />
      <CoursesForHomePage />
      <LearnAndGrow/>
    </div>
  );
};

export default Home;
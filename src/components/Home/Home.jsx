import React from 'react';
import Banner from '../Banner/Banner';
import CoursesForHomePage from '../CoursesForHomePage/CoursesForHomePage';
import LearnAndGrow from '../LearnAndGrow/LearnAndGrow';


const Home = () => {


  return (
    <div className=''>
      <Banner />
      <CoursesForHomePage />
      <LearnAndGrow/>
    </div>
  );
};

export default Home;
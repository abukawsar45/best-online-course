import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Dashboard from "../components/Dashboard/Dashboard";
import About from '../components/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader: ({ params }) => fetch('/data.json'),
      },
      {
        path: '/courseList',
        element: <Courses />,
      },
      {
        path: '/course/:id',
        element: <CourseDetails />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;

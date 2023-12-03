import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Dashboard from "../components/Dashboard/Dashboard";
import About from '../components/About/About';
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

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
        path: '/courseDetails/:id',
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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;

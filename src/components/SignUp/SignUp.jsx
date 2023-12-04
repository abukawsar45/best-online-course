import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from './../../assets/login.svg';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/features/user/userSlice';

const SignUp = () => {
  const { handleSubmit, register, control } = useForm();
  const password = useWatch({ control, name: 'password' });
  const confirmPassword = useWatch({ control, name: 'confirmPassword' });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const ab = useSelector((state) => state.userSlice);
  const {email, isLoading, isError, error } = ab || {};
  console.log(ab)
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      password !== undefined &&
      password !== '' &&
      confirmPassword !== undefined &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (isError && error)
    {
      toast.error(error);
      console.log(' last')
    }
  }, [isError, error]);

  useEffect(() => {
    if (!isLoading && email)
    {
      navigate('/')
      toast.success('Signup successfull')
    }
  },[isLoading, email])


  const onSubmit = ({ name, email, password }) => {
    dispatch(createUser({
      email,
      password,
      name,
    }))
    console.log(name, email, password);
  };

  const handleGoogleLogin = () => {
    // Google Login
  };

  return (
    <div className='flex max-w-7xl mx-auto h-screen items-center'>
      <div className='w-1/2'>
        <img src={loginImage} className='h-full w-full' alt='' />
        <Toaster />
      </div>
      <div className='w-1/2  grid place-items-center'>
        <div className='bg-slate-200 w-full max-w-sm rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Sign up</h1>
          <form className='space-y-5 w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col items-start'>
              <label htmlFor='email'>Name</label>
              <input
                type='text'
                id='name'
                className='w-full py-2 px-3 rounded-md'
                {...register('name')}
              />
            </div>
            <div className='flex flex-col items-start'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                className='w-full py-2 px-3 rounded-md'
                {...register('email')}
              />
            </div>
            <div className='flex flex-col items-start'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                className='w-full py-2 px-3 rounded-md'
                {...register('password')}
              />
            </div>
            <div className='flex flex-col items-start'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input
                type='password'
                id='confirm-password'
                className='w-full py-2 px-3 rounded-md'
                {...register('confirmPassword')}
              />
            </div>
            <div className='!mt-8 '>
              <button
                type='submit'
                className='px-3 py-2 rounded-full hover:text-white font-josefin bg-blue-400 hover:bg-blue-600 w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                disabled={disabled}
              >
                Sign up
              </button>
            </div>
            <div>
              <p>
                Already have an account?{' '}
                <span
                  className='text-blue-500 hover:underline cursor-pointer'
                  onClick={() => navigate('/login')}
                >
                  Login
                </span>
              </p>
            </div>
            <button
              type='button'
              onClick={handleGoogleLogin}
              className='flex justify-center items-center space-x-2 border m-3 font-josefin border-gray-300 hover:bg-blue-500 hover:text-white bg-white  border-rounded cursor-pointer px-3 py-2 rounded-lg'
            >
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignUp;

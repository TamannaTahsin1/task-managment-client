import { Link } from "react-router-dom";
import animation from './register.json'
import Lottie from "lottie-react";
const Registration = () => {
  return (
    <div className='hero h-[85vh] bg-base-200'>
    <div className='hero-content flex-col lg:flex-row-reverse'>
    <div className="flex flex-col items-center justify-center lg:flex-row-reverse gap-5"> 
    <div className='card w-full lg:w-[900px] max-w-sm shadow-2xl bg-base-100'>
        <h1 className='text-3xl font-bold text-center text-red-500 p-4'>
          Register
        </h1>
        <form className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              name='name'
              type='text'
              placeholder='name'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              name='email'
              type='email'
              placeholder='ab@example.com'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Profession</span>
            </label>
            <input
              name='profession'
              type='text'
              placeholder='Profession'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              name='password'
              type='password'
              placeholder='password'
              className='input input-bordered'
              required
            />
          </div>  
          <div className='form-control mt-6'>
            <button className='btn bg-red-500 text-white'>Register</button>
          </div>
          <p className='p-4'>
            Do not have an account?
            <Link className='text-red-500 font-semibold ml-2' to='/login'>
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="w-72 lg:w-[500px]">
      <Lottie loop={true} animationData={animation}></Lottie>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Registration;

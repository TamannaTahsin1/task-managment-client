import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
    const { googleLogin} = useAuth()
    const handleSocialLogin = (media) => {
     media()   
     .then(res => console.log(res))
     .catch(err => console.error(err))
    }
    return (
        <div>
        <div className='divider'>continue with</div>
        <div className='text-center'>
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            className='btn bg-slate-200 text-black font-bold'>
            <FcGoogle></FcGoogle> Log in with Google
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;
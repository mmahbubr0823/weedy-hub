import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UswAuth/useAuth";
import { saveUser } from "../../api/allApi";
const SocialLogin = () => {
    const { googleLogIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // social log in 
    const handleGoogleLogin = async () => {
        try {
            // login by Google
           const res = await googleLogIn();
            // save user in db 
            await saveUser(res.user);
            toast.success('User successfully logged in');
            navigate(location?.state ? location.state : '/');
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div className='text-center my-3'>
            <table className="mx-auto w-3/4">
                <tbody>
                    <tr>
                       <td className="border-0"> <hr /></td>
                        <td className="w-[1px] px-2 border-0">Or</td>
                        <td className="border-0"><hr /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleGoogleLogin} className='flex items-center mb-3 mx-auto gap-5 border-2 px-10 py-4 rounded-[50px] bg-[#f48271] hover:bg-[#da71f4]'>
                <span><FaGoogle></FaGoogle></span>
                <p>Continue with google</p>
            </button>
        </div>
    );
};

export default SocialLogin;
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UswAuth/useAuth";
import Container from "../../Layouts/Container/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import Title from "../../Shared/Title/Title";

const Login = () => {
    const { logInUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        // password validation 
        if (!(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/).test(password)) {
            return toast.error('Your password should contain at least one upperCase, one special character and more than 6')
        }
        // login user 
        try {
            // logInUser 
            await logInUser(email, password);
            toast.success('User successfully logged in')
            navigate(Location.state ? Location.state : '/')
        }
        catch (err) {
            toast.error('Your credentials do not match.')
        }

    }
    return (
        <Container>
            <Title title={'Login'}></Title>
            <div className="relative my-10 bg-[#f0e4fa] flex justify-between flex-col md:flex-row gap-5 rounded-xl bg-transparent p-8 bg-clip-border text-gray-700 shadow-none">
                <div>
                    <img src="./login.svg" alt="" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-md p-5 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="relative grid mx-4 mb-4 -mt-[60px] overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
                        <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Sign In
                        </h3>
                    </div>
                    <div className="my-4 flex flex-col gap-6">

                        <div className="relative mt-5 h-11 w-full min-w-[200px]">
                            <input
                                {...register("email", { required: true })}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                    </div>
                    <div className="inline-flex items-center">
                        <label
                            className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"

                            data-ripple-dark="true"
                        >
                            <input
                                type="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                id="checkbox"
                            />
                            <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"

                                >
                                    <path

                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"

                                    ></path>
                                </svg>
                            </span>
                        </label>
                        <label
                            className="mt-px cursor-pointer select-none font-light text-gray-700"

                        >
                            <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                I agree the
                                <a
                                    className="font-medium transition-colors hover:text-pink-500"
                                    href="#"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </p>
                        </label>
                    </div>
                    <input
                        className=" mt-6 cursor-pointer block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit" value="Sign In" />
                    <SocialLogin></SocialLogin>

                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        New here?
                        <Link to='/signUp'><span className="font-medium text-pink-500 transition-colors hover:text-blue-700"> Sign Up</span></Link>
                    </p>
                </form>
            </div>
        </Container>
    );
};

export default Login;
// import { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';


// const Login = () => {

//     const [error, setError] = useState('');

//     const { signIn, signInWithGoogle, user } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || '/'

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;


//         signIn(email, password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 event.target.reset();
//                 navigate(from, { replace: true })
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }

//     const handleGoogleSignIn = () => {
//         signInWithGoogle()
//             .then(result => {
//                 const loggedUser = result.user;
//                 navigate(from, { replace: true })
//             })
//             .catch(error => { })
//     }

//     return (

//         <div>


//             <div className="hero ">
//             {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
//                 <div className="hero-content my-6 ">
//                     <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <form action="" onSubmit={handleLogin} >
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="email" placeholder="email" name="email" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Password</span>
//                                     </label>
//                                     <input type="password" placeholder="password" name="password" className="input input-bordered" />
//                                     <label className="label">
//                                     </label>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <button className="btn btn-primary">Login</button>
//                                 </div>
//                                 {
//                                     !user &&
//                                     <div className='flex justify-center'>
//                                         <button onClick={handleGoogleSignIn} className="btn btn-wide  mt-3">Login with Google</button>
//                                     </div>
//                                 }
//                             </form>
//                             <p className='my-4 text-center'>New to <span className=' font-bold'>Wonder Land</span> ? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

// =========================================



import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Pages/Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
// import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const [error, setError] = useState('');

    const { signIn, googleSignIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                event.target.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log in success',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => { })
    }

    return (

        <div className=''>
            <div className=" min-h-screen">

                <div className="hero-content md:lg:flex">
                    <div>
                        <img src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg" alt="" className='hidden md:lg:block' />
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form action="" onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                    <label className="label">
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-default">Login</button>
                                </div>

                                {
                                    !user && <SocialLogin></SocialLogin>
                                }
                            </form>

                            <p className='my-4 text-center'>New to <span className=' font-bold'>PhoneVerse</span> ? <Link className='text-sky-400 font-bold' to="/signup">Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
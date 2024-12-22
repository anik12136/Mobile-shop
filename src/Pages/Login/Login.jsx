import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const [error, setError] = useState('');

    const { signIn, signInWithGoogle, user } = useContext(AuthContext);
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
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => { })
    }

    return (

        <div>


            <div className="hero ">
            {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                <div className="hero-content my-6 ">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form action="" onSubmit={handleLogin} >
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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                {
                                    !user &&
                                    <div className='flex justify-center'>
                                        <button onClick={handleGoogleSignIn} className="btn btn-wide  mt-3">Login with Google</button>
                                    </div>
                                }
                            </form>
                            <p className='my-4 text-center'>New to <span className=' font-bold'>Wonder Land</span> ? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../firebase-config/firebase';
// import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
const SignUp = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photoUrl.value;



        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;

                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name, photo);
            })
            .catch(error => {

                setError(error.message);
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('user name and photo updated')
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row my-3">
                <div className="w-1/2 mr-12">
                    {/* <img src={img} alt="" /> */}
                    <img alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        {/* <form onSubmit={handleSignUp}> */}
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
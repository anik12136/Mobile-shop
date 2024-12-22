// import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { app } from '../../firebase-config/firebase';
// // import app from '../../Firebase/firebase.config';


// const auth = getAuth(app);
// const SignUp = () => {

//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setSuccess('');
//         setError('');
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const name = event.target.name.value;
//         const photo = event.target.photoUrl.value;



//         if (password.length < 6) {
//             setError('Please add at least 6 characters in your password')
//             return;
//         }

//         createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const loggedUser = result.user;

//                 setError('');
//                 event.target.reset();
//                 setSuccess('User has been created successfully');
//                 updateUserData(result.user, name, photo);
//             })
//             .catch(error => {

//                 setError(error.message);
//             })
//     }

//     const updateUserData = (user, name, photo) => {
//         updateProfile(user, {
//             displayName: name,
//             photoURL: photo
//         })
//             .then(() => {
//                 console.log('user name and photo updated')
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }


//     return (
//         <div className="hero  bg-base-200">
//             <div className="hero-content flex-col lg:flex-row my-3">
//                 <div className="w-1/2 mr-12">
//                     {/* <img src={img} alt="" /> */}
//                     <img alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                         {/* <form onSubmit={handleSignUp}> */}
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="text" name='password' placeholder="password" className="input input-bordered" />

//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo URL</span>
//                                 </label>
//                                 <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                             </div>
//                         </form>
//                         <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

// ========================================


import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';




const SignUp = () => {

    // show password function
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // ------------------

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const insertUser = { name: data.name, email: data.email, image: data.photoURL, role: data.role }
                        console.log(insertUser);
                        fetch('http://localhost:7000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(insertUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <>
            {/* <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet> */}
            <div className=''>
                <div className=" min-h-screen">
                    <div className="hero-content flex ">
                        <div className="text-center lg:text-left">
                            <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg" alt="" className='h-full' />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            {/* input form */}
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                {/* input field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Role</span>
                                    </label>
                                    <input type="text"  {...register("role", { required: false })} name="role" value="buyer" placeholder="role" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                   
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>

                                        {/* password section */}
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message: "Password must be at least 8 characters",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                    message:
                                                        "Password must include uppercase, lowercase, number, and special character (@, !, #, etc.)",
                                                },
                                            })}
                                            placeholder="Password"
                                            className="input input-bordered"
                                        />
                                    </div>

                                    {/* Show/Hide Toggle Button */}
                                    <div className='flex justify-end -mt-11'>
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className=""
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>


                                    {errors.password && (
                                        <p className="text-red-600">{errors.password.message}</p>
                                    )}


                                


                                    {/* submit */}
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-default" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='mb-5 text-center'>Already have an account ? <Link to="/login" className='text-sky-600 font-bold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

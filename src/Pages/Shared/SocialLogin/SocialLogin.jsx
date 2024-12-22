import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
     const from = location.state?.from?.pathname || "/";

   
   
     const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:8000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center">
            <span>Google Log in</span>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ms-2">
                    <FaGoogle></FaGoogle>
                </button>
                
            </div>
        </div>
    );
};


export default SocialLogin;
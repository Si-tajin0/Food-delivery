import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { setUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // handel Login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                swal("Good job!", "Account has been created!", "Success");
                history.push(redirect_uri);
            })
            .catch((err) => {
                swal("Something Went Wrong!", `${err.message}`, "error")
            });
    }
    return (
        <section className="banner-bg-1">
            <div className="border-t border-gray-200">
                <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg mx-auto w-1/5 py-3 cursor-pointer hover:bg-gray-500 mt-24" onClick={handleGoogleLogin}>
                    <FcGoogle className="w-6 h-6" />
                    <span className="text-white">Sign In With Google</span>
                </div>
            </div>
        </section>
    );
};

export default Login;
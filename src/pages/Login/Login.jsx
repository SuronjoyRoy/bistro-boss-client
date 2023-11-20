import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const loacation = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // sign in
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleCaptcha = () => {
        const user_capthcha_value = captchaRef.current.value;
        if (validateCaptcha(user_capthcha_value)) {
            setDisable(false);
        }
        else {
            setDisable(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign In</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" ref={captchaRef} placeholder="Type here" className="input input-bordered" />
                                <button onClick={handleCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='px-6'><small>New hete?<Link to='/signup'>Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
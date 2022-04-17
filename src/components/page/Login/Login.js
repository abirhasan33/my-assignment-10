import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init';
import '../../../styles/Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        console.log(validEmail);
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...errors, email: ""})
        }
        else{
            setErrors({...errors, email: "Invaild email"})
            setUserInfo({...userInfo, email: ""})
        }
     }

        const handlePasswordChange = (e) => {
            const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        console.log(validPassword);
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""})
        }
        else{
            setErrors({...errors, password: "Minimun 6 chracters"});
            setUserInfo({...userInfo, password: ""})
        }
        }

        const handleLogin = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
        }

        useEffect(()=>{
            if(hookError){
                switch(hookError?.code){
                    case "auth/invalid-email":
                        toast("invalid-email-verified");
                        break;
                    case "auth/invvalid-password":
                        toast('Wroing password. Intruder!!')
                        break;
                    default:
                        toast('something went wrong')
                }
            }
        },[hookError])

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";
        useEffect(()=> {
            if(user){
                navigate(from)
            }
        },[user])

    return (
        <div className='login-container'>
            <div className="login-title">LOGIN</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange}/>
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <button>Login</button>
                <p className='pt-2 px-2 text-decoration-none'>Don't have an account? <Link to="/register">Register</Link></p>
                <ToastContainer />
            </form>
                <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
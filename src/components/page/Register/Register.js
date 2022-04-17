import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init';
import '../../../styles/Login.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';


const Register = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);


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

        const handleConfirmPasswordChange = (e) => {
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPassword: e.target.value});
            setErrors({...errors, password: ""})
        }
        else{
            setErrors({...errors, password: "Password don't match"});
            setUserInfo({...userInfo, confirmPassword: ""})
        }
        }

        const handleLogin = (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
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
            <div className="login-title">Please Register</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange}/>
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <input type="password" placeholder='Confirm Password' onChange={handleConfirmPasswordChange}/>
                <button>Login</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Register;
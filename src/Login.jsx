// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'

import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";




const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState(false);

   

        const handleLogin = async () => {
            let result = await fetch(`https://localhost:44351/api/Users/${email},${password}`)
            if(result.status!=200){
                // setError("Invalid email or password");
                setMsg(true)
            }
            else{
                setMsg(false);
                navigate('/mainpage');
            }
            result=await result.json();
            console.log(result);
            localStorage.setItem("user", JSON.stringify(result))
            // .then((result) => {
            if (email === 'admin@gmail.com' && password === 'Admin@123') {
                console.log('hi')
                localStorage.setItem("user", JSON.stringify(result))
                navigate('/admin');
            }
            else{
                //setData(result.data)
                //alert(result.data.userId)
                //mainpage();
            }
    
        }





        // const responseMessage = (response) => {
        //     console.log(response);
        // };
        // const errorMessage = (error) => {
        //     console.log(error);
        // };





    return ( 
        <div className="main-login-container">
        <div className="icons-container">
            <b><FontAwesomeIcon icon={faPlaneDeparture}/> AirTicket</b>
        </div>
        <div className="email-pass">
            
                <input className="main-e" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input className="main-e" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        </div>
        {msg && <p style={{color : 'red' }}> Invalid Email or Password  </p>}
        <div className="login-but">
            <div className="new">
                <a href="/register"> Create Account</a>
            </div>
            <button className="l-button" onClick={()=>handleLogin()}>Login</button>
            
            
            
            <GoogleLogin
             onSuccess={credentialResponse => {
              console.log(credentialResponse);
            //   const user = jwt_decode(credentialResponse.credential);
            //   console.log(user);
              axios.get(`https://localhost:44351/api/Users/${email},${password}`
                      ).then((response)=>{
                      console.log(response.data);
                    //   localStorage.setItem("Authtoken",JSON.stringify(response.data.jwt));
                    //   localStorage.setItem("Name",JSON.stringify(response.data.id.name));
                      navigate('/admin');
                  }).catch(err=>{
                      alert(err.response.data);
                  });
 
            }}
         
            onError={() => {
              console.log('Login Failed');
            }}
         
          />
            



        </div>
    </div>
     );
}
 
export default Login;
// import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
//import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
//import {Redirect} from "react-router"
import { useHistory } from 'react-router-dom'

const ForgetPasswordPage  = () => {
    const [data,setData] = useState({
        email: '',
        password:'',
    } )
    const {email,password} =data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let history = useHistory();
  const[auth,setAuth]=useState(false);
 const submitHandler = e=>{
    e.preventDefault();
    if (password.length <8 || password.length >14){
        alert("Password should be minimum 8 characters long");
      }
      else
      {

        console.log(JSON.stringify(data));
        //   let finalData = data['data'];
        //  history.push("/user/login");       

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        setTimeout(async () => {
            const response = await fetch('http://localhost:8080/user/forgetpassword', requestOptions)

            if (response.status >= 200 && response.status <= 299) {
                let userData = JSON.stringify(await response.json());
                console.log(userData);

                if (userData === 'false') {
                    alert('login credentials does not match');
                }
                else if (userData === 'true') {
                   // alert('Data Inserted');
                    //write here to clear
                    history.push("/login");
                }
                else {
                    alert(userData);
                }
            }
            else {
                let userData = (await response.json());
                alert(userData);
            }

        }, 3000);

    }

}
 
    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            {/* <h5>Enter your email address and we will send you a new password</h5> */}
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label id="reset_pass_lbl">new password</label><br/>
                    <input type="password" name="password"   />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Submit</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
    }
export default ForgetPasswordPage

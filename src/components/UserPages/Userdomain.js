import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import { useHistory } from 'react-router-dom'

const App = () => {
    const [data,setData] = useState({
        email: '',
        username : '',
        mobileNumber:'',
        password:'',
        confirmPassword:'',
    } )
    const {email,username,mobileNumber,password,confirmPassword} =data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
  
  let history = useHistory();
 const[auth,setAuth]=useState(false);
 const submitHandler = e=>{
    e.preventDefault();
  
    if(username.length <5){
        alert("username must be atleast 5 characters");
    }
   else if(mobileNumber.length !==10){
       alert("mobile number should be 10 digits");
   }
   else if (password.length <8 || password.length >14){
     alert("Password should be minimum 8 characters long");
   }
    else if(password !== confirmPassword){
        alert("passwords are not matching");
    }
    else{
        
          console.log(data);
         history.push("/login");       
      
    }
  
  }
    return (
        <header>
        
        
        <div className="buttons text-center">
    
                <button className="secondary-button"   >User
                </button>
          
            <Link to="/admin">
                <button className="primary-button" id="reg_btn"><span>Admin</span></button>
            </Link>
        </div>
    
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
         
            
            <form onSubmit={submitHandler}>
                   <p>Enter email</p>
                   <input type="email" name="email" id="email" value={email} onChange={changeHandler} required /> <br />
                   <p>Enter Username</p>
                   <input type="text" name="username" id="username" value={username} onChange={changeHandler} required /> <br />
                   <p>Enter MobileNumber</p>
                   <input type="number" name="mobileNumber" id="mobileNumber" value={mobileNumber} onChange={changeHandler} required /> <br />
                   <p>Enter Password</p> 
                   <input type="password" name="password" id="password" value={password} onChange={changeHandler} required /> <br />
                   <p>Confirm Password</p>
                   <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={changeHandler} required  /> <br />
              
                   
                   <button  onClick={()=> setAuth(true)} id="submitButton" type="submit" name="submit">Submit</button>
                </form>
                <footer>
                <p>Already user? <Link to="/Login">Login</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div></header>

    )
}
export default App
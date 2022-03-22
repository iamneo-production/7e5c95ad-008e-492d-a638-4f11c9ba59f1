import React,{useState} from 'react'
import { Link } from 'react-router-dom'
//import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
//import {Redirect} from "react-router"
import { useHistory } from 'react-router-dom'

const App = () => {
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
          // axios.post('',data);
    console.log(data);
    history.push("/Home");       
 }
}

    return (
        <header>
            <div className="buttons text-center">
    
    <button className="secondary-button"   >User
    </button>

<Link to="/AdminLoginPage">
    <button className="primary-button" id="reg_btn"><span>Admin</span></button>
</Link>
</div>
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={submitHandler}>                <p>
                    <label>email address</label><br/>
                    <input type="email" name="email" id="email" value={email} onChange={changeHandler} required /> <br />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" id="password" value={password} onChange={changeHandler} required /> <br />

                </p>
                <p>
                <button  onClick={()=> setAuth(true)} id="LoginButton" type="submit" name="submit">Login</button>

                </p>
            </form>
            <footer>
                <p>First time? <Link to="/User">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
}
export default App
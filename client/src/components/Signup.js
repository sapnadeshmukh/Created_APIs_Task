import React, {Fragment,useState} from 'react'
import axios from 'axios'
 const Signup = () => {
    const [formData,setFormData] = useState({
        username: '',
        password: ''
    })

const  {username,password} = formData;

const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

const onSubmit=async(e)=>{    
e.preventDefault();


const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const body = JSON.stringify({ username, password });
try{ 
    const res=await axios.post('http://localhost:2323/register/',body,config)
    

}
catch(error){
    
    console.error(error)
}


}
    return (
        <div>
            <form onSubmit={e=>onSubmit(e)}>
  <div className="form-group">
    <label for="exampleInputEmail1">Username</label>

    <input type="text" name='username'  value={username} onChange={e=>onChange(e)} className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter username"/>
    <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  name='password'  value={password} onChange={e=>onChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            
        </div>
    )
}
export default Signup
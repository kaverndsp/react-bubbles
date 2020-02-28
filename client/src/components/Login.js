import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const Login = (props) => {
  const [login,setLogin]=useState({
    username:'',
    password:''
});


const handleChanges = e => {
  setLogin({
      ...login,
      [e.target.name]:e.target.value
  })
  console.log(login);
 
}


const LoginSubmit = e => {
  e.preventDefault();
  
  axios.post('http://localhost:5000/api/login', login)
  .then(response=>{
      console.log(response);
      localStorage.setItem('token', response.data.payload);
      props.history.push("/BubblePage");
  })
  .catch(err=>{
      console.log(err);
      props.history.push("/");
  })
}
  

  return (
      <div className="Container">
      <h1>Welcome to the Bubble App!</h1>
            <h1>Login</h1>
            <form onSubmit={LoginSubmit}>
              <TextField id="standard-basic" label="Username" name="username" type="text" onChange={handleChanges} placeholder="username" />
              <TextField id="standard-basic" label="Password" name="password" type="password" onChange={handleChanges} placeholder="password" />
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </div>
  );
};

export default Login;
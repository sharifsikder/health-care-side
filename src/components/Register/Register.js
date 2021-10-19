import React, { useState } from 'react';
import './Register.css'
import useAuht from '../../hooks/useAuth';




const Register = () => {
    const {googleSingIn} = useAuht()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")



    const handelEmail = e =>{
        setEmail(e.target.value)
        }

        const handelPassword = e =>{
            setPassword(e.target.value)
           }
    

    const emailSignIn = (e) => {
      
        console.log(email, password)
      
  
   
  }
    return (
        <div className="mx-5">
                  <h1 className="text-primary mt-4 mb-3">This is Register</h1>
      
        <form onSubmit={emailSignIn}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handelEmail} type="email" className="form-control" id="inputEmail3" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handelPassword} type="password" className="form-control" id="inputPassword3" required/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label togole" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
        <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
      
      <button onClick={googleSingIn}>Google Sign Up</button>
        </div>
    );
    
};

export default Register;
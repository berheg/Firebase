import React from 'react';

const Login = (props)=> {
  
    return (
        <div className="col-md-6">
            <form>
                <div>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input value={props.email} onChange={props.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={props.password} onChange={props.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" onClick={props.login} class="btn btn-primary">Login</button>
                <button onClick={props.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                <button type="submit" onClick={props.onGoogleSignIn} class="btn btn-primary">Login with google</button>
                <button type="submit" onClick={props.onFacebookSignIn} class="btn btn-primary">Login with facebook</button>
                <button type="submit" onClick={props.onTwitterSignIn} class="btn btn-primary">Login with twitter</button>
            </form>
 
 </div>
    );
  }

export default Login;
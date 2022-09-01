import React from 'react';
function Login(){
    return(<>
    <div className="row">

<div className="col s6 offset-s3 z-depth-1" id="panell">
  <h5 id="title">Login Form</h5>
  <form>

  <div className="input-field" id="username">
    <input  type="text" className="validate" />
    <label for="username">Username</label>
</div>
<div className="input-field" id="password">
  <input type="password" className="validate"  />
  <label for="password">Password</label>
</div>
<p>
  <input type="checkbox" id="remember"/>
  <label for="remember" id="checkbox" >Remember me</label>
</p>
<a className="waves-effect waves-light btn" id="loginbtn">Login</a>

</form>

</div>
<br />
</div>
    </>
    )
    
}

export default Login;
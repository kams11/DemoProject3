import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import chrome from './chrome.png';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Login = () => {

    const loginHandler=(data)=> {
        console.log(data);
        window.location.href= "/sidebar";
    }

  return (
    <>
    <section  >
<nav id="navbar" class="navbar fixed-top navbar-expand " style={{height:"105px",background:"white",position:"fixed",width:"100%"}}>
  <div class="container-fluid">
    <a class="navbar-brand" style={{width:"330px",display:"inline-flex"}} href="/">
        <img style={{paddingTop:"2px",height:"50px",width:"fit-content"}} className='logo' src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="demoApp" /> <h1 style={{color:"rgb(82, 140, 226)",fontSize:"32px",marginTop:"4px"}}>DemoApp</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>  
<div className='logincontainer'> 
    <div className="lc1">
        <h1 style={{fontSize:"66px",fontWeight:"bolder",width:"450px",marginLeft:"100px"}}>Welcome back to <span style={{color:"skyblue"}}>DemoApp</span></h1> <br />
        <p style={{color:"silver",fontSize:"20px",width:"450px",marginLeft:"100px"}}>Log in to your account to get back to your hub. </p>

        <h4 style={{color:"blue" ,display:"block",marginTop:"40px",marginRight:"320px",fontSize:"20px"}}>Email Address</h4> 
        <form style={{display:"inline-flex",marginLeft:"100px",maxWidth:"fit-content"}}>
                
               <div class="mb-6"> <input type="email" class="form-control-lg" id="exampleInputEmail1" placeholder='Enter your email' aria-describedby="emailHelp" style={{width:"350px",height:"60px",border:"1px solid grey",borderRadius:"5px"}}/>
               <button type="submit" class="btn btn-lg btn-primary" onClick={loginHandler} style={{height:"60px",marginTop:"-9px",marginLeft:"10px"}}>Log in</button>
               </div>
          </form>
          <div className="createaccount" style={{textAlign:"initial",paddingLeft:"100px",paddingTop:"30px"}}>
          <h5>Don’t have an account?  <Link to="/getstarted" style={{textDecoration:"none"}} href="">Sign Up </Link>  </h5> 
          </div>
    </div>
    <div className="lc2"> 

  <div  style={{ width: "500px",marginTop:"150px",marginLeft:"30px",background:"white",border:"1px ridge silver",padding:"12px" ,borderRadius:"10px"}}>
    <div className="card-body">
      <h6 className="card-subtitle" style={{color:"blue",textAlign:"initial",width:"fit-content",background:"lightblue"}}>WHAT'S NEW</h6> <br /> <br />
      <h2 className="card-title" style={{fontWeight:"bold",textAlign:"initial",marginLeft:"10px",color:"blue"}}> <img style={{width:"50px"}} src={chrome} alt="" /> DemoApp for Chrome</h2>
      <p className="card-text"style={{marginTop:"30px",color:"black",textAlign:"initial",width:"fit-content",marginLeft:"10px"}}>
        Use DemoApp while you're on the web, without switching tabs.Select ans share hand-picked times or single-use links wherever you're interacting with invitees.
      </p>
      <br />
      <a href="#" className="card-link" style={{paddingTop:"40px",paddingRight:"300px",textDecoration:"none",display:"inline-flex",width:"600px"}}>
        Get Chrome Extension <AiOutlineArrowRight style={{color:"blue",marginLeft:"5px",marginTop:"5px"}}/>
      </a>
    </div>
  </div>


    </div>
</div>
    </section>
    
    </>
  )
}

export default Login;
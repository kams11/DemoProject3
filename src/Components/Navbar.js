import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav id="navbar" class="navbar fixed-top navbar-expand " style={{height:"100px",background:"white",position:"fixed",width:"100%",paddingLeft:"52px",paddingRight:"52px",boxSizing:"border-box"}}>
  <div class="container-fluid">
    <a class="navbar-brand" style={{width:"330px",display:"inline-flex"}} href="/">
        <img style={{paddingTop:"2px",height:"50px",width:"fit-content"}} className='logo' src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="DemoApp" /> <h1 style={{color:"rgb(26, 145, 243)",fontSize:"30px",padding:"5px"}}>DemoApp</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontWeight:"bold",fontSize:"14px"}}>
        <li class="nav-item" >
          <Link to="/individuals" class="nav-link active"  aria-current="page" href="#">Individuals</Link>
        </li>
        <li class="nav-item" style={{paddingLeft:"20px"}}>
          <Link to="/teams" class="nav-link active" href="#">Teams</Link>
        </li>
        <li class="nav-item" style={{paddingLeft:"20px"}}>
          <Link to="/enterprise" class="nav-link active">Enterprise</Link>
        </li>
        <li class="nav-item  dropdown"style={{paddingLeft:"20px"}} >
          <Link class="nav-link dropdown-toggle active" to={"/product"} role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Product
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item" style={{paddingLeft:"20px"}}>
          <Link to="/pricing" class="nav-link active" >Pricing</Link>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft:"20px"}}>
          <Link to="/resources" class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      
      <form class="d-flex" style={{marginRight:"65px"}}>
      <li class="nav-item" style={{listStyle:"none"}}>
         <Link to={"/login"} class="nav-link active" style={{ fontWeight:"bold",marginRight:"20px",marginTop:"5px"}}> Log In </Link>
        </li>
       <Link to={"/getstarted"}> <button style={{width:"90px",height:"35px",fontSize:"12px"}} class="btn btn-primary" type="submit">Get Started</button> </Link>
      </form>
    </div>
  </div>
</nav>

    {/* <nav id="navbar" className="navbar" style={{height:"100px",background:"white",position:"fixed",width:"100%",paddingLeft:"52px",paddingRight:"52px",boxSizing:"border-box"}}>
    <div>
        <Link to={"/"} class="navbar-brand" style={{width:"330px",display:"inline-flex",textDecoration:"none",paddingRight:"80px"}} >
        <img style={{paddingTop:"2px",height:"50px",width:"fit-content"}} className='logo' src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="DemoApp" /> <h1 style={{color:"rgb(26, 145, 243)",fontSize:"30px",padding:"5px"}}>DemoApp</h1></Link>
        </div>
    <div>

    </div> 
    <div className='logindiv'>
    
      <li class="nav-item" style={{listStyle:"none"}}>
         <Link to={"/login"}  style={{ fontWeight:"bold",marginRight:"20px",height:"20px",marginTop:"5px"}}> Log In </Link>
        </li>
       <Link to={"/getstarted"}> <button style={{width:"90px",height:"35px",fontSize:"12px",backgroundColor:"rgb(59, 149, 252)",borderRadius:"9px",border:"none",color:"white"}} class="btn btn-primary" type="submit">Get Started</button> </Link>
      
    </div>   
</nav> */}
    </>
  )
}

export default Navbar;
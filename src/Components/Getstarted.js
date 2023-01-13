import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import line from './or.png';
import './getstarted.css';



const schema=yup.object().shape({
  email:yup.string().email().required(),

})
const Getstarted = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });
  const submitForm=(data)=>{
    console.log(data);
  }
  return (
    <> 
    <section style={{marginTop:"110px"}}>
    <nav id="navbar" class="navbar fixed-top navbar-expand " style={{height:"105px",background:"white",position:"fixed",width:"100%"}}>
  <div class="container-fluid">
    <a class="navbar-brand" style={{width:"330px",display:"inline-flex"}} href="/">
        <img style={{paddingTop:"2px",height:"50px",width:"fit-content"}} className='logo' src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="demoApp" /> <h1 style={{color:"rgb(82, 140, 226)",fontSize:"32px",marginTop:"4px"}}>DemoApp</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> 
     <div className=" Form-Validation" style={{marginBottom:"100px"}}>
     <h3 className='blue' ><a href='/'> <img className='logo' style={{height:"45px", width:"fit-content",marginRight:"50px"}} src='
https://cdn.logo.com/hotlink-ok/logo-social.png' alt=""  /> </a></h3>

   
<p className='Free'>Sign up with DemoApp for free</p> 
<div className="inputs">
<div className="between">
<form className="Animation"onSubmit={handleSubmit(submitForm)} >
<h5 className='EmailStarted'>Enter your email to get started.</h5>
<input className='EmailAddress'  type="text" name="email" placeholder="email address" {...register ('email')}/>
 {errors.email && <p className='EmailFirst'>Email must be present.</p>}
 
<input className='submitbtn' type="submit" id="Get Started"/>


         

             <div className="myline"> <img src={line} alt="/" style={{width:"500px"}} /></div><br/> 
             
  <div className="Google">
<button className='GoogleButton' > <h6 style={{paddingTop:"4px"}}> <img  style={{height:"22px", width:"fit-content",marginRight:"6px"}} src='
https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=""  />Sign up with Google</h6></button> <br/><br></br>

  </div>

  <div className="Microsoft">
<button className='MicrosoftButton' >  <h6 style={{paddingTop:"4px",marginRight:"45px"}}> <img className='logo' style={{marginRight:"6px",height:"22px", width:"fit-content"}} src='
https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' alt=""  />  Sign up with Microsoft</h6></button>

</div> 
<br/>
<div className='Already'>Already have an account? <div className='Login'>Log in </div></div>


</form>
</div>

</div>  
         
        <div id="6">
          <label className='blue'>English </label><br/>
          <select className='opi' id='language'>
                        <option disabled selected value="--">English</option>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                        <option value="español">español</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Português">Português(Brasile)</option>
                      
            </select>
                  
        </div>

</div>
</section>
    </>
  )
}

export default Getstarted;
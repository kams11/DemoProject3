import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Pic1 from './picmen1.png'
import Hp from './homepage.module.css';


const schema=yup.object().shape({
  email:yup.string().email().required(),
})


const Homepage = () => {

  const [signup, setSignup] = useState("");

  const {register,handleSubmit,formState: { errors }}=useForm({
      resolver:yupResolver(schema),
  });



  const submitForm=(data)=> {
      console.log(data);
      window.location.href= "/sidebar";
  }

  const userHandler = (e) => {

      let signup = e.target.value;
      setSignup(signup);
      };

  return (
    <>
    <section className={Hp.homeContainer}>
    {/* -------------------Scheduling Section------------------------- */}
    <div className={Hp.main1}  style={{paddingTop:"130px",overflow:"visible"}} >
        <div >
          <div className={Hp.heading2} style={{textAlign:"left"}}>
          <h1 style={{color:"rgb(11, 53, 88)",fontSize:"64px",textAlign:"left"}}>OUR</h1>
            <h1 style={{color:"rgb(11, 53, 88)",fontSize:"64px",paddingRight:" 135px"}}>APP</h1>
            <h1 style={{color:"rgb(26, 145, 243)",fontSize:"64px",paddingRight:" 285px"}}>NAME</h1>
            <p className={Hp.subheading}>Short Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quaerat!</p>
          </div>
          <form class="myform" onSubmit={handleSubmit(submitForm)} style={{display:"inline-block",maxWidth:"fit-content"}}>
                {/* ------------------SignUp form---------------- */}
               <div class="mb-6"> 
               {/* -----------------input field for email address----------- */}
               <input onChange={userHandler} type="email" class="form-control-lg" id="exampleInputEmail1" name="email" placeholder='Enter your email' aria-describedby="emailHelp" {...register('email')} style={{width:"300px",height:"55px",border:"1px inset silver",borderRadius:"5px"}}/>
               
               {/* ----------------------Sign Up Button------------------- */}
               <button type="submit" class="btn btn-lg btn-primary" style={{height:"55px",marginTop:"-9px",marginLeft:"10px"}}>Sign up{signup}</button> <br />
               {/* ....................ERROR MESSAGE................... */}
               {errors.email && <p style={{textAlign:"initial",color:"red",fontSize:"10px"}}>Please enter a valid email address.</p>  }
                    {/* ......................EMAIL HELP.................. */}
                    <div id="emailHelp" class="form-text" style={{textAlign: "initial",
                        fontSize: "large"}}>Create your free account. No credit card required.
                    </div>
                </div>
           
          </form>
            
        </div>
        {/* ...............scheduling section image................. */}
        <div> <img style={{paddingLeft:"200px"}} src={Pic1} alt="scheduling" /></div>
    </div> <br />

    </section> 
    

    </>
  )
}

export default Homepage;
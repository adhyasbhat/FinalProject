import '../Signup/Signup.css';
import Navigation from "../Navigation/Navigation"
import {Link} from "react-router-dom"
function TextExample() {
  return (

    <>
    <Navigation/>
<div className=" wrapper d-flex align-items-center justify-content-center">
    <div className="signup  mx-5 p-4">   
          
          <h2 className='heading mb-5 sub'>SIGN-UP</h2>

          
                <div className="d-flex justify-content-between mt-4">
            <div className="form col-12">

              <input type="text"  name="" placeholder='' className='textbox col-12' />
              <label  for=''className=' name'>Full Name</label>
                </div>
               
            </div>
            
            <div className="d-flex justify-content-between mt-4">
            <div className="form ">
              <input type="tel"  name="" placeholder='' className='textbox' />
              <label className='signupLabel' for=''>Phone</label>
                </div>
                <div className="form ">
              <input type="email"  name="" placeholder='' className='textbox' />
              <label className='signupLabel' for=''>Email ID</label>
                </div>
                

            </div>
            
                 <div className="d-flex justify-content-between mt-4">
             <div className="form ">
                 <input type="password" name="" placeholder='' className='textbox'/>
              <label className='signupLabel' for=''>Password</label>
                 </div>
                 <div className="form">

              <input type="password" name="" placeholder='' className='textbox'/>
              <label for='' className='confirm'> Confirm Password</label>
                 </div>
              
              </div>
              
         <div className="col-12 mt-4 ">
           <button className='signbtn mt-2 mb-2'>SIGNUP</button>
           <p className='create mt-4 '>Already have an account <Link to ="/">Login here</Link></p>
         </div>
    </div>
    </div>
    </>
  );
}

export default TextExample;
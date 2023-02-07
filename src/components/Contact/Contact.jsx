import React, { useState } from 'react'
import swal from 'sweetalert'
import Aleart from '../Aleart/Aleart'


const Contact = () => {

const [input, setInput] =useState({
  name : "",
  email : "",
  cell : "",
  location : ""
})
// Alert State 

const [alert, setAlert] = useState({
  status : false,
  msg : "",
  type : "danger"
})

//  Create a HandelBhar

const HandelBhar = (e)=>{
setInput({
  ...input,
  [e.target.name]: e.target.value
})

}
//  From Submit 

const handelFromSubmit = (e)=>{
e.preventDefault();

if (input.name === "" || input.email=== "" || input.cell === "" || input.location ==="") {
  setAlert({
    status : true,
    type : "danger",
    msg : "All Filed Are Require"
  })
  swal(`${alert.msg}`, "You clicked the button!", "error");

}else{
  setInput({
    name : "",
    email : "",
    cell : "",
    location : ""
  })
  setAlert({
    status : true,
    type : "success",
    msg : "Data Stable"
  })
  swal(`${alert.msg}`, "You clicked the button!", "success");
    }
}

  return (
    <>
    
    <div className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-6 m-auto mt-5">
                  <div class="card">
                    <div className="card-header">
                      <h2>Register From</h2>
                    </div>
                    <div class="card-body">
                      {alert.status && (<Aleart msg={alert.msg} type={alert.type} hide={setAlert} />) }
                      
                    <form onSubmit={handelFromSubmit}>
                        <div className="mb-3">
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' value={input.name} onChange={HandelBhar} className='form-control'/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={input.email} onChange={HandelBhar} className='form-control'/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="">Phone</label>
                        <input type="cell" name='cell' value={input.cell} onChange={HandelBhar} className='form-control'/>
                        </div>
                        <div className=" mb-3">
                        <label htmlFor="">Location</label>
                        <input type="text" name='location' value={input.location} onChange={HandelBhar} className='form-control'/>
                        </div>
                        <input type="submit" value={"Register"} className= "btn btn-danger w-100" />
                    </form>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Contact
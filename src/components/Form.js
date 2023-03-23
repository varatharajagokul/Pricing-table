import React, { useState } from 'react'

function Form() {
    const [user, setuser] = useState({
        email:'',
        password:'',
    });
    const handlechange=(e)=>{
        setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handlesumbit=(e)=>{
        console.log(user);
    }
    return (
        <div>Form
            <div className='container'>
                <div className='form-body'>
                        <div class="mb-3">
                            <h4>Email address</h4>
                            <input type="email"name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>handlechange(e)}/>
                        </div>
                        <div class="mb-3">
                            <h4>Password</h4>
                            <input type="password"  name='password' class="form-control" id="exampleInputPassword1" onChange={(e)=>handlechange(e)}/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Show Password</label>
                        </div>
                        <button type="sumbit" class="btn btn-danger" onClick={handlesumbit}>Submit</button>
                
                </div>
            </div>
        </div>
    )
}

export default Form
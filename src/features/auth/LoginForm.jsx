import React, { useState } from 'react'

function LoginForm({getUserEmailPassword}) {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    function formSubmit(e){
       e.preventDefault()
        getUserEmailPassword(email , password);
        setEmail("");
        setPassword("");
    }
  return (
    <div className='login-form h-screen flex justify-center items-center'>
        <form action="" onSubmit={(e) => formSubmit(e)} className='min-w-60 flex flex-col gap-9 border-2 border-[#4aab91] px-6! py-10! rounded-3xl'>
            <input
             type="email"
              name="email"
              placeholder='enter your email'
              required
              onChange={(e) => setEmail(e.target.value)} 
              className='form-input'
              value={email} />
              
              <input
               type="password"
               name="password"
               placeholder='enter password'
               onChange={(e) =>setPassword(e.target.value)} 
               className='form-input'
               value={password}
               />
               <button className='login-btn'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm;
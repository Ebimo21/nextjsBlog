import React from 'react'
import { useForm } from "react-hook-form";


const Register = () => {

    const { register, handleSubmit} = useForm();
  const onSubmit =  handleSubmit ( async data =>{
    document.getElementById('regForm').reset();
    console.log(JSON.stringify(data));

    await fetch('/api/registerapi', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  })
  return (
    <form id='regForm' className={` text-white w-11/12 m-auto text-xl bg-[#ffffff23] rounded-xl backdrop-blur-md shadow-md py-12 px-9 `}  onSubmit={onSubmit}>
    <fieldset>
      <legend></legend>
      {/* <label className={`block mt-2  `}>
        First Name:
        <br/>
        <input className={`w-full h-10 block text-black rounded px-3 mt-2`} {...register("fname")} />
    </label> */}
    <label className={`block mt-2`} >
        Name:
        <br/>
        <input  className={`w-full h-10 block text-black rounded px-3 mt-2`}   {...register("name")} />
    </label>
    <label className={`block mt-2`}>
        Email:
        <br/>
        <input  className={`w-full h-10 block rounded text-black px-3 mt-2`}  type="email" {...register("email")} />
    </label>
    <input className={`text-black font-bold mt-10 w-full bg-white py-2 rounded`} type="submit" value="REGISTER" />
   
    </fieldset>
</form>
  )
}

export default Register
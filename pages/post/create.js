import React from 'react'
import { useForm } from 'react-hook-form'
import { useSession, session } from 'next-auth/react';

function Create() {
    const {data: session} = useSession();

    const {register, handleSubmit} = useForm();

    const create = handleSubmit(async data =>{

        const response = await fetch("https://nextjs-blog-tau-seven-60.vercel.app/api/createpostapi", {
                

            method: "POST",
            headers:{
                content: "application/json",
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });


    });



  return (

   <div>
        <div>create</div>
    <form onSubmit={create} className={`container m-auto`} >

        <span className={`block`}>
        <input className={`border border-solid border-black`} type="text" {...register('title')}  />
        {/* bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
        <input className={`border-2 border-solid border-yellow-300 outline outline-black`} type="hidden" value={session? session.id: ""} {...register('session')} />
        </span>

        <span className={`block`}>
            <textarea {...register('content')} placeholder='Type content body here!' className={`border border-solid border-black`}>
            </textarea>

        </span>        

        <span className={`block`}>
        <input type={'radio'} id="true" value="true"  {...register('published')}/>
        <label className={`ml-2`} htmlFor="true">Publish</label>
        </span>

        <span className={`block`}>
        <input type={'radio'} htmlFor="false" value="false"  {...register('published')}/>
        <label className={`ml-2`} htmlFor="false">Save Draft</label>
        </span>

        <input type='submit' className={`block`} value="Send" />
        
    </form>

   </div>

  )
}

export default Create
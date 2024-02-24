"use client"
import React, { useState } from 'react'

const page = () => {
  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")
  const[mainTask,setMainTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask);
  }

  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask=<h2>No Task Available</h2>

  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return( 
      <li key={i} className=' flex items-center justify-between'>
      <div className=' flex items-center justify-between mb-5 w-2/3'>
        <h4 className=' text-3xl text-bold'>{t.title}</h4>
        <h6 className=' text-xl '>{t.desc}</h6>
      </div>
      <button
      onClick={()=>{
        deleteHandler(i)
      }}
      className=' bg-red-600 text-white rounded px-5 py-2'>Delete</button>
      </li>
      );
    })
  }

  return (
    <>
    <h1 className=' bg-black text-white p-5
     text-2xl font-bold text-center'>Ananya's ToDo List</h1>

     <form className='flex justify-center' onSubmit={submitHandler}>
      <input type="text" className=' text-xl
       border-zinc-800 border-2 m-5 px-4 py-2 rounded'
       placeholder='Enter title here'
       value={title}
       onChange={(e)=>{
        setTitle(e.target.value)
       }}
       />

      <input type="text" className=' text-xl
       border-zinc-800 border-2 m-5 px-4 py-2 rounded'
       placeholder='Enter description here'
       value={desc}
       onChange={(e)=>{
        setDesc(e.target.value)
       }}
       />
      
      <button className=' bg-black text-white m-5 
      px-4 py-2 text-xl font-bold rounded'>Add Task</button>
     </form>

     <hr />
     <div className=' bg-gray-300 p-8'>
      <ul>{renderTask}</ul>
     </div>
    </>
  )
}

export default page

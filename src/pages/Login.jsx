import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const getItemFromLS = 
//   })
//  const formElement = document.querySelector('form');
//  const buttonElement = document.querySelector('button');
// formElement.addEventListener('submit', (e) => {
//   e.preventDefault();
//  })
  return (
    <>
  <div className='h-[100vh] flex flex-col items-center content-center bg-blue-50 w-[100%] m-0'>
       <h1 
       className="
       text-3xl
       text-blue-500
        font-bold
        flex 
       "> <span className="material-icons text-4xl ">bookmark</span>
     Bookmarks System Managment
     </h1>
   <form>
     <div className='flex gap-4 m-6' >
     <Input type='text'
     style='w-[30vw] h-12
      p-3 
      border-2
      border-solid 
      border-gray-200 
      rounded-lg
      ' 
      Website='Write Your Website Name' />
     <Input type='URL'
     style='w-[30vw] h-12
      p-3
      border-2
      border-solid 
      border-gray-200 
      rounded-md
      '
     Website='Write Your Website URL' />
     <Button style='w-[10vw] h-12
     bg-blue-700 
     text-white
     text-[1rem]
      rounded-lg
      font-bold
     '
      text='Add Bookmark'/>
     </div>
   </form>
 </div> 
    </>
  )
}

export default Login

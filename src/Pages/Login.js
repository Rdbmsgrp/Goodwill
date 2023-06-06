import React from 'react'
import Image from '../Images/image 1.png'
const Login = () => {
  return (
    
    <section className="bg-[#4579BB] min-h-screen flex items-center justify-center">
      < div className ="bg-[#4579BB] flex rounded-2xl shadow-lg w-full p-6 items-center">
      
      
      <div className="md:w-1/2 px-8 md:px-16 items-center">


        <h2 className=" text-center font-bold p-5 text-4xl text-white  ">Login with</h2>  <center><img  src="Goodwill.png"  alt="" class=""></img></center>
        <p class="text-1xl mt-4 text-center text-white">If you are already a member,
          easily login
        </p>

        <form action="" class="flex flex-col gap-4">
          <input class="p-1 mt-5 rounded-xl border" type="text" name="First Name" placeholder="First Name"></input>
          <input class="p-1  rounded-xl" type="text" name="Last Name" placeholder="Last Name" size="80"></input>
          <input class="p-1 rounded-xl" type="text" name="Phone Number" placeholder="Phone Number"></input>
          <input class="p-1 rounded-xl" type="text" name="Email" placeholder="Email"></input>
          <div className="relative">
            <input class="p-1 rounded-xl border w-full" type="text" name="Password" placeholder="Password"></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye absolute top-1/3 right-3 transalate-y-1/2" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>

          </div>
          <button class="bg-[#08318B] text-white rounded-xl py-2 hover:scale-105 duration-300">Login</button>
        </form>

        <div className="mt-6 cols-3 items-center text-white ">
          <hr className="border-white-500"></hr>
          <p className="text-center text-sm">OR</p>
          <hr className="border-white-500"></hr> </div>
        <button className="bg-white py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
    </svg>
          Signin with Google</button>

        <p className="mt-5 text-sm border-b  text-white py-6">Forgot your password?</p>

        <div className="mt-3 text-sm flex justify-between items-center ">
          <p className="text-white">Don't have an account...</p>
          <button className="py-2 px-5  bg-white border rounded-xl hover:scale-105 duration-300">Register</button>
        </div>

      </div>



      <div>

      </div>

      
    

        <div className="sm:block hidden w-1/2 align-middle"></div>
        <img class="rounded-xl w-full" src={Image} alt=''></img>
      </div>
        
        </section>
     
  )
};

export default Login
import React from 'react';

const color = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
}

const Signup = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className='w-full max-w-md bg-[#000000] p-8 rounded-[12px] flex flex-col items-center'>
                

                <div className='flex flex-col w-full'>
                    <div className='flex flex-col w-full mb-4 text-center'>
                        <h3 className='text-2xl font-semibold mb-2 text-[30px] text-[#0284c7]'>Sign Up</h3>
                        <p className='mb-4 text-base text-[#5d5858]' >Please Enter your details.</p>
                    </div>

                    <div className='flex flex-col w-full'>
                        <input 
                            type="text"
                            placeholder="Enter Your Name"
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />

                        <input 
                            type="email"
                            placeholder="Enter Your Email"
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />

                        <input 
                            type="text"
                            placeholder="Enter Your Department"
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />

                        <input 
                            type="text"
                            placeholder="Enter Your Number"
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />

                        <input 
                            type="password"
                            placeholder="Enter Your Password"
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />
                    </div>

                    <div className='flex items-center justify-between w-full mb-4'>
                        <div className='flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2'/>
                            <p className='text-sm text-[#7a68689e]'>Remember me</p>
                        </div>

                        
                    </div>

                    <button className='w-full text-white font-semibold bg-gradient-to-r from-[#38bdf8] to-[#0369a1] rounded-md p-4 text-center mb-4'>
                        Sign Up
                    </button>

                    <div className='text-center'>
                        <p className='text-sm text-[#ffffff]'>Already have an account? <span className='font-semibold underline cursor-pointer text-[#5d5858]'>Sign In</span></p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Signup;
import React from 'react'

export default function FooterHead() {
  return (
    <div className='w-full flex justify-between gap-10 px-14 text-[#ababab]'>
        <div className=''>
            <h2 className='font-bold'>PRODUCTS</h2>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Relational Database</p>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Graph Database</p>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Graph-based Solution</p>
        </div>
        <div>
            <h2 className='font-bold'>USE CASES</h2>
        </div>
        <div>
            <h2 className='font-bold'>SERVICES</h2>
        </div>
        <div>
            <h2 className='font-bold'>RESOURCES</h2>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Documentation</p>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Learn</p>
        </div>
        <div>
            <h2 className='font-bold'>BLOG</h2>
        </div>
        <div>
            <h2 className='font-bold'>COMPANY</h2>
            <p className='cursor-pointer hover:text-[#4a8eff]'>About Us</p>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Contact</p>
        </div>
    </div>
  )
}

import { useState } from "react"


export default function NavFoot() {
  return (
    <div className="p-10 flex justify-between items-center" style={{fontFamily:"Monda",fontWeight:'normal'}}>
        <div><img src="src/assets/logo.png" alt="Logo" width={220} height={160}/></div>
        <div className="flex gap-10 items-center">
            <div className={`text-[#fac433] hover:text-[#fac433] cursor-pointer`}>PRODUCTS</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>USE CASES</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>SERVICES</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>RESOURCES</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>BLOG</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>COMPANY</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>IR</div>
            <button className={`px-[0.4rem] py-[0.525rem] bg-[#022EA9] rounded-md text-white hover:text-[#fac433]  cursor-pointer`}>TRY FREE</button>
        </div>
    </div>
  )
}

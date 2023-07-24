import { useState } from "react"
import {MdOutlineArrowForwardIos} from 'react-icons/md'


export default function NavFoot() {
  const [showProductDropdown, setshowProductDropdown] = useState(false)
  const [showResourcesDropdown, setshowResourcesDropdown] = useState(false)
  const [showCompanyDropdown, setshowCompanyDropdown] = useState(false)
  const [showIRDropdown, setshowIRDropdown] = useState(false)

  return (
    <div className="p-10 flex justify-between items-center" style={{fontFamily:"Monda",fontWeight:'normal'}}>
        <div><img src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" alt="Logo" width={220} height={160}/></div>
        <div className="flex gap-10 items-center">
            <div className={`relative text-[#fac433] hover:text-[#fac433] cursor-pointer`} onMouseEnter={()=>setshowProductDropdown(true)} onMouseLeave={()=>setshowProductDropdown(false)} >PRODUCTS 
            {
              showProductDropdown && 
              <div className="w-[200px] absolute flex flex-col gap-2 bg-black opacity-50  px-5 py-2 text-white">
                <div className="flex justify-center  items-center gap-11 hover:opacity-20"><div>Graph Database</div> <div className="flex justify-end items-end"><MdOutlineArrowForwardIos /></div> </div>           
                <div className="flex justify-center items-center gap-5 hover:opacity-20"><div>Relational Database </div><div className="flex justify-end items-end"><MdOutlineArrowForwardIos /></div></div>
              </div>

            } 
            </div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>USE CASES</div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>SERVICES</div>
            <div className={`relative text-black hover:text-[#fac433] cursor-pointer`} onMouseEnter={()=>setshowResourcesDropdown(true)} onMouseLeave={()=>setshowResourcesDropdown(false)} >RESOURCES 
            {
              showResourcesDropdown && 
              <div className="w-[200px] absolute flex flex-col gap-2 bg-black opacity-50  px-5 py-2 text-white">
                <div className="flex justify-center  items-center gap-11 hover:opacity-20"><div>Documentation</div></div>           
                <div className="flex justify-center items-center gap-5 hover:opacity-20"><div>Learn</div></div>
              </div>

            } 
            </div>
            <div className={`hover:text-[#fac433] cursor-pointer`}>BLOG</div>
            <div className={`relative text-black hover:text-[#fac433] cursor-pointer`} onMouseEnter={()=>setshowCompanyDropdown(true)} onMouseLeave={()=>setshowCompanyDropdown(false)} >RESOURCES 
            {
              showCompanyDropdown && 
              <div className="w-[200px] absolute flex flex-col gap-2 bg-black opacity-50  px-5 py-2 text-white">
                <div className="flex justify-center  items-center gap-11 hover:opacity-20"><div>About us</div></div>           
                <div className="flex justify-center items-center gap-5 hover:opacity-20"><div>Contact</div></div>
              </div>

            } 
            </div>
            <div className={`relative text-black hover:text-[#fac433] cursor-pointer`} onMouseEnter={()=>setshowIRDropdown(true)} onMouseLeave={()=>setshowIRDropdown(false)} >RESOURCES 
            {
              showIRDropdown && 
              <div className="w-[200px] absolute flex flex-col gap-2 bg-black opacity-50  px-5 py-2 text-white">
                <div className="flex justify-center  items-center gap-11 hover:opacity-20"><div>IR 공고</div></div>           
                <div className="flex justify-center items-center gap-5 hover:opacity-20"><div>IR 공시 정보</div></div>
                <div className="flex justify-center items-center gap-5 hover:opacity-20"><div>IR 재무 정보</div></div>
              </div>

            } 
            </div>
            <button className={`px-[0.4rem] py-[0.525rem] bg-[#022EA9] rounded-md text-white hover:text-[#fac433]  cursor-pointer`}>TRY FREE</button>
        </div>
    </div>
  )
}

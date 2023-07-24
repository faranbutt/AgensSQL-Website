
import {RiArrowDropDownLine} from 'react-icons/ri';
import {AiOutlineSearch,AiFillMediumSquare} from 'react-icons/ai'
import {BsGithub,BsYoutube,BsTwitter,BsFacebook,} from 'react-icons/bs'
import {FaLinkedin, FaSearch} from 'react-icons/fa';

import {FaRss} from 'react-icons/fa'
import { useState } from 'react';
export default function NavMiddle() {
    const [dropDown,setDropDown] = useState(false);
  return (
    <div className='grid grid-cols-3 bg-gray-50 items-center' style={{fontFamily:"Monda",fontWeight:'normal'}}>
    <div className='h-10 w-full items-center'>
        <div className='flex flex-col'>
        <div className="text-[rgb(102,102,102)] mr-10 flex justify-end"><button className="bg-gray-200 h-10 p-2 flex items-center rounded-lg" onClick={()=>setDropDown(!dropDown)}><div>Select Language</div> <div><RiArrowDropDownLine className="h-8 w-8" /></div></button></div>
        { dropDown && <div className='flex justify-end '> 
            <div className='flex flex-col mr-10 border-gray-100 border-2 w-40 shadow-lg p-2 rounded-xl'>
            <div className='hover:bg-gray-200 w-full px-1 py-1 rounded-lg'>Select Language</div>
            <div className='hover:bg-gray-200 w-full px-1 py-1 rounded-lg'>English</div>
            <div className='hover:bg-gray-200 w-full px-1 py-1 rounded-lg'>한국어</div>
            </div>
            
            </div>
            }
        </div>
    </div>
    <div className='flex justify-end text-[rgb(102,102,102)] items-center gap-4'>
        <div><FaSearch className='font-bold cursor-pointer' /></div>
        <div className='hover:font-bold cursor-pointer'>AG Cloud</div>
        <div className='hover:font-bold cursor-pointer'>Apache AGE</div>
        <div className='hover:font-bold cursor-pointer'>CONTACT</div>
    </div>
    <div className='flex justify-end gap-3'>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-black transition-all ease-linear duration-700'><BsGithub className="text-[#fac433] cursor-pointer hover:text-white"/></div>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-[#ff9702] transition-all duration-500 ease-linear'><FaRss className='text-[rgb(102,102,102)] cursor-pointer hover:text-white'/></div>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-[#cd201f] transition-all ease-linear duration-700'><BsYoutube className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-[#55acee] transition-all ease-linear duration-700'><BsTwitter className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-[#117eb9] transition-all ease-linear duration-700'><FaLinkedin className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-[#42599e] transition-all ease-linear duration-700'><BsFacebook className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-[#00ab6c] transition-all ease-linear duration-700'><AiFillMediumSquare className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
    </div>
    </div>
  )
}

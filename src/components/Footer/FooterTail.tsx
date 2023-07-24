
import {AiFillMediumSquare} from 'react-icons/ai'
import {BsGithub,BsYoutube,BsTwitter,BsFacebook,} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa';

import {FaRss} from 'react-icons/fa'


export default function FooterTail() {
  return (
    <div className=" flex justify-between items-center text-[0.9em] leading-5 pt-8 px-8 text-[#ababab]">
        <div>
            <h3>2023 by Bitnine Global Inc. All Rights Reserved.</h3>
        </div>
        <div>
            <div className='flex gap-3'>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-black transition-all ease-linear duration-700'><BsGithub className="text-[#fac433] cursor-pointer hover:text-white"/></div>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-[#ff9702] transition-all duration-500 ease-linear'><FaRss className='text-[rgb(102,102,102)] cursor-pointer hover:text-white'/></div>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-[#cd201f] transition-all ease-linear duration-700'><BsYoutube className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-[#55acee] transition-all ease-linear duration-700'><BsTwitter className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-[#117eb9] transition-all ease-linear duration-700'><FaLinkedin className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-[#42599e] transition-all ease-linear duration-700'><BsFacebook className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
            <div className='w-10 h-10 flex justify-center items-center hover:bg-[#00ab6c] transition-all ease-linear duration-700'><AiFillMediumSquare className='text-[rgb(102,102,102)] cursor-pointer hover:text-white' /></div>
            </div>
        </div>
        <div className='flex gap-5'>
            <p className='cursor-pointer hover:text-[#4a8eff]'>Apache AGE</p>
            <p className='cursor-pointer hover:text-[#4a8eff]'>CONTACT</p>
        </div>
    </div>
  )
}

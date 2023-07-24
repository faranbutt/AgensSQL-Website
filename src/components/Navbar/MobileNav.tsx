import { useState } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Accord from './Accord';
export default function MobileNav() {
    const [dropDown,setDropDown] = useState(false);
    const [navDropDown,setNavDropDown] = useState(false);
  return (
    <div>
    <div className='flex flex-col justify-end pt-8 px-3' style={{fontFamily:"Monda",fontWeight:'normal'}}>

    <div className='flex justify-between '>
        <div>
            <img src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" alt="logo" width={140} height={160}/>
        </div>
        <div className='cursor-pointer' onClick={() => setNavDropDown(!navDropDown)}>
            <RxHamburgerMenu  />
        </div>
    </div>
    <div className='h-4 pr-2 w-full items-center'>
        <div className='flex flex-col'>
        <div className="text-[rgb(102,102,102)] flex justify-end z-50">
            <button className="w-30 border-2 border-blue-500 text-xs font-extralight bg-gray-200 h-4 flex items-center rounded-md" onClick={()=>setDropDown(!dropDown)}><div>Select Language</div> <div><RiArrowDropDownLine className="h-5 w-5" /></div></button></div>
        { dropDown && <div className='z-10  w-30 flex justify-end text-xs font-extralight mr-2'> 
            <div className='flex flex-col border-gray-100 border-2 w-30 shadow-lg rounded-md'>
            <div className='hover:bg-gray-200 w-full px-1 py-1 rounded-lg'>Select Language</div>
            <div className='hover:bg-gray-200 w-full px-1 py-1 rounded-lg'>English</div>
            <div className='hover:bg-gray-200 w-full px-1 py-1 rounded-lg'>한국어</div>
            </div>     
            </div>
            }
        </div>
    </div>
    </div>
    <div>
        {navDropDown && 
           <div className='bg-white fixed z-50 pt-5'>
                <Accord  />
           </div>
        }
    </div>
    </div>
  )
}

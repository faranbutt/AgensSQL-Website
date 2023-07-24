
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
export default function CardFlip({features}:{features:any}) {
    const [flip, setFlip] = useState(false);
    
  return (
    <div onMouseEnter={()=>setFlip(true)} onMouseLeave={()=>setFlip(false)} className="mb-3 w-[500px] z-0">
    <ReactCardFlip isFlipped={flip} cardZIndex='0'
    flipDirection="horizontal"> 
    <div className="min-h-[80px] text-base text-[#0082cb] flex justify-center items-center border-2 border-blue-400 rounded-lg p-5">
        <div>
        {features.name}
        </div>

        <br />
        <br />
    </div>
    <div className="min-h-[80px] text-base text-white bg-[#0082cb] flex border-2 border-blue-400 rounded-lg p-5">
        <ul className="text-left list-disc">
            <li style={{listStyleType:''}}>{features.points[0]}</li>
            <li>{features.points[1]}</li>
        </ul>
        <br />
       
    </div>
    
</ReactCardFlip>
</div>
  )
}

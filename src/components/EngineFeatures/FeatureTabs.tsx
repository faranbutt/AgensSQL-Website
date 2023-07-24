import { useState } from "react"


export default function FeatureTabs() {
    const [showFirstList,setShowFirstList] = useState(false);
    const [showSecondList,setShowSecondList] = useState(false);
    const [showThirdList,setShowThirdList] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-10 md:gap-10 md:mx-20">
        <div className="flex justify-center items-center border-2 shadow-lg bg-white p-10 rounded-lg" onMouseEnter={()=>setShowFirstList(true)} onMouseLeave={()=>setShowFirstList(false)}>
            {!showFirstList && <img src="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png" alt="password profile" className="h-40" />}
            {showFirstList && 
            <div className="text-[#666666]">
                <li>user password policy reinforces login security</li>
                <li>excessive failed login attempts lock an account</li>
                <li>define rules for password complexity</li>
            </div>}
            
        </div>
        <div className="flex justify-center items-center border-2 shadow-lg bg-white p-10 rounded-lg" onMouseEnter={()=>setShowSecondList(true)} onMouseLeave={()=>setShowSecondList(false)}>
            {!showSecondList && <img src="https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png" alt="password profile" className="h-40" />}
            {showSecondList && 
            <div className="text-[#666666]">
                <li>enhanced data security of user personal information</li>
                <li>resolve privacy issues in preparation for security audits</li>
                <li>encryption or masking with unidentifiable special characters</li>
            </div>}
            
        </div>
        <div className="flex justify-center items-center border-2 shadow-lg bg-white p-10 rounded-lg" onMouseEnter={()=>setShowThirdList(true)} onMouseLeave={()=>setShowThirdList(false)}>
            {!showThirdList && <img src="https://bitnine.net/wp-content/uploads/2022/04/Auditing.png" alt="password profile" className="h-40" />}
            {showThirdList && 
            <div className="text-[#666666]">
                <li>monitors database activities and collects data</li>
                <li>traces object accessed or DDL & DML statements executed by a user</li>
                <li>records all actions in logs</li>
            </div>}
            
        </div>
        
    </div>
  )
}

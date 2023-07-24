import CardFlip from "./CardFlip";
import { agensEnterprise } from "../../constants/constants";

export default function AgensEnterpriseManager() {
  return (
    <div className="w-full gap-10 flex flex-col justify-center items-center">
        <h5 className="text-[#444444] font-bold text-lg md:text-xl ">Agens Enterprise Manager</h5>
        <div>

          {agensEnterprise.map((features)=>{
           return(
            <div>
             <CardFlip features={features} />
           </div>
           );
})}
        </div>
    </div>
  )
}

import AgensEnterpriseManager from "./AgensEnterpriseManager";
import HaManger from "./HaManger";
import Heading from "./Heading";


export default function Enterprise() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-10">
        <div style={{fontFamily:"Monda",fontWeight:'normal'}}  className="gap-20">
            <Heading />
            <div className='flex w-full justify-center mt-10'>
              <div className="w-1/2 mr-10"><HaManger /></div>
              <div className="w-1/2 ml-10"><AgensEnterpriseManager /></div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

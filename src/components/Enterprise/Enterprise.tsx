import AgensEnterpriseManager from "./AgensEnterpriseManager";
import HaManger from "./HaManger";
import Heading from "./Heading";


export default function Enterprise() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-10">
        <div style={{fontFamily:"Monda",fontWeight:'normal'}}  className="gap-20">
            <Heading />
            <div className='flex flex-col md:flex-row w-full justify-center md:mt-10'>
              <div className="md:w-1/2 md:mr-10"><HaManger /></div>
              <div className="md:w-1/2 md:ml-10"><AgensEnterpriseManager /></div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import {RiArrowDownSLine} from 'react-icons/ri'
export default function Accord() {
  return (
    <div className="w-full" style={{fontFamily:"Monda",fontWeight:'normal'}}>
      <Accordion >
      <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-t-2 border-gray-100 text-[#fac433]"><h3>PRODUCTS</h3><p><RiArrowDownSLine className=' w-7 h-7' /></p></div></div>
                </AccordionHeader>
                <AccordionBody>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >Graph Database</h3><p><RiArrowDownSLine className=' w-7 h-7' /></p></div></div>
                </AccordionHeader>
                <AccordionBody>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-6 py-3  text-white bg-black opacity-90 hover:opacity-80 text-sm"><h3 >Agens Graph</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-6 py-3  text-white bg-black opacity-90 hover:opacity-80 text-sm"><h3 >Apache AGE</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-6 py-3  text-white bg-black opacity-90 hover:opacity-80 text-sm"><h3 >AG Cloud</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-6 py-3  text-white bg-black opacity-90 hover:opacity-80 text-sm"><h3 >Visualization and Analytics</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-t-2 border-gray-100 text-white bg-black opacity-50 hover:opacity-80 text-sm text-center"><h3>Relational Database</h3><p><RiArrowDownSLine className=' w-7 h-7' /></p></div></div>
                </AccordionHeader>
                <AccordionBody>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-90 hover:opacity-80 text-sm"><h3 >Agens SQL</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                </AccordionBody>
                </AccordionItem>



                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-y-2 border-gray-100 hover:text-[#fac433]"><h3>USE CASES</h3></div></div>
                </AccordionHeader>
                <AccordionBody>

                </AccordionBody>

            </AccordionItem>
            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2  border-gray-100 hover:text-[#fac433]"><h3>SERVICES</h3></div></div>
                </AccordionHeader>
                <AccordionBody>

                </AccordionBody>
               
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-t-2 border-gray-100 hover:text-[#fac433]"><h3>RESOURCES</h3><p><RiArrowDownSLine className=' w-7 h-7' /></p></div></div>
                </AccordionHeader>
                <AccordionBody>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >Documentation</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >Learn</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-y-2 border-gray-100 hover:text-[#fac433]"><h3>BLOG</h3></div></div>
                </AccordionHeader>
                <AccordionBody>

                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2  border-gray-100 hover:text-[#fac433]"><h3>COMPANY</h3><p><RiArrowDownSLine className=' w-7 h-7' /></p></div></div>
                </AccordionHeader>
                
                <AccordionBody>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >About us</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >Contact</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-y-2 border-gray-100 hover:text-[#fac433]"><h3>IR</h3><p><RiArrowDownSLine className=' w-7 h-7' /></p></div></div>
                </AccordionHeader>
                <AccordionBody>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >IR 공고</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >IR 공시 정보</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                    <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-3  text-white bg-black opacity-50 hover:opacity-80 text-sm"><h3 >IR 재무 정보</h3></div></div>
                </AccordionHeader>
                </AccordionItem>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <div className={`accordion-title`}><div className="w-screen flex  justify-between px-3 py-2 border-b-2 border-gray-100 hover:text-[#fac433]"><button className={`px-[0.4rem] py-[0.4rem] bg-[#022EA9] rounded-md text-white hover:text-[#fac433]  cursor-pointer`}>TRY FREE</button></div></div>
                </AccordionHeader>
                <AccordionBody>

                </AccordionBody>
            </AccordionItem>
            
      </Accordion>
    </div>
  );
}

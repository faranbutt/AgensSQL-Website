import FooterHead from "./FooterHead";
import FooterTail from "./FooterTail";


export default function Footer() {
  return (
    <div className="w-full py-10 md:py-16 px-16" style={{fontFamily:"Monda",fontWeight:'normal'}}>
        <div className="hidden md:flex">
        <FooterHead />
        </div>
        <FooterTail />
    </div>
  )
}

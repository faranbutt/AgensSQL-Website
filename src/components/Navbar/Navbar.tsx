import { useState, useEffect } from "react";
import Header from "./Header";
import NavFoot from "./NavFoot";
import NavMiddle from "./NavMiddle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;
      const windowHeight = window.innerHeight;
      const fullDocumentHeight = document.body.scrollHeight;
      const distanceFromBottom = fullDocumentHeight - (scrollY + windowHeight);

      setShowHeader(scrollY > scrollThreshold && distanceFromBottom > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
    <div className="fixed top-0 w-full bg-white hidden sm:flex flex-col">
      <div className={`w-full transition-opacity ${showHeader ? "show" : "hidden"}`}>
        <Header />
      </div>
      <NavMiddle />
      <NavFoot />
    </div>
    <div className="lg:hidden w-full">
      <MobileNav />
    </div>
    </div>
  );
}

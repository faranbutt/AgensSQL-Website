

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-8" style={{fontFamily:"Monda",fontWeight:'normal'}}>
        <img src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png" alt="AgenSQL" />
        <div className="text-[#444444] font-bold text-2xl">An integration of Bitnine’s DB technology and PG expertise</div>
        <div className="flex flex-col gap-5 text-[#666666]">
            <div>AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise <br /> and knowledge accumulated through database research and development.</div>
            <div>The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures <br /> the efficiency and scalability of data management.</div>
            <div>Get AgensSQL now for stable operation and management services at a reduced <br /> maintenance cost.</div>
        </div>
        <div className="flex gap-10 m-5">
            <button className="bg-[#022EA9] border-2 border-white text-white font-bold px-4 py-2 rounded-lg hover:text-[#fac433]">CONTACT</button>
            <button className="bg-[#022EA9] border-2 border-white text-white font-bold px-4 py-2 rounded-lg hover:text-[#fac433]">BROCHURE</button>
            <button className="bg-[#022EA9] border-2 border-white text-white font-bold px-4 py-2 rounded-lg hover:text-[#fac433]">BLOG</button>
        </div>

        <div className='py-20 w-full flex justify-center items-center' style={{background:'rgb(243, 246, 251)'}}>
          <div>
           <img src="https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png" alt="services" />
          </div>
        </div>
    </div>
  )
}

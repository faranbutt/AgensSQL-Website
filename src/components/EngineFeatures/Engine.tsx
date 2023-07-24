import FeatureTabs from "./FeatureTabs";


export default function Engine() {
  return (
    <div style={{fontFamily:"Monda",fontWeight:'normal'}}>
    <div className="w-full py-20" style={{background:'rgb(243, 246, 251)'}}>
        <div className="flex flex-col gap-5 text-center">
            <div className="text-4xl"><strong>AgensSQL DB Engine</strong></div>
            <div><strong className="text-[#444444] text-xl underline">Enhanced Data Security</strong></div>
            <div>AgensSQL is a PostgreSQL-based DBMS <br /> that guarantees optimal security and stability.</div>
        </div>
        <div>
            <FeatureTabs />
        </div>
    </div>
    </div>
  )
}

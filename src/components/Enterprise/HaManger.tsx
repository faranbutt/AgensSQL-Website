export default function HaManger() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center" style={{ height: "500px" }}>
        <div className="mb-10">
          <h1 className="text-[#444444] font-bold text-xl">Agens HA Manager</h1>
          <h5 className="text-xl text-[#444444]">
            <strong className="text-[#0082cb]">HA-Clustering</strong>– Failover/Failback, Load-balancing
          </h5>
        </div>
        <div style={{ width: "575px", height: "472px", overflow: "hidden" }}>
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"
            alt="ha-manager"
            style={{ width: "100%", height: "100%", }}
          />
        </div>
      </div>
    </div>
  );
}


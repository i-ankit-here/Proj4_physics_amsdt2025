// import React from "react";

const OrganizingHeads = () => {
  const patrons = [
    {
      name: "Prof. Binod Kumar Kanaujia",
      position: "Director, NIT Jalandhar & Faculty Advisor, IEEE Student Branch NIT Jalandhar",
      image: "speaker.jpeg",
      role: "Patron"
    },
    {
      name: "Prof. Anand Mohan",
      position: "Director, Institute of Nano Science and Technology, Mohali",
      image: "speaker.jpeg",
      role: "Patron"
    }
  ];

  const coPatrons = [
    {
      name: "Prof. Ajay Bansal",
      position: "Registrar(I/C), NIT Jalandhar",
      image: "speaker.jpeg",
      role: "Co-Patron"
    },
    {
      name: "Prof. Rohit Mehra",
      position: "Dean (R&C), NIT Jalandhar",
      image: "speaker.jpeg",
      role: "Co-Patron"
    }
  ];

  return (
    <div className="bg-black w-full py-16 relative overflow-hidden">
      {/* Atomic/Molecular Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {/* Electron Orbits */}
        <div className="absolute w-[600px] h-[600px] border border-[#00ff4c]/10 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] border border-[#00ff4c]/20 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute w-[200px] h-[200px] border border-[#00ff4c]/30 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Electrons */}
        <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full left-[calc(50%-300px)] top-1/2 transform -translate-y-1/2 animate-ping opacity-75"></div>
        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full left-[calc(50%-200px)] top-1/2 transform -translate-y-1/2 animate-ping opacity-75"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#00ff4c] rounded-full left-[calc(50%-100px)] top-1/2 transform -translate-y-1/2 animate-ping opacity-75"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c] inline-flex items-center">
            <span className="relative">
              Organizing Heads
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff4c] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Patrons Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {patrons.map((patron, index) => (
              <div 
                key={index} 
                className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70 transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20 backdrop-blur-sm max-w-sm flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                    <img 
                      src={patron.image} 
                      alt={patron.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1 rounded-full text-sm">
                    {patron.role}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">{patron.name}</h3>
                <p className="text-gray-300 text-center text-sm">{patron.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Patrons Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          {coPatrons.map((coPatron, index) => (
            <div 
              key={index} 
              className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70 transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20 backdrop-blur-sm max-w-sm flex flex-col items-center"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                  <img 
                    src={coPatron.image} 
                    alt={coPatron.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1 rounded-full text-sm">
                  {coPatron.role}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">{coPatron.name}</h3>
              <p className="text-gray-300 text-center text-sm">{coPatron.position}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default OrganizingHeads;
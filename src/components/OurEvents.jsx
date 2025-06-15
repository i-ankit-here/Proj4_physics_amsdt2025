import { Link } from "react-router-dom";

const data = [
  {
    title: "Technical Sessions",
    content:`<div>
              <p>
                Technical sessions will focus on the theme of the Congress, and the following broad topics will be explored through Plenary Sessions, Invited Lectures, Paper Presentations, and Poster Sessions.
              </p>

              <p>
                There will be three best paper awards each in Oral and Poster presentations in every session. Awards will be given to the top two papers presented in each session under both categories.
              </p>

              <p>The topics to be covered include, but are not limited to:</p>

              <ul>
                <li>Chemical Process Safety Management</li>
                <li>Green Technology</li>
                <li>Novel Separation Techniques</li>
                <li>New and Renewable Energy</li>
                <li>Sustainable Development</li>
                <li>Hydrocarbon and Other Fossil Fuels</li>
                <li>Energy and Environmental Policy Issues</li>
                <li>Modelling, Simulation, and Scale-up</li>
                <li>Nanotechnology</li>
                <li>Process Development</li>
                <li>Chemical and Fertilizer Technology</li>
                <li>Nuclear and Thermal Power</li>
                <li>Chemical Engineering in the New Century</li>
                <li>Agrochemical Technology</li>
                <li>Membrane Separation Processes</li>
                <li>Mining and Mineral Processing</li>
              </ul>
            </div>
`,
    bg: "bg-accent-100",
  },
  {
    title: "Exhibition",
    content:
      "An exhibition of Chemical Engineering and allied businesses including safety, technology providers, consultants, institution, tour packages and communication, Equipment, Instruments, Books and Journals, etc. is proposed during CHEMCON 2024. Interested organizations will be allotted space of the following dimensions in the form of exhibition stalls with all facilities like furniture, power, etc. ",
    bg: "bg-accent-400 text-black",
  },
  {
    title: "Sri Dhirubhai Ambani Commemoration Day",
    content:
      "Shri Dhirubhai Ambani Commemoration day will be celebrated on December 28, 2024 as a tribute to the great visionary.",
    bg: "bg-accent-200",
  },
  {
    title: "International Symposium",
    content:
      "International Joint Symposiums related to the theme will be held as part of CHEMCON 2024",
    bg: "bg-accent-300",
  },
  {
    title: "Quiz Competition",
    content:
      "Quiz Competition will be conducted for the student delegates    based on GATE 2024 syllabus. The prize will be distributed to the   winners.",
    bg: "bg-accent-500 text-black",
  },
  // {
  //   title: "Accommodation",
  //   content:
  //     "The accommodation for the delegates can be arranged in hotels (List will be available on website), guest houses and institute     hostels subject to the availability of the same on request and on  payment basis. The requirement for the preferred accommodation along with the tariff range and single/ double occupancy should be  sent to the Organizing Secretary well in advance.",
  //   bg: "bg-accent-100",
  // },
  // {
  //   title: "Souvenir",
  //   content:
  //     "An informative souvenir will be made available to all the delegates. Contributions are solicited to support this mega event, CHEMCON-2024, through advertisements",
  //   bg: "bg-accent-200",
  // },
]; 

function OurEvents() {
  return (
    <div className="bg-white container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-emerald-600">Our Events</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent mx-auto mb-8"></div>
      </div>
      
      <Link to="/events" className="block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-emerald-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-100 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6 h-full bg-white backdrop-blur-sm">
                <div className="flex flex-col h-full">
                  <h4 className="font-bold text-xl md:text-2xl mb-4 text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  
                  <div 
                    className="text-sm leading-relaxed text-gray-600 overflow-hidden max-h-[300px] overflow-y-auto custom-scrollbar"
                    dangerouslySetInnerHTML={{ __html: item.content }} 
                  />
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-100 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-emerald-200 group-hover:bg-emerald-500 transition-colors duration-300"></div>
              <div className="absolute top-2 right-7 w-2 h-2 rounded-full bg-emerald-100 group-hover:bg-emerald-400 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </Link>
      
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(16, 185, 129, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
        `}
      </style>
    </div>
  );
}

export default OurEvents;

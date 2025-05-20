// import { SocialIcon } from "react-social-icons";

// const socialLinks = [
//   {
//     id: 1,
//     url: "https://www.facebook.com/",
//   },
//   {
//     id: 2,
//     url: "https://www.instagram.com/",
//   },
//   {
//     id: 3,
//     url: "https://www.x.com/",
//   },
//   {
//     id: 4,
//     url: "https://www.linkedin.com/",
//   },
//   {
//     id: 5,
//     url: "https://www.github.com/",
//   },
// ];
// const footerLinks = [
//   {
//     id: 1,
//     title: "Services",
//     links: [
//       {
//         id: 1,
//         title: "1on1 Coaching",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Company Review",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//       {
//         id: 4,
//         title: "HR Consulting",
//         url: "#",
//       },
//       {
//         id: 5,
//         title: "SEO Optimisation",
//         url: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Company",
//     links: [
//       {
//         id: 1,
//         title: "About",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Meet the Team",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//     ],
//   },
// ];

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden border-t border-[#00ff4c]/30">
      <div className="container mx-auto relative z-10 px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Contact Information */}
          <div className=" backdrop-blur-sm bg-black/50 border border-[#00ff4c]/30 rounded-xl p-8 shadow-lg shadow-[#00ff4c]/10 relative overflow-hidden mb-10 lg:mb-0">
            {/* Atom icon */}
            <div className="absolute -right-4 -top-4 w-20 h-20 opacity-10">
              <div className="w-full h-full border-2 border-[#00ff4c] rounded-full relative">
                <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-[#00ff4c] mb-4 flex items-center">
              Contact Us
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00ff4c] rounded-full mr-3 mt-1.5"></span>
                  <span>Dr. Shailendra Bajpai</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00ff4c] rounded-full mr-3 mt-1.5"></span>
                  <span>Organizing Secretary, CHEMCON-2024</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00ff4c] rounded-full mr-3 mt-1.5"></span>
                  <span>Phone: 9815909328</span>
                </li>
              </ul>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00ff4c] rounded-full mr-3 mt-1.5"></span>
                  <span>Email: chemcon2024@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00ff4c] rounded-full mr-3 mt-1.5"></span>
                  <a href="/" className="text-[#00ff4c] hover:text-white transition-colors">
                    Website: www.chemcon2024.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* SVG Atom Illustration */}
          <div className="w-full max-w-[400px] h-[400px] relative">
            <svg width="400" height="400" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              {/* Central Nucleus */}
              <circle cx="300" cy="300" r="20" fill="#00ff4c" stroke="#00ff4c" strokeWidth="2" />

              {/* Orbital 1 */}
              <ellipse cx="300" cy="300" rx="80" ry="200" fill="none" stroke="#00ff4c" strokeWidth="1.5" transform="rotate(60 300 300)" />
              {/* Electron on Orbital 1 */}
              <circle cx="300" cy="210" r="6" fill="#00ff4c" />

              <ellipse cx="300" cy="300" rx="40" ry="100" fill="none" stroke="#00ff4c" strokeWidth="1.5" transform="rotate(60 300 300)" />
              {/* Electron on Orbital 1 */}
              <circle cx="150" cy="416" r="6" fill="#00ff4c" />

              {/* Orbital 3 */}
              <ellipse cx="300" cy="300" rx="60" ry="150" fill="none" stroke="#00ff4c" strokeWidth="1.5" transform="rotate(60 300 300)" />
              {/* Electron on Orbital 3 */}
              <circle cx="400" cy="327" r="6" fill="#00ff4c" />

              {/* Glow effect (optional aesthetic) */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Applying glow to nucleus and electrons */}
              <circle cx="300" cy="300" r="20" fill="#00ff4c" filter="url(#glow)" />
              <circle cx="300" cy="210" r="6" fill="#00ff4c" filter="url(#glow)" />
              <circle cx="300" cy="345" r="6" fill="#00ff4c" filter="url(#glow)" />
              <circle cx="400" cy="210" r="6" fill="#00ff4c" filter="url(#glow)" />
              <circle cx="400" cy="327" r="6" fill="#00ff4c" filter="url(#glow)" />
              <circle cx="180" cy="327" r="6" fill="#00ff4c" filter="url(#glow)" />
            </svg>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#00ff4c]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ul className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00ff4c] transition-colors text-sm flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00ff4c] rounded-full mr-2"></span>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00ff4c] transition-colors text-sm flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00ff4c] rounded-full mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00ff4c] transition-colors text-sm flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00ff4c] rounded-full mr-2"></span>
                  Cookies
                </a>
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              &copy; 2023 XCEED-NITJ All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

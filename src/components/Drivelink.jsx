function DriveLinks() {
    const links = [
      { name: "Day 1", link: "https://drive.google.com/drive/folders/18OarkKtKUrww3yAZWLZkJfUgFIQI_1q_?usp=sharing" },
      { name: "Day 2", link: "https://drive.google.com/drive/folders/1aB7APFuKlDSKcvpC5125BGPXnn4t9PCd?usp=sharing" },
      { name: "Day 3", link: "https://drive.google.com/drive/folders/12H8CKipk_ALc29ZJOBbyaqHUEKFzn6Zr?usp=sharing" },
      { name: "Day 4", link: "https://drive.google.com/drive/folders/1YdyZXyHZZbGswb6Y7mHlEBIy5m5jrd6N?usp=sharing" },
    ];
  
    return (
      <div className="bg-black container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 mb-5 sm:mb-5 mt-28">
        <div className="py-16">
          <h2 className="text-4xl font-sans font-bold text-center text-[#00ff4c] mb-6">
            Drive Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 px-6">
            {links.map((link, index) => (
              <div
                key={index}
                className="p-5 border border-[#00ff4c] bg-[#00120a] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-[#00ff4c]/30 backdrop-blur-sm"
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="text-[#00ff4c] font-bold text-xl mb-1">
                      {link.name}
                    </div>
                    <div className="text-gray-300 text-sm hover:text-[#00ff4c] transition-colors break-all">
                      {link.link}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default DriveLinks;
  
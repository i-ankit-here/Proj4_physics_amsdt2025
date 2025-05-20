function DriveLinks() {
    const links = [
      { name: "Day 1", link: "https://drive.google.com/drive/folders/18OarkKtKUrww3yAZWLZkJfUgFIQI_1q_?usp=sharing" },
      { name: "Day 2", link: "https://drive.google.com/drive/folders/1aB7APFuKlDSKcvpC5125BGPXnn4t9PCd?usp=sharing" },
      { name: "Day 3", link: "https://drive.google.com/drive/folders/12H8CKipk_ALc29ZJOBbyaqHUEKFzn6Zr?usp=sharing" },
      { name: "Day 4", link: "https://drive.google.com/drive/folders/1YdyZXyHZZbGswb6Y7mHlEBIy5m5jrd6N?usp=sharing" },
    ];
  
    return (
      <div className="bg-white container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 mb-5 sm:mb-5 mt-28">
        <div className=" py-16 ">
          <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-3">
            Drive Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-6">
            {links.map((link, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow  hover:shadow-accent-600"
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div >
                    <div className="text-black font-medium  truncate">
                      {link.name}
                    </div>
                    <div className="text-blue-600 text-sm hover:underline break-all">
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
  
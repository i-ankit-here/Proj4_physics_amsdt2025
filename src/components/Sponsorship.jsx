// import React from "react";

function SponsorShip() {
    const data1 = [
        { category: 'Platinum Sponsorship', price: 3000000 },
        { category: 'Gold Sponsorship', price: 2000000 },
        { category: 'Silver Sponsorship', price: 1500000 },
        { category: 'Delegate Kit', price: 1000000 },
        { category: 'Lunch (each day)', price: 500000 },
        { category: 'Dinner (each day)', price: 500000 },
        { category: 'High Tea (First day or last day)', price: 200000 },
        { category: 'Breakfast (each day)', price: 200000 },
        { category: 'Tea during break', price: 50000 },
        { category: 'Plenary Lectures (each)', price: 100000 },
        { category: 'Parallel Sessions (each)', price: 100000 },
        { category: 'Poster Sessions (each)', price: 150000 },
        { category: 'Cultural Programs (each)', price: 200000 },
        { category: 'Conference Proceeding', price: 200000 },
        { category: 'Delegate Kit CD/Pen Drive', price: 100000 },
        { category: 'Banner of each event', price: 25000 },
    ];
    const halfLength = Math.ceil(data1.length / 2);
    const firstHalf = data1.slice(0, halfLength);
    const secondHalf = data1.slice(halfLength);
    const array = firstHalf.map((value1, index) => ({
        value1,
        value2: secondHalf[index]
    }));
    
    const data2 = [
        { location: 'Multicolor Back page', price: 150000 },
        { location: 'Multicolor Back inside gatefold', price: 100000 },
        { location: 'Multicolor Front inside gatefold', price: 60000 },
        { location: 'Multicolor Full page', price: 25000 },
        { location: 'Multicolor Half page', price: 15000 },
        { location: 'Black & White Full Page', price: 15000 },
        { location: 'Black & White half Page', price: 7500 },
    ];
    
    return (
        <div className="bg-black container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 py-20">
            <div className="w-full md:w-[700px] lg:w-3/5 px-4 lg:max-w-full">
                <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-4">
                    Sponsorship Rates
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
                
                <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#00ff4c]/20 transition-all duration-300">
                    <p className="text-base text-justify font-sans font-base text-gray-300 mb-6">
                        The sponsors are entitled to nominate two complimentary
                        delegates along with availing of local hospitality during the
                        congress. They are also entitled to put hoardings/ Banners at the
                        suitable locations provided by the organizers.
                    </p>
                    
                    <div className="overflow-x-auto">
                        <table className="mt-3 text-sm md:text-base border-collapse box-border min-w-full">
                            <thead>
                                <tr className="border-b-2 border-[#00ff4c]/50">
                                    <th className="p-3 text-left text-[#00ff4c]">Category</th>
                                    <th className="p-3 text-left text-[#00ff4c]">Price in INR</th>
                                    <th className="p-3 text-left text-[#00ff4c]">Category</th>
                                    <th className="p-3 text-left text-[#00ff4c]">Price in INR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {array.length > 0 ? array.map((item, index) => (
                                    <tr key={index} className="border-b border-[#00ff4c]/20 hover:bg-[#00ff4c]/10 transition-colors">
                                        <td className="p-3 text-left text-gray-300">{item.value1.category}</td>
                                        <td className="p-3 text-left text-[#00ff4c]">{item.value1.price.toLocaleString()}</td>
                                        <td className="p-3 text-left text-gray-300">{item.value2?.category || ""}</td>
                                        <td className="p-3 text-left text-[#00ff4c]">{item.value2?.price?.toLocaleString() || ""}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="4" className="p-3 text-center text-gray-300">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[700px] px-4 lg:w-2/5 lg:max-w-[450px] mt-10 lg:mt-0 mx-auto lg:px-5 lg:border-l lg:border-[#00ff4c]/30 lg:pl-8">
                <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-4">Souvenir</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
                
                <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#00ff4c]/20 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#00ff4c]/50"></div>
                    <div className="absolute top-2 right-7 w-2 h-2 rounded-full bg-[#00ff4c]/30"></div>
                    
                    <p className="text-base text-justify font-sans font-base text-gray-300 mb-6">
                        An informative souvenir will be made available to all the delegates.
                        Contributions are solicited to support this mega event,
                        CHEMCON-2024, through advertisements. The rates are as
                        follows:
                    </p>
                    
                    <div className="overflow-x-auto">
                        <table className="mt-3 border-collapse box-border min-w-full">
                            <thead>
                                <tr className="border-b-2 border-[#00ff4c]/50">
                                    <th className="p-3 text-left text-[#00ff4c]">Location</th>
                                    <th className="p-3 text-left text-[#00ff4c]">Price in INR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data2.length > 0 ? data2.map((item, index) => (
                                    <tr key={index} className="border-b border-[#00ff4c]/20 hover:bg-[#00ff4c]/10 transition-colors">
                                        <td className="p-3 text-left text-gray-300">{item.location}</td>
                                        <td className="p-3 text-left text-[#00ff4c]">{item.price.toLocaleString()}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="2" className="p-3 text-center text-gray-300">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff4c]/30"></div>
                </div>
            </div>
        </div>
    );
}

export default SponsorShip;

import { useEffect } from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function RegistrationFee() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Updated data based on the provided image
    const data = [
        { 
            category: 'PG Students/Research Scholars (PhD student)', 
            nitj: '3500', 
            outside: '4130', 
            abroad: '60' 
        },
        { 
            category: 'Faculty/Scientist', 
            nitj: '4000', 
            outside: '4720', 
            abroad: '60' 
        },
        { 
            category: 'Person from Industry', 
            nitj: '-', 
            outside: '5310', 
            abroad: '100' 
        },
    ];

    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute w-[800px] h-[800px] border border-[#00ff4c]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
                <div className="absolute w-[500px] h-[500px] border border-[#00ff4c]/15 rounded-full -left-1/4 bottom-1/4"></div>
                <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full left-[10%] top-[20%] animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
            </div>
            
            <div className="fixed top-0 w-screen z-40"> 
                <Navbar />      
            </div>
            
            <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-[80px] lg:pt-[100px] pb-16 relative z-10">
                <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#00ff4c]/10 backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-[#00ff4c] mb-4">
                        Registration Fee
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-8"></div>
                    
                    <div className="text-gray-300 prose prose-invert max-w-none">
                        <p className="mb-6">The authors presenting the papers must register themselves before the last date of registration.</p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#00ff4c]/20 border-b-2 border-[#00ff4c]/50">
                                        <th className="p-3 text-left font-bold text-[#00ff4c]">S No.</th>
                                        <th className="p-3 text-left font-bold text-[#00ff4c]">Category</th>
                                        <th className="p-3 text-center font-bold text-[#00ff4c]" colSpan="3">Participation Fee</th>
                                    </tr>
                                    <tr className="bg-[#00ff4c]/10 border-b border-[#00ff4c]/30">
                                        <th className="p-3"></th>
                                        <th className="p-3"></th>
                                        <th className="p-3 text-center text-gray-400">From NIT Jalandhar</th>
                                        <th className="p-3 text-center text-gray-400">From outside NIT Jalandhar<br/>(Including GST @ 18%)</th>
                                        <th className="p-3 text-center text-gray-400">Abroad in USD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} className="border-b border-[#00ff4c]/20 hover:bg-[#00ff4c]/5 transition-colors">
                                            <td className="p-3 text-center">{index + 1}.</td>
                                            <td className="p-3">{item.category}</td>
                                            <td className="p-3 text-center">{item.nitj}</td>
                                            <td className="p-3 text-center">{item.outside}</td>
                                            <td className="p-3 text-center">{item.abroad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="mt-8 p-4 bg-[#00ff4c]/5 border-l-4 border-[#00ff4c] rounded">
                            <p className="font-medium text-[#00ff4c]">Note:</p>
                            <p className="mt-2">Registration fee does not include accommodation charges. Accommodation charges will be paid by the participants.</p>
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                            <button className="bg-[#00ff4c] hover:bg-[#00cc3d] text-black font-bold py-3 px-8 rounded-md transition-all">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default RegistrationFee

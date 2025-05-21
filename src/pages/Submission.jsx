import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Submission() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        Abstract Submission
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-8"></div>
                    
                    <div className="text-gray-300 space-y-6">
                        <p className="leading-relaxed">
                            Authors may submit an abstract limited to 250 words containing title, brief introduction, objectives, relevance, 
                            methodology and major findings of the paper. It should be typed in MS Word, Times New Roman 12 Points font, 
                            single spacing with one inch margins on all sides.
                        </p>
                        
                        <p className="leading-relaxed">
                            The corresponding author should be marked with asterisk (*) sign. 
                            The name of the presenting author should be underlined. The abstracts must include the affiliations of all authors 
                            along with email address.
                        </p>
                        
                        <p className="leading-relaxed">
                            The papers will be invited for online oral/poster presentations provided good quality 
                            abstracts are received and shortlisted. Only one author per abstract whose name has been underlined will be allowed to 
                            present the paper.
                        </p>
                        
                        <div className="p-4 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg">
                            <p className="font-medium text-[#00ff4c]">Awards:</p>
                            <p className="mt-2">Best oral/poster presentations will be awarded.</p>
                        </div>
                        
                        <div className="mt-10 space-y-6">
                            <h2 className="text-2xl font-bold text-[#00ff4c]">Submission Guidelines</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-5 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg">
                                    <h3 className="text-xl font-bold text-[#00ff4c] mb-3">Format Requirements</h3>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>Maximum 250 words</li>
                                        <li>MS Word format</li>
                                        <li>Times New Roman, 12pt font</li>
                                        <li>Single spacing</li>
                                        <li>One inch margins on all sides</li>
                                        <li>Mark corresponding author with asterisk (*)</li>
                                        <li>Underline presenting author&apos;s name</li>
                                    </ul>
                                </div>
                                
                                {/* <div className="p-5 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg">
                                    <h3 className="text-xl font-bold text-[#00ff4c] mb-3">Content Structure</h3>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>Title</li>
                                        <li>Brief introduction</li>
                                        <li>Objectives</li>
                                        <li>Relevance</li>
                                        <li>Methodology</li>
                                        <li>Major findings</li>
                                        <li>Author affiliations and email addresses</li>
                                    </ul>
                                </div> */}
                            </div>
                            
                            {/* <div className="mt-8 p-5 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg">
                                <h3 className="text-xl font-bold text-[#00ff4c] mb-3">Submission Process</h3>
                                <ol className="space-y-4 list-decimal pl-5">
                                    <li>
                                        <p className="font-medium">Prepare your abstract according to the format requirements</p>
                                        <p className="text-sm text-gray-400 mt-1">Ensure all formatting guidelines are followed precisely.</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">Submit your abstract via email</p>
                                        <p className="text-sm text-gray-400 mt-1">Send your abstract to <a href="mailto:amsdt2025@nitj.ac.in" className="text-[#00ff4c] hover:underline">amsdt2025@nitj.ac.in</a> with the subject line &quotAbstract Submission - [Your Name]&quot.</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">Wait for confirmation</p>
                                        <p className="text-sm text-gray-400 mt-1">You will receive an acknowledgment email within 3-5 working days.</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">Review process</p>
                                        <p className="text-sm text-gray-400 mt-1">Abstracts will be reviewed by the scientific committee. Notification of acceptance will be sent via email.</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">Registration</p>
                                        <p className="text-sm text-gray-400 mt-1">Upon acceptance, at least one author must register for the conference to present the paper.</p>
                                    </li>
                                </ol>
                            </div> */}
                        </div>
                        
                        <div className="mt-10 flex justify-center">
                            <a 
                                href="/registration" 
                                className="bg-[#00ff4c] hover:bg-[#00cc3d] text-black font-bold py-3 px-8 rounded-md transition-all"
                            >
                                Register for Conference
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Decorative atom */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-20 pointer-events-none">
                    <div className="w-full h-full border-2 border-[#00ff4c] rounded-full relative">
                        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Submission;
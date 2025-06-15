import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from "axios";
import getEnvironment from "../getenvironment";

function Location(props) {
    const confid = props.confid;
    const [data, setData] = useState(null)
    const [apiUrl, setApiUrl] = useState(null);
    
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (apiUrl) {
            axios.get(`${apiUrl}/conferencemodule/location/${confid}`, {
                withCredentials: true
            })
                .then(res => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        }
    }, [apiUrl, confid]);
   
    return (
        <div className="bg-white min-h-screen relative overflow-hidden pt-[166px]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute w-[800px] h-[800px] border border-[#2563eb]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
                <div className="absolute w-[500px] h-[500px] border border-[#2563eb]/15 rounded-full -left-1/4 bottom-1/4"></div>
                <div className="absolute w-3 h-3 bg-[#2563eb] rounded-full left-[10%] top-[20%] animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#2563eb] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
            </div>
            
            <div className="fixed top-0 w-screen z-40"> 
                <Navbar />      
            </div>
            
            <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-[80px] lg:pt-[100px] pb-16 relative z-10">
                <div className="bg-[white] border border-[#2563eb]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-[#2563eb] mb-4">
                        How to Reach NIT Jalandhar
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#2563eb] to-transparent mb-8"></div>
                    
                    {data ? (
                        <div className="text-gray-700 prose prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{__html:data.description}}/>
                        </div>
                    ) : (
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                        </div>
                    )}
                    
                    {/* Map container */}
                    {/* <div className="mt-8 border border-[#2563eb]/30 rounded-lg overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.1377287966196!2d75.53326491497945!3d31.39686998141244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xee7a6c0cae52768!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1679911376371!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        ></iframe>
                    </div> */}
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Location

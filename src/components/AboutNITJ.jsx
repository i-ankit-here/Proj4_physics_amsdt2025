import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

function AboutNITJ(props) {
    const confid = props.confid;
    const [apiUrl, setApiUrl] = useState(null);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);

    useEffect(() => {
        if (apiUrl) {
            setIsLoading(true);
            axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
                withCredentials: true
            })
                .then(res => {
                    setData(res.data);
                    setIsLoading(false);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
    }, [apiUrl, confid]);

    return (
        <div className="bg-black container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl px-4 sm:px-10 lg:px-8 mx-auto py-16 min-h-[280px]">
            <div className="w-full md:w-[700px] px-4 lg:w-3/5 lg:max-w-full">
                <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-4">
                    About NITJ
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
                
                <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#00ff4c]/20 transition-all duration-300">
                    {isLoading ? (
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-[#001a0d] rounded w-3/4"></div>
                            <div className="h-4 bg-[#001a0d] rounded"></div>
                            <div className="h-4 bg-[#001a0d] rounded w-5/6"></div>
                            <div className="h-4 bg-[#001a0d] rounded w-2/3"></div>
                        </div>
                    ) : (
                        <div className="text-base text-justify font-sans font-base text-gray-300">
                            {data ? <div dangerouslySetInnerHTML={{ __html: data.about[2].description || '' }} /> : <div></div>}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="w-full md:w-[700px] lg:w-2/5 lg:max-w-[450px] px-4 mt-10 lg:mt-0 mx-auto lg:px-5">
                <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-4">
                    About the Department
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
                
                <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#00ff4c]/20 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#00ff4c]/50"></div>
                    <div className="absolute top-2 right-7 w-2 h-2 rounded-full bg-[#00ff4c]/30"></div>
                    
                    {isLoading ? (
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-[#001a0d] rounded w-3/4"></div>
                            <div className="h-4 bg-[#001a0d] rounded"></div>
                            <div className="h-4 bg-[#001a0d] rounded w-5/6"></div>
                            <div className="h-4 bg-[#001a0d] rounded w-2/3"></div>
                        </div>
                    ) : (
                        <div className="text-base text-justify font-sans font-base text-gray-300">
                            {data ? <div dangerouslySetInnerHTML={{ __html: data.about[3].description || '' }} /> : <div></div>}
                        </div>
                    )}
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff4c]/30"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutNITJ;

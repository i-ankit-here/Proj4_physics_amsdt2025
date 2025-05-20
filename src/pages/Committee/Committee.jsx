import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SecNavbar from '../../components/SecNavbar';
import axios from "axios";
import { useState, useEffect } from 'react';
import getEnvironment from "../../getenvironment";
import { useLocation } from "react-router-dom";

function Committee(props) {
    const confid = props.confid;
    const [data, setData] = useState([]);
    const [apiUrl, setApiUrl] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);

    useEffect(() => {
        if (apiUrl) {
            axios.get(`${apiUrl}/conferencemodule/committee/conference/${confid}`, {
                withCredentials: true
            })
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
        }
    }, [apiUrl, confid]);

    // Grouping the data based on the type of committee
    const nationalCommittees = data.filter(item => 
        item.Type.toLowerCase().includes('national organising committee')
    );
    const localCommittees = data.filter(item => 
        item.Type.toLowerCase().includes('local organising committee')
    );

    // Determine which data to display based on the URL
    const displayData = location.pathname.includes('nationalcommittee') 
        ? nationalCommittees 
        : location.pathname.includes('localcommittee') 
        ? localCommittees 
        : [];

    return (
        <>
            <div className="fixed top-0 w-screen z-40">
                <Navbar />
            </div>
            <SecNavbar />
            <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10 min-h-[300px] lg:px-8 pt-[58px] lg:pt-[10px] pb-5">
                {
                    displayData.length>0?<p className="text-lg font-sans  mb-5   font-bold text-gray-950 underline">
                    {displayData[0].Type}
                </p>:<p></p>
                }
            
                {displayData.map((item) => (
                    <div key={item._id} className="w-full mx-auto md:w-[700px] px-4 lg:w-full">
                        
                        <div className="text-base text-justify font-sans font-base text-gray-800">
                            <div className='mx-5 mb-5'>
                                <p className='font-bold'>{item.Subtype}</p>
                                <p>{item.Name}</p>
                                <p>{item.Designation}, {item.Institute}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Committee;

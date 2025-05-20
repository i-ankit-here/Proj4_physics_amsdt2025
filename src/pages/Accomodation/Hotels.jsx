

import { useEffect,useState } from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SecNavbar from '../../components/SecNavbar';
import axios from "axios";
import getEnvironment from "../../getenvironment";
function Hotels(props) {
    const confid = props.confid;
  const [data, setData] = useState([])
   const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);
useEffect(() => {
    window.scrollTo(0, 0);
    if (apiUrl) {
  axios.get(`${apiUrl}/conferencemodule/accomodation/conf/${confid}`, {
    withCredentials: true

  })
    .then(res => {
      setData(res.data);
      console.log(res.data);

    })
    .catch(err => console.log(err))

}}, [apiUrl]);
   
    return (
        <><div className="fixed top-0 w-screen z-40 "> 
        <Navbar />      
        </div>
        <SecNavbar />
        <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] min-h-[300px] lg:pt-[10px] pb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold   text-gray-950 underline ">
                        Hotels in Jalandhar
                    </p>
                    {data.length > 0 && 
                    <p className="text-base  text-justify font-sans font-base overflow-x-scroll  text-gray-800">
                        {data? <div dangerouslySetInnerHTML={{__html:data[1].description}}/>: " "}
                    </p>
}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hotels


import { useEffect,useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
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

}}, [apiUrl]);
   
    return (
        <><div className="fixed top-0 w-screen z-40 "> 
        <Navbar />      
        </div>
        <SecNavbar />
        <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] min-h-[300px] lg:pt-[10px] pb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5  text-gray-950 underline ">
                        How to Reach NITJ
                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">
                        {data? <div dangerouslySetInnerHTML={{__html:data.description}}/>: " "}
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Location

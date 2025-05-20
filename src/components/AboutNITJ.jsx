import Separator from "./common/Separator";
import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";



function AboutNITJ(props) {

    //const apiUrl = getEnvironment();

    const confid = props.confid;
    const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);

    const [data, setData] = useState(null)
    useEffect(() => {
        if (apiUrl) {
        axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
            withCredentials: true

        })
            .then(res => {
                setData(res.data);
                console.log(res.data);

            })
            .catch(err => console.log(err))

    }}, [apiUrl]);

    return (
        <div className=" bg-white container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl  px-4 sm:px-10  lg:px-8 mx-auto pt-20 min-h-[280px]">
            <div className="w-full md:w-[700px] px-4 lg:w-3/5 lg:max-w-full">
                <h2 className="text-4xl font-sans font-bold text-gray-950  ">
                    About NITJ        </h2>
                <Separator />
                <p className="text-base  text-justify font-sans font-base text-gray-800">

                    {data ? <div dangerouslySetInnerHTML={{ __html: data.about[3].description }} /> : <div ></div>}
                </p>

            </div>
            <div className="w-full md:w-[700px] lg:w-2/5 lg:max-w-[450px] px-4 mt-10 lg:mt-0 mx-auto lg:px-5 ">

                <h2 className="text-4xl font-sans font-bold  text-gray-950  ">
                    About the Department
                </h2>
                <Separator />
                <p className="text-base  text-justify font-sans font-base text-gray-800">
                    {data ? <div dangerouslySetInnerHTML={{ __html: data.about[4].description }} /> : <div ></div>}

                </p>
            </div>
        </div>
    );
}

export default AboutNITJ;

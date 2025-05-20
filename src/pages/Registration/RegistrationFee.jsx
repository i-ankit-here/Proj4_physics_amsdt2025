import { useEffect } from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SecNavbar from '../../components/SecNavbar';



function RegistrationFee() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = [
        { title: 'Academic Personnel including faculty and scientists', price: '5000 (IIChE Member) / 6200 (Non-IIChE Member)' },
        { title: 'Research Scholars', price: '4500 (IIChE Member) / 5000 (Non-IIChE Member)' },
        { title: 'Industrial Personnel ', price: '6500 (IIChE Member) / 7800 (Non-IIChE Member)' },
        { title: 'Senior IIChE Member over 65 years', price: 'NIL (IIChE Member) / 3200 (Non-IIChE Member)' },
        { title: 'Post Graduate Students', price: '3200 (IIChE Member) / 3700 (Non-IIChE Member)' },
        { title: 'Under Graduate Students', price: '2500 (IIChE Member) / 3200 (Non-IIChE Member)' },   
        { title: 'Spouse Accompanying Indian Delegate (All categories)', price: '2000 (IIChE Member) / 2500 (Non-IIChE Member)' },
        { title: 'Others', price: '3200 (IIChE Member) / 3700 (Non-IIChE Member)' },
        { title: 'Foreign Delegates', price: 'USD 250 (IIChE Member) / USD 250 (Non-IIChE Member)' },
        { title: 'Accompanying Spouse (Foreign Delegates)', price: 'USD 250 (IIChE Member) / USD 250 (Non-IIChE Member)' },
    ];



    return (
        <>
            <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />
      <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] lg:pt-[10px] pb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5   text-gray-950 underline ">
                    Registration Fee

                    </p>
                    <p className="text-xs md:text-base   text-justify font-sans  text-gray-800">
                    
                        <table className="mt-3 border-collapse box-border min-w-full">
                            <thead>
                                <tr className="border-[2px] bg-accent-100  border-accent-500">
                                    <th className="p-1 pl-4 text-left">Categories of Membership</th>
                                    <th className="p-1 pl-4 text-left">Amount in INR (Including Taxes)</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <tr key={index} className="border-[1px] font-serif border-accent-500">
                                        <td className="p-1 pl-4 text-left">{item.title}</td>
                                        <td className="p-1 pl-4 text-left">{item.price}</td>

                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="2" className="p-1 text-center">No data available</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                        <p className="text-base mt-5 text-justify font-serif font-base text-gray-700">

                    <span className="font-bold">Note :- </span> All Presenting / Participating authors (who are coming in person to attend the conference) need to register separately for the same paper. 
                    For multiple papers by the same  authors, they need to register separately as stated above. 

<p>An additional late registration fee of Rs. 1000/- applies to all categories after registration deadline </p>
                    </p>
                        
                    </p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default RegistrationFee

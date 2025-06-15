import { useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
// import SecNavbar from '../../components/SecNavbar';

function Accommodation() {
  // ensure page scrolls to top when this route mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="top-0 w-screen z-40"> 
                     <Navbar />      
                 </div>

      {/* <SecNavbar /> */}

      <main className="pt-[166px] bg-white pt-[58px] pb-10 min-h-screen pt-[288px] relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8">
          <h1 className="text-3xl font-bold text-[#2563eb] mb-6 underline">
            Accommodation
          </h1>

          <section className="bg-[white] p-6 rounded-lg shadow-sm">

            <ul className="list-disc pl-6 space-y-2 text-[#2563eb]">
              <li>
                Accommodation will be provided to registered participants on a payment basis.
              </li>
              <li>
                Participants (scholars) will be housed on a shared basis in NITJ hostels.
              </li>
              <li>
                Post-docs, research associates, faculty members, and scientists will be accommodated in guest rooms (hostel guest house or nearby hotels) at nominal rates.
              </li>
              <li>
                Exact accommodation charges will be updated on the conference website soon.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Accommodation;

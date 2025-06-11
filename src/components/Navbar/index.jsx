import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import TopNavInfo from "./TopNavInfo";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io"; 

const navigation = [
  { name:<IoMdHome className="h-5 w-5" />   , href: "/", current: true },
  { name: "Paper tracks", href: "/tracks", current: false },
  { name: "Abstract Submission ", href: "/submission", current: false },
  { name: "List of Speakers ", href: "/speakers", current: false },
{ name: "Publications", href: "/publications", current: false },
  {
    name: "Committees",
    href: "",
    current: false,
    subItems: [
      { name: "Organizing Heads", href: "/organizingheads" },
      { name: "Advisory Committee", href: "/advisorycommittee" },
    ],
  },
  { name: "Registration", href: "", current: false,
    subItems: [
      { name: "Registration Fee", href: "/registrationfee" },
      { name: "Registration Link", href: "/registrationlink" },
      // { name: "Registered Participants", href: "https://amsdt2025.com/news/682c2dbe4f0ddcc436b90e88" },
      // { name: "Frequently Asked Questions (FAQ)", href: "/registrationfaq" },
    ],
   },
   { name: "Location", href: "/location", current: false },
   { name: "Accommodation", href: "/accommodation", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [currentNavigation, setCurrentNavigation] = useState(navigation);
  const location = useLocation();

  useEffect(() => {
    // Update the "current" property of navigation items based on the current route
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: location.pathname.endsWith(item.href),
    }));

    setCurrentNavigation(updatedNavigation);
  }, [location.pathname]);

  return (
    <div>
      <Disclosure as="header" className="bg-[#001a00] shadow">
        {({ open }) => (
          <>
            <div className="mx-auto">
              <div className="relative px-2 sm:px-4 lg:px-8 flex h-14 justify-between items-center bg-[#001a00] backdrop-blur-md border-b border-[#00ff4c]/20">
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#00ff4c] hover:bg-[#002a00] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00ff4c]">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center font-bold gap-3">
                  <TopNavInfo 
                    className="mr-4 lg:mr-0 text-[#00ff4c]"
                    icon={<EnvelopeIcon className="h-5 w-5 text-[#00ff4c]" />}
                    value="amsdt2025@nitj.ac.in"
                  />
                </div>
                <nav className="hidden lg:flex space-x-1 ml-auto" aria-label="Global">
                  {currentNavigation.map((item) => (
                    <div key={item.name} className="relative group">
                      {item.subItems ? (
                        <>
                          <Link
                            to={item.href}
                            className="inline-flex items-center py-2 px-3 text-sm text-white uppercase hover:text-[#00ff4c] font-medium transition-colors duration-200 relative visited:text-white"
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                            {/* Show underline only on hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff4c] group-hover:w-full transition-all duration-300"></div>
                          </Link>
                          <div className="absolute left-0 hidden mt-1 w-64 origin-top-left bg-[#001a00] border border-[#00ff4c]/30 rounded-md shadow-lg group-hover:block z-50">
                            <div className="py-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#002a00] hover:text-[#00ff4c]"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="no-underline inline-flex items-center py-2 px-3 text-sm text-white uppercase hover:text-[#00ff4c] font-medium transition-colors duration-200 relative visited:text-white"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                          {/* Show underline only on hover */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff4c] group-hover:w-full transition-all duration-300"></div>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            <Disclosure.Panel as="nav" className="lg:hidden bg-[#001a00]" aria-label="Global">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {currentNavigation.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-[#002a00] text-[#00ff4c] visited:text-white"
                                  : "text-gray-200 hover:bg-[#002a00] hover:text-[#00ff4c]",
                                "block w-full rounded-md py-2 px-3 text-base font-medium text-left flex justify-between items-center visited:text-white"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              <span>{item.name}</span>
                              <svg
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "w-5 h-5 text-[#00ff4c]"
                                )}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1 bg-[#001200]">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block pl-8 pr-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#002a00] hover:text-[#00ff4c] visited:text-white"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-[#002a00] text-[#00ff4c] "
                            : "text-gray-200 hover:bg-[#002a00] hover:text-[#00ff4c]",
                          "block w-full rounded-md py-2 px-3 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

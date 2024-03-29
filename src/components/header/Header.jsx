import React from 'react';

const Header = () => {
    return (
        <section>
            <nav className="">
                <div className="max-w-screen-xl flex text-[#11264D] text-[16px]  flex-wrap items-center justify-between mx-auto md:px-16 py-4 px-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center font-semibold whitespace-nowrap text-[#377DFF]">Company Logo</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <a className=" mr-2 md:mr-5">
                            <span className="block py-2 px-4  font-medium">Login</span>
                        </a>
                        <button type="button" className="text-white bg-Primary-Color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4  md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0">
                            <li>
                                <a href="#" className="block py-2 px-4 md:p-0 ">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 md:p-0 ">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 md:p-0 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;

import {Component} from 'solid-js';
import LogoTextEffect from "../custom/component/logoTextEffect";

const Header: Component = () => {
    const handleScrollToContact = (data: string) => {
        const contactSection = document.getElementById(data);
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (
        <div class="space-y-4">
            <header class="flex flex-wrap md:justify-start md:flex-nowrap w-full bg-gray-800 text-sm py-4">
                <nav class="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between"
                     aria-label="Global">
                    <div class="flex items-center justify-between w-full md:w-auto">
                        <div class="flex items-center">
                            <img src="/logo.png" alt="SmartCode InfoTech" class="rounded-md mr-2 logo h-10 w-10"/>
                            <LogoTextEffect text={'SmartCode'}/>
                        </div>
                        <div class="md:hidden">
                            <button type="button"
                                    class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/20 transition-all text-sm "
                                    data-hs-collapse="#navbar-dark" aria-controls="navbar-dark"
                                    aria-label="Toggle navigation">
                                <svg class="hs-collapse-open:hidden flex-shrink-0 w-6 h-6"
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="3" x2="21" y1="6" y2="6"/>
                                    <line x1="3" x2="21" y1="12" y2="12"/>
                                    <line x1="3" x2="21" y1="18" y2="18"/>
                                </svg>
                                <svg class="hs-collapse-open:block hidden flex-shrink-0 w-6 h-6"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path d="M18 6 6 18"/>
                                    <path d="m6 6 12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-dark"
                         class="w-full float-end hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div
                            class="place-content-end flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                            <nav class="xs:contents flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                                <span onClick={() => handleScrollToContact('home')}
                                      class="cursor-pointer text-gray-400 hover:text-white">Home</span>
                                <span onClick={() => handleScrollToContact('services')}
                                      class="cursor-pointer text-gray-400 hover:text-white">Services</span>
                                <span onClick={() => handleScrollToContact('whyus')}
                                      class="cursor-pointer text-gray-400 hover:text-white">About Us</span>
                                <span onClick={() => handleScrollToContact('approach')}
                                      class="cursor-pointer text-white font-semibold">Our Approach</span>
                            </nav>
                            <button onClick={() => handleScrollToContact('contact')} className="cursor-pointer inline-flex items-center rounded-full px-5 py-2 text-md font-mono font-semibold text-gunmetal-600 hover:text-white border-2 border-celeste-600
hover:bg-cyan-900 transition ease-in-out max-w-max delay-150 hover:scale-75 hover:bg-darkCyan-600 duration-300  focus:bg-transparent">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;

import {ButtonLearnMore} from "../../custom/component/button/buttonLeaMore";

export default function WhyUs() {
    return (
        <section class="py-12 dark:bg-gray-800">
            <div class="container mx-auto px-4 md:px-6">
                <div class="mb-10 text-center" >
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl animate-fade-in">
                        Discover Our Expertise
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in delay-100">
                        Explore the diverse range of services we offer to elevate your business.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" >
                    <div data-aos="zoom-out"
                        class="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-fade-in-up">
                        <CodeIcon class="h-12 w-12 text-indigo-500"/>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Custom Software
                            Development</h3>
                        <p class="text-center text-gray-600 dark:text-gray-400">
                            Our team of skilled developers crafts tailored software solutions to meet your unique
                            business needs.
                        </p>
                        <button type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent border-indigo-500 hover:border-transparent text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                    <div data-aos="zoom-out"
                        class="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-fade-in-up delay-100">
                        <CloudIcon class="h-12 w-12 text-indigo-500"/>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Cloud Migration and
                            Integration</h3>
                        <p class="text-center text-gray-600 dark:text-gray-400">
                            We seamlessly migrate your data and applications to the cloud, optimizing performance and
                            scalability.
                        </p>
                        <button type="button"
                                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent border-indigo-500 hover:border-transparent text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                    <div data-aos="zoom-out"
                        class="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-fade-in-up delay-200">
                        <HeadphonesIcon class="h-12 w-12 text-indigo-500"/>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Managed IT Services</h3>
                        <p class="text-center text-gray-600 dark:text-gray-400">
                            Our comprehensive managed IT services ensure your technology infrastructure is always
                            running at peak
                            performance.
                        </p>
                        <button type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent border-indigo-500 hover:border-transparent text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                    <div data-aos="zoom-out"
                        class="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-fade-in-up delay-300">
                        <BriefcaseIcon class="h-12 w-12 text-indigo-500"/>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">IT Consulting and
                            Strategy</h3>
                        <p class="text-center text-gray-600 dark:text-gray-400">
                            Our experienced consultants provide strategic guidance to align your technology with your
                            business goals.
                        </p>
                        <button type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent border-indigo-500 hover:border-transparent text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                    <div data-aos="zoom-out"
                        class="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-fade-in-up delay-400">
                        <CpuIcon class="h-12 w-12 text-indigo-500"/>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Infrastructure
                            Optimization</h3>
                        <p class="text-center text-gray-600 dark:text-gray-400">
                            We analyze and optimize your IT infrastructure to enhance performance, security, and
                            cost-efficiency.
                        </p>
                        <button type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent border-indigo-500 hover:border-transparent text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                    <div data-aos="zoom-out"
                        class="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-fade-in-up delay-500">
                        <ShieldCheckIcon class="h-12 w-12 text-indigo-500"/>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Cybersecurity Solutions</h3>
                        <p class="text-center text-gray-600 dark:text-gray-400">
                            Our comprehensive cybersecurity services protect your business from evolving threats,
                            ensuring your data
                            and systems are secure.
                        </p>
                        <button type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent border-indigo-500 hover:border-transparent text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}


function CloudIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function CpuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    )
}


function HeadphonesIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
    )
}


function ShieldCheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}

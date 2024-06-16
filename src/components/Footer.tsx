import {A} from "@solidjs/router";

export default function Footer() {
    return (
        <footer class="bg-gray-900 text-gray-300 py-8 sm:py-12">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="flex flex-col items-start">
                    <A href="#" class="inline-flex items-center" prefetch={false}>
                        <MountainIcon class="w-8 h-8 text-gray-400" />
                        <span class="ml-2 text-lg font-bold">SmartCode Infotech</span>
                    </A>
                    <p class="mt-4 text-sm leading-relaxed">
                        SmartCode Infotech is a leading provider of innovative technology solutions for businesses of all sizes.
                    </p>
                </div>
                <div class="flex flex-col items-start">
                    <h3 class="text-lg font-bold mb-4">Connect with Us</h3>
                    <nav class="space-y-2">
                        <A href="#" class="flex items-center hover:text-gray-100" prefetch={false}>
                            <LinkedinIcon class="w-5 h-5 mr-2" />
                            LinkedIn
                        </A>
                        <A href="#" class="flex items-center hover:text-gray-100" prefetch={false}>
                            <TwitterIcon class="w-5 h-5 mr-2" />
                            Twitter
                        </A>
                        <A href="#" class="flex items-center hover:text-gray-100" prefetch={false}>
                            <FacebookIcon class="w-5 h-5 mr-2" />
                            Facebook
                        </A>
                    </nav>
                </div>
                <div class="flex flex-col items-start">
                    <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                    <nav class="space-y-2">
                        <A href="#" class="hover:text-gray-100" prefetch={false}>
                            Services
                        </A><br/>
                        <A href="#" class="hover:text-gray-100" prefetch={false}>
                            About Us
                        </A><br/>
                        <A href="#" class="hover:text-gray-100" prefetch={false}>
                            Contact
                        </A>
                    </nav>
                </div>
                <div class="flex flex-col items-start">
                    <h3 class="text-lg font-bold mb-4">Legal</h3>
                    <nav class="space-y-2">
                        <A href="#" class="hover:text-gray-100" prefetch={false}>
                            Privacy Policy
                        </A>
                        <br/>
                        <A href="#" class="hover:text-gray-100" prefetch={false}>
                            Terms of Service
                        </A>
                    </nav>
                </div>
            </div>
            <div class="mt-8 sm:mt-12 border-t border-gray-800 pt-4 sm:pt-6 text-sm text-gray-500 text-center">
                &copy; 2024 SmartCode Infotech. All rights reserved.
            </div>
        </footer>
    )
}

function FacebookIcon(props) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function LinkedinIcon(props) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function MountainIcon(props) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}

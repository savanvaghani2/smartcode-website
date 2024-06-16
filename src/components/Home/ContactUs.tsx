import { createSignal } from 'solid-js';
import { createStore } from "solid-js/store";

const ContactForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    };

    const [formData, setFormData] = createStore(initialState);
    const [isSubmitting, setIsSubmitting] = createSignal(false);
    const [errorMessage, setErrorMessage] = createSignal(null);
    const [successMessage, setSuccessMessage] = createSignal('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);
        setSuccessMessage('');

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwaHpFJpHSYrW6EPtrJJyhKDJepCc2yQNFDgMFRalOyBpWiaKqYRBw-LEZ3f3oiCuBo/exec", {
                method: "POST",
                body: JSON.stringify({ ...formData, sheet: "Contact" }),
            });

            if (response.ok) {
                setFormData(initialState);
                setSuccessMessage('Form submitted successfully');
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                })
                // Clear the success message after 2 seconds
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            } else {
                const error = await response.text();
                setErrorMessage(error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div class="flex flex-col md:flex-row bg-gray-900 text-white p-8 gap-8">
            <div class="md:w-1/2">
                <h2 class="text-3xl font-bold mb-4">Get in touch</h2>
                <p class="mb-4">
                    Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                </p>
                <div class="mb-4">
                    <div class="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
                        </svg>
                        <div class="mt-2">
                            <p>143, Green Plaza</p>
                            <p>Mota Varachha, Surat - 395001</p>
                        </div>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true" class="w-6 h-6 mr-2 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                        </svg>
                        <p class="mt-2">+91 97149 05691</p>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true" class="w-6 h-6 mr-2 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                        </svg>
                        <p class="mt-2">smarcodeinfotech2@gmail.com</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} class="md:w-1/2">
                <div class="flex gap-4 mb-4">
                    <div class="flex-1">
                        <label class="block text-sm font-medium mb-1">First name</label>
                        <input
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onInput={handleChange}
                            class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium mb-1">Last name</label>
                        <input
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onInput={handleChange}
                            class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onInput={handleChange}
                        class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">Phone number</label>
                    <input
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onInput={handleChange}
                        class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onInput={handleChange}
                        class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        required
                    />
                </div>
                <button
                    type="submit"
                    class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={isSubmitting()}
                >
                    {isSubmitting() ? 'Submitting...' : 'Send message'}
                </button>
                {successMessage() && (
                    <div class="mt-4 flex justify-left items-center text-green-500 mb-4">
                        <i class="fas fa-check-circle mr-2"></i>
                        <p>{successMessage()}</p>
                    </div>
                )}
                {errorMessage() && (
                    <div class="mt-4 text-red-500">
                        <p>{errorMessage()}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;

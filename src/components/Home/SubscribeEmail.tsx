import { createSignal } from 'solid-js';

const SubscribeSection = () => {
    const [email, setEmail] = createSignal('');
    const [isSubmitting, setIsSubmitting] = createSignal(false);
    const [successMessage, setSuccessMessage] = createSignal('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbx3mo_g9RiK61gzjM7JYhbHwQptuldrhO2m6o5JHXKAc5Tmk_Wivpnaxy1qGVdpzCls/exec", {
                method: "POST",
                body: JSON.stringify({ email: email(), sheet: "Subscribe" }),
            });

            if (response.ok) {
                setEmail('');
                setSuccessMessage('Form submitted successfully');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div class="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-cyan mb-4">Subscribe</h2>
                <p class="text-gray-300 mb-8">Get all the latest Preline updates and news.</p>
                <form onSubmit={handleSubmit} class="flex justify-center">
                    <input
                        type="email"
                        name="email"
                        value={email()}
                        onInput={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        class="w-full max-w-md px-4 py-2 border text-black border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        disabled={isSubmitting()}
                    />
                    <button
                        type="submit"
                        class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isSubmitting()}
                    >
                        {isSubmitting() ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                {successMessage() && (
                    <div class="mt-4 flex justify-center items-center text-green-500 mb-4">
                        <i class="fas fa-check-circle mr-2"></i>
                        <p>{successMessage()}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubscribeSection;

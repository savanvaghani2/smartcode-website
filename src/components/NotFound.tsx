import { Component } from 'solid-js';
import { A } from '@solidjs/router';

const NotFound: Component = () => {
    return (
        <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">

            <main class="flex flex-col items-center justify-center flex-grow">
                <h1 class="text-4xl font-bold mb-4">Page <span class="text-blue-500">Not Found</span></h1>
                <A href="/public" class="text-blue-400 hover:underline">Take me back.</A>
            </main>
        </div>
    );
};

export default NotFound;

import { Component } from "solid-js";

export const HeroSection: Component = () => {
    return (
        <div class="w-full h-[90vh]">
            <div class="w-full h-full p-10 flex flex-col md:flex-row justify-center items-center">
                <div class="md:w-1/3 text-center md:text-left" data-aos="fade-in">
                    <h1 class="text-3xl md:text-5xl w-full font-bold capitalize">
                        Solution For Building A Smart World!
                    </h1>
                    <p class="text-md md:text-lg w-full mt-3">
                        Standing at the forefront of innovation, we are the premier IT solution company in Surat, India.
                    </p>
                </div>
                <object
                    class="w-full md:w-2/3 h-full mt-8 md:mt-0"
                    data-aos="fade-right"
                    type="image/svg+xml"
                    data="/hero_animation/svg-viewer.svg"
                />
            </div>
        </div>
    );
};

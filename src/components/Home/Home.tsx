import {Layout, Section} from "../utils";
import {BackToTopButton} from "../../custom/component/backToTop/backTopButton";
import {Component, createSignal, onCleanup} from "solid-js";
import {HeroSection} from "./Hero";
import {OurApproach} from "./OurApproach";
import {UserCount} from "./UserCount";
import WhyUs from "./WhyUs";
import ContactForm from "./ContactUs";
import TrustedCompany from "./TrustedCompany";
import SubscribeSection from "./SubscribeEmail";

export const Home = () => (

    <Layout>

        <section id={'home'}>
            <HeroSection/>
        </section>
        <section id="services">
            <Services/>
        </section>
        <section id="user">
            <UserCount/>
        </section>
        <section id="companies">
            <TrustedCompany/>
        </section>
        <section id={'approach'}>
            <OurApproach/>
        </section>
        <section id={'whyus'}>
            <WhyUs/>
        </section>
        <section id={'contact'}>
            <ContactForm/>
        </section>
        <SubscribeSection/>
        <BackToTopButton/>
    </Layout>
);

const servicesData = [
    {
        title: "Custom software development",
        description: "Tailored solutions to optimize your business operations.",
        imgSrc: "https://cdn.b12.io/client_media/173Cv7x3/23e72040-2961-11ef-b310-0242ac110002-jpg-regular_image.jpeg",
    },
    {
        title: "IT consulting",
        description: "Expert advice to elevate your IT strategies.",
        imgSrc: "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377132.jpg?t=st=1718285819~exp=1718289419~hmac=3be4bb8d422ccf81ea346f943ff8ee222740f7cd3b7079318ca96004cd5a0045&w=1800",
    },
    {
        title: "Web development",
        description: "Crafting engaging and user-friendly websites.",
        imgSrc: "https://cdn.b12.io/client_media/173Cv7x3/243dcfbc-2961-11ef-b310-0242ac110002-jpg-regular_image.jpeg",
    },
    {
        title: "Mobile app development",
        description: "Innovative mobile solutions for your business.",
        imgSrc: "https://cdn.b12.io/client_media/173Cv7x3/23a578ac-2961-11ef-b310-0242ac110002-jpg-regular_image.jpeg",
    },
    {
        title: "E-commerce solutions",
        description: "Empowering your online retail presence.",
        imgSrc: "https://assets-160c6.kxcdn.com/wp-content/uploads/2022/08/2022-08-16-de-en.jpg",
    },
    {
        title: "Digital Marketing services",
        description: "Digital marketing connects with customers online to boost sales.",
        imgSrc: "https://dakshacollege.com/wp-content/uploads/2023/03/digital-marketing-with-icons-business-people.jpg",
    },
];

function ServiceCard(props: { service: { title: string; description: string; imgSrc: string } }) {
    return (
        <div data-aos="fade-up"
             data-aos-duration="1000" class="bg-bg shadow-lg rounded-lg p-6">
            <img src={props.service.imgSrc} alt={props.service.title} class="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 class="text-lg font-semibold">{props.service.title}</h3>
            <p class="text-textColor">{props.service.description}</p>
        </div>
    );
}

function Services() {
    const [services] = createSignal(servicesData);

    return (
        <div class="p-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold">Tailored solutions for your business</h2>
                <p class="text-gray-600">Providing comprehensive IT services to enhance your business operations and
                    efficiency.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services().map(service => (
                    <ServiceCard service={service}/>
                ))}
            </div>
        </div>
    );
}


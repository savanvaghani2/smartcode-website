import { Component } from 'solid-js';
import 'aos/dist/aos.css';
import Header from "./Header";
import Footer from "./Footer";
export const Section: Component<{ children: any, id?: string }> = (props) => {
    return (
        <section id={props.id ?? ''} data-aos="fade-up">
            {props.children}
        </section>
    );
};
export const Layout = (props: { children: any }) => {
    return (
        <div style={'width: -webkit-fill-available;overflow: hidden;'}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

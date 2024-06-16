import { onMount } from 'solid-js';
import AOS from 'aos';
import { Route, Router } from "@solidjs/router";
import {Home} from "./components/Home/Home";
import NotFound from "./components/NotFound";
import 'aos/dist/aos.css';

const App = () => {
    onMount(() => {
        AOS.init({
            duration: 1000,
        });
    });

    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />

        </Router>
    );
};

export default App;

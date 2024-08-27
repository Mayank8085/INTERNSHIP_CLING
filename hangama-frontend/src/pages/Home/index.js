import { Fragment } from 'react';
import { Header } from "../../components/Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Feature } from './Feature';
import { VisionArea } from './VisionArea';
import { DownloadArea } from './DownloadArea';
import { Testimonial } from './Testimoninal';
import { Footer } from './Footer';
import "../../assets/css/landing.css";
const Home = () => (
    <Fragment>
        <Header /><Hero />
        <About />
        <Feature />
        <VisionArea />
        <DownloadArea />
        <Testimonial />
        <Footer/>
    </Fragment>
)

export default Home;
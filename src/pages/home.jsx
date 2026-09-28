import React from 'react';
import Header from "../components/home"
import Hero from '../components/home/hero/hero';
import Section from '../components/home/section/section';
import Section2 from '../components/home/section-2/section2';
import Section3 from '../components/home/section3/section3';
import Section4 from '../components/home/section4/section4';
import Section5 from '../components/home/section5/section5';
import Section6 from "../components/home/section6/section6";
import Section7 from "../components/home/section7/section7"
import Section8 from "../components/home/section8/section8"
import Footer from '../components/home/footer/footer';
const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Section/>
             <Section2/> 
         <Section3/>
         <Section4/>
         <Section5/>
         <Section6/>
         <Section7/>
         <Section8/>
         <Footer/>
        </>
    );
}

export default Home;

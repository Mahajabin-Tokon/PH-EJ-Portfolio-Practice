import React from 'react';
import Hero from '../Components/Hero';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <Education></Education>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;
import React from 'react';
import Data from './Data';
import './Home.css'
import Social from './Social';


const Home = () => {
    return (
       <section className="home section" id='home'>
        <div className="home-container container grid">
            <div className="home-content grid">
        <Social></Social>
        <div className="home-img">
            <Data></Data>
        </div>
            </div>
        </div>
       </section>
    );
};

export default Home;
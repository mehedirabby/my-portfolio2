import React from 'react';
import Data from './Data';
import './Home.css'
import Social from './Social';


const Home = () => {
    return (
       <section className="home" id='home'>
        <div className="home-container">
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
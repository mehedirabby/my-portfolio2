import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    // Toggle Menu
    const [Toggle,showMenu]= useState(false); 
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Rabby</a>
                <div className={Toggle ? "nav-menu show-menu": "nav-menu"}>
                    <ul className="nav-list grid">

                        {/* 0 */}
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">
                                <i className="uil uil-estate nav__icon">
                                  Home  
                                </i>
                            </a>
                        </li>
                        {/* 1 */}
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="uil uil-user nav__icon">
                                    About
                                </i>
                            </a>
                        </li>
                        {/* 2 */}
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                <i className="uil uil-file-alt nav__icon">
                                    Skills

                                </i>
                            </a>
                        </li>
                        {/* 3 */}
                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                <i className="uil uil-briefcase nav__icon">
                                    services

                                </i>
                            </a>
                        </li>

                        {/* 4 */}
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">
                                <i className="uil uil-scenery nav__icon">
                                Portfolio
                                </i>
                            </a>
                        </li>

                        {/* 5 */}
                        <li className="nav-item">
                            <a href="#contract" className="nav-link">
                                <i className="uil uil-message nav__icon">
                                Contract
                                </i>
                            </a>
                        </li>

                       
                    </ul>


                    <i class="uil uil-times nav-close" onClick={()=>showMenu(!Toggle)}></i>


                </div>

                <div className="nav-toggle" onClick={()=>showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
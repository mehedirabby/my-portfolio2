import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Rabby</a>
                <div className="nav-menu">
                    <ul className="nav-list grid">

                        {/* 0 */}
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                <i className="uil uil-estate nav-icon">
                                  Home  
                                </i>
                            </a>
                        </li>
                        {/* 1 */}
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="uil uil-user nav-icon">
                                    About
                                </i>
                            </a>
                        </li>
                        {/* 2 */}
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                <i className="uil uil-file-alt nav-icon">
                                    Skills

                                </i>
                            </a>
                        </li>
                        {/* 3 */}
                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                <i className="uil uil-briefcase nav-icon">
                                    services

                                </i>
                            </a>
                        </li>

                        {/* 4 */}
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">
                                <i className="uil uil-scenery nav-icon">
                                Portfolio
                                </i>
                            </a>
                        </li>

                        {/* 5 */}
                        <li className="nav-item">
                            <a href="#contract" className="nav-link">
                                <i className="uil uil-message nav-icon">
                                Contract
                                </i>
                            </a>
                        </li>

                       
                    </ul>


                    <i class="uil uil-times nav-close"></i>
                </div>

                <div className="nav-toggle">
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
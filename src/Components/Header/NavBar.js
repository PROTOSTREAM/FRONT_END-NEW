import React, { useState } from "react";
import "./css/Header.css";
import { NavLink, useHistory } from "react-router-dom";

import logo from "C:/Users/ayush/new_FrontEnd/src/Assets/icons/logo.svg"
import { isAuthenticated } from "C:/Users/ayush/new_FrontEnd/src/auth/index.js";






const Header = () => {
    const history = useHistory();
    const [click, setClick] = useState(false);
    // const [user, setUser] = useState(isAuthenticated());
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { user, error } = isAuthenticated();
    const errorRedirect = () => {
        if (error) {
            history.push("/error_99");
            window.location.reload();
        }
    };

    const headerElement = () => (
        <header className="header">
            <div classNames="logo">
                <NavLink to={user ? "/" : "/"} className="navbar-logo">
                    <img src={logo} alt="" className="logo-img" />
                </NavLink>
            </div>


            {(click) && (window.screen.width < 720) ? (
                <div className="mobile-nav">
                    <ul className="nav-list">
                        {/* Designing Dashboard According to user roless...  pending */}
                        {user && user.role === 1 ? (
                            <li className="nav-item">
                                <NavLink
                                    to="/user/dashboard"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink
                                to="/projects"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/internships"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Internships
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/schemes"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Schemes
                            </NavLink>
                        </li>
                        {user && user.role === 1 ? (
                            <NavLink to="/startups" className="buttons">
                                <li className="btn">Startups</li>
                            </NavLink>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    to="/startups"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Startups
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            ) : (
                <div className="nav-menu">


                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/* Designing Dashboard According to user roless...  pending */}
                        {user && user.role === 1 ? (
                            <li className="nav-item">
                                <NavLink
                                    to="/user/dashboard"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink
                                to="/projects"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/internships"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Internships
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/schemes"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Schemes
                            </NavLink>
                        </li>
                        {user && user.role === 1 ? (
                            <NavLink to="/startups" className="buttons">
                                <button className="btn">Startups</button>
                            </NavLink>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    to="/startups"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Startups
                                </NavLink>
                            </li>
                        )}
                    </ul>

                </div>


            )}




            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>

            {!user ? (
                <div className="btn-div">
                    <NavLink to="/signin" className="buttons">
                        <button className="btn">Login</button>
                    </NavLink>
                </div>

            ) : (
                ""
            )}
        </header>
    );

    return (
        <div>
            {errorRedirect()}
            {headerElement()}
        </div>
    );
};

export default Header;
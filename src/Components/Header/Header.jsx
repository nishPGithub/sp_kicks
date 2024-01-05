import React, { useEffect } from "react";
import logo from "../../Images/logo.png";
import Navigation from "../Routing/Navigation";



export default function Header() {
    const Links = global.model.navigation;

    useEffect(() => {
        const parent = document.querySelector(".App");
        const hamburgerMenu = parent.querySelector(".hamburger-menu");
        const headerNav = parent.querySelector(".headerNav");

        hamburgerMenu.addEventListener("click", () => {
            console.log("Menu clicked");
            headerNav.classList.toggle("active");
        });
    }, []);

    return (
        <header>
            <div className="header">
                <div className="headerInnerWrapper">
                    <div className="headerLogoWrapper">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="headerNavWrapper">
                        <nav className="headerNav">
                            <ul className="navbarList">
                                {Links.map((item, index) => (
                                    <Navigation
                                        index={index}
                                        class="navLink"
                                        to={item.to}
                                        label={item.label}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="headerNavHamburgerMenu">
                        <span className="hamburger-menu  material-symbols-outlined">menu</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

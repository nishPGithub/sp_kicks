import React from "react";
import logo from "../../Images/logo.png";
import Navigation from "../Routing/Navigation";

export default function Header() {
    const Links = global.model.navigation;
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
                                        class="link"
                                        to={item.to}
                                        label={item.label}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
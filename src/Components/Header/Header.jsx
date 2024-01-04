import React from "react";
import logo from "../../Images/logo.png";

export default function Header() {
    return(
        <header>
            <div className="header">
                <div className="headerInnerWrapper">
                    <div className="headerLogoWrapper">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="headerNav">
                        <nav>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
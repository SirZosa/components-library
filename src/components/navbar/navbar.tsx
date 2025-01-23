import React from "react";
import { useState } from "react";
import NavBarLink from "./navbar-link";
import "./navbar.css"

type NavBarProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: string;
};

function NavBar({ children, backgroundColor="aliceblue", width="100%" }: NavBarProps){
    const [activeLink, setActiveLink] = useState("");

    function handleClick(link:string){
        setActiveLink(link);
    }

  return (
    <nav className="navbar" style={{backgroundColor: backgroundColor, width: width}}>
        <ul className="links-container">{React.Children.map(children, child =>{
            const link = (child as React.ReactElement).props.href;
            const active = link === activeLink ;
            return React.cloneElement(child as React.ReactElement, {active, onClick: () => handleClick(link)});})}
        </ul>
    </nav>
  );
};

NavBar.Link = NavBarLink;

export default NavBar;
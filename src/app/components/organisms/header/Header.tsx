// src/components/organisms/header/Header.tsx
import React from "react";
import Logo from "../../molecules/logo/Logo";
import HamMenu from "../../molecules/hamburgerMenu/HamMenu";
// import images from "../../../assets/images/images";

const Header: React.FC = () => {
    return (
        <header id="header" className="fixed top-0 w-full flex justify-between align-center py-3 px-6 bg-[#03192B]/75">
            <Logo image="/Apple_Computer_Logo.png" alt="logo" /> 
            <HamMenu image="/hambMenu.svg" alt="menu" /> 
        </header>
    );
}

export default Header;

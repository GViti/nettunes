// src/components/organisms/header/Header.tsx
import React from "react";
import Logo from "../../molecules/logo/Logo.tsx";
import HamMenu from "../../molecules/hamburgerMenu/HamMenu.tsx";
import images from "@/app/assets/images/images.ts";

const Header: React.FC = () => {
    return (
        <header id="header" className="fixed top-0 w-full flex justify-between align-center py-3 px-6 bg-[#03192B]/75">
            <Logo image={images.logo} alt="logo" /> 
            <HamMenu image={images.hambMenu} alt="menu" /> 
        </header>
    );
}

export default Header;

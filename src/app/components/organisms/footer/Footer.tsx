// src/components/organisms/footer/Footer.tsx
import React from "react";
import LogoSocial from "../../molecules/logoSocial/LogoSocial";
import Socials from "@/app/assets/images/socials.ts";

const Footer: React.FC = () => {
    return (
        <footer className="px-4 pt-11">
            <div className="flex gap-5 pb-11">
                <LogoSocial image={Socials.ig} alt="placeholder"/>
                <LogoSocial image={Socials.fb} alt="placeholder"/>
                <LogoSocial image={Socials.yt} alt="placeholder"/>
                <LogoSocial image={Socials.xt} alt="placeholder"/>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <p>Privacy</p>
                    <p>Cookie Policy</p>
                    <p>Condizioni di utilizzo</p>
                    <p>Note legali</p>
                </div>
                <div className="w-1/2">
                    <p>nettunes@gmail.com</p>
                    <p>+39 3792130744</p>
                    <p>Via Roma 7, NY</p>
                </div>
            </div>
            <div>
                <p className="text-center py-8">All right reserved © 2024 - NetTunes Inc.</p>
            </div>
        </footer>
    );
}

export default Footer;
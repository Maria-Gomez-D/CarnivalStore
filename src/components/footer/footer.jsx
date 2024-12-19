import React from "react";
import Logocircle from "../../assets/Logocircle.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    const FooterLinks = [
        { 
            name: "Home", 
            link: "/#" 
        },
        { 
            name: "Products", 
            link: "/#" 
        },
        { 
            name: "Made to Order", 
            link: "/#" 
        },
        { 
            name: "About Us", 
            link: "/#" 
        },
        { 
            name: "Contact Us", 
            link: "#"
        },
    ];

    const TermsAndPolicies = [
        { 
            name: "Privacy Policy", 
            link: "/privacy-policy" 
        },
        { 
            name: "Shipping Policy", 
            link: "/shipping-policy" 
        },
        { 
            name: "Terms of Service", 
            link: "/terms-of-service" 
        },
        { 
            name: "Refund Policy", 
            link: "/refund-policy" 
        },
    ];

    return (
        <footer className="bg-purple/40 text-darkblue py-6">
            <div className="container flex flex-col items-center sm:flex-row sm:justify-between">
                {/* Logo and Social Media */}
                <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                    <img src={Logocircle} alt="Logo" className="w-32 h-32 mb-4" />
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="text-darkblue hover:text-darkorange transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-darkblue hover:text-darkorange transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-darkblue hover:text-darkorange transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-darkblue hover:text-darkorange transition-colors">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-xs mt-1">Located in Calgary, Alberta</p>
                        <p className="text-xs mt-1">Email: <a href="mailto:info.carnivaldesign@gmail.com" className="hover:text-darkorange">info.carnivaldesign@gmail.com</a></p>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                    <ul className="flex flex-col items-center sm:items-start space-y-2">
                        {FooterLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.link} className="hover:text-darkorange transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Terms and Policies */}
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="text-lg font-bold mb-2">Terms and Policies</h2>
                    <ul className="flex flex-col items-center sm:items-start space-y-2">
                        {TermsAndPolicies.map((policy, index) => (
                            <li key={index}>
                                <a href={policy.link} className="hover:text-darkorange transition-colors">
                                    {policy.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; {new Date().getFullYear()} Carnival. All rights reserved.</p>
                <p className="text-xs mt-1">NOTE: For this project. the photos were taken from @fmlycreation, @craetiva_studio_ca, @artisusa0, @krafty_dekor and @Carnival.design. Thank you Pepi. Girls</p>
            </div>
        </footer>
    );
}

import React from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const nav = React.createElement('nav', { className: "flexBetween max-container padding-container relative z-30 py-5" }, 
    React.createElement(Link, { href: "/" },
      React.createElement(Image, { src: "/hilink-logo.svg", alt: "logo", width: 74, height: 29 })
    ),
    React.createElement('ul', { className: "hidden h-full gap-12 lg:flex" }, 
      NAV_LINKS.map((link) => 
        React.createElement(Link, { href: link.href, key: link.key, className: "regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" }, 
          link.label
        )
      )
    ),
    React.createElement('div', { className: "lg:flexCenter hidden" }, 
      React.createElement(Button, { 
        type: "button",
        title: "Login",
        icon: "/user.svg",
        variant: "btn_dark_green"
      })
    ),
    React.createElement(Image, { 
      src: "menu.svg",
      alt: "menu",
      width: 32,
      height: 32,
      className: "inline-block cursor-pointer lg:hidden"
    })
  );

  return nav;
};

export default Navbar;

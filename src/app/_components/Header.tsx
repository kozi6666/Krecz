"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../_utils/twMerge";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import Logo from "~~/svg/logo.svg";
import Logocolor from "~~/svg/logocolor.svg";

import Link from "next/link";


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const t = useTranslations();


  function onSelectChange(locale: string) {
    startTransition(() => {
      router.replace(locale === "de" ? "/de" : "/pl");
    });



  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed  top-0 left-0 right-0 z-50 transition-all shadow-md duration-300 hidden lg:block ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-black/20 py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            {isScrolled ? (
    <Logocolor className="ml-2 w-[150px] transition-all duration-300" />
  ) : (
    <Logo className="ml-2 w-[150px] transition-all duration-300" />
  )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden  md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            className={cn(
              isScrolled ? "text-dark hover:text-light" : " text-white hover:text-light/50",
              "transition-colors font-medium"
            )}          >
            {t("Nav.nav1")}
          </button>
          <button
            onClick={() => scrollToSection('howjoin')}
            className={cn(
              isScrolled ? "text-dark hover:text-light" : "text-white hover:text-light/50",
              "transition-colors font-medium"
            )}          >
            {t("Nav.nav2")}
          </button>
          
          <button
            onClick={() => scrollToSection('faq')}
            className={cn(
              isScrolled ? "text-dark hover:text-light" : "text-white hover:text-light/50",
              "transition-colors font-medium"
            )}          >
            {t("Nav.nav3")}
          </button>

          <button
            onClick={() => scrollToSection('form')}
            className={cn(
              isScrolled ? "text-dark hover:text-light border-dark" : "text-white hover:text-light/50 border-white",
              "transition-colors font-medium border-solid border  rounded-full px-4 py-2"
            )}          >
            {t("Nav.nav4")}
          </button>

          <button
            className={cn(locale === "de" && "opacity-50")}
            onClick={() => {
              onSelectChange("pl");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="rounded-full h-8 w-8"
            >
              <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#a)">
                <path fill="#d80027" d="m0 256 256.4-44.3L512 256v256H0z" />
                <path fill="#eee" d="M0 0h512v256H0z" />
              </g>
            </svg>
          </button>
          <button
            className={cn(locale === "pl" && "opacity-50")}
            onClick={() => onSelectChange("de")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="rounded-full h-8 w-8"
            >
              <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#a)">
                <path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z" />
                <path fill="#d80027" d="m0 167 255-23 257 23v178H0z" />
                <path fill="#333" d="M0 0h512v167H0z" />
              </g>
            </svg>
          </button>
        </nav>


      </div>


    </header>
  );
};

export default Header;
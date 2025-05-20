import Logo from "~~/svg/logo.svg";
import Logo3 from "~~/svg/logo3.svg";
import Logo12 from "~~/svg/logo4.svg";
import { Facebook, Instagram } from "lucide-react";
import Logo8 from "~~/img/logo8.png";
import Logo11 from "~~/img/logo11.png";
import Image from "next/image";
import Patron1 from "~~/svg/Patronat_Prezydent_Koszalina-1.svg";
import Patron2 from "~~/svg/logo PRK.svg";
import Patron3 from "~~/svg/glos koszalin.svg";
import Patron4 from "~~/svg/RIO_KOSZALIN_LOGO_CLAIM_KOLOR.svg";
import Patron5 from "~~/svg/TVP3_Szczecin_podst.svg";
import Patron6 from "~~/svg/TV-MAX-wersja-podstawowa-rgb.svg";
import Patron7 from "~~/svg/tvpinfo4.svg";



const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row md:justify-between gap-10 md:gap-20">

        {/* Logo główne + partnerzy */}
        <div className="flex flex-col gap-10">
          {/* Logo główne */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <Logo className="w-[180px] md:h-[50px]" />
            <Logo3 className="h-auto w-[150px] md:h-[60px]" />
            <Logo12 className="h-auto w-[150px] md:h-[50px]" />

          </div>

<div className="bg-white p-2 pb-5 px-5 rounded-lg items-center justify-center ">
          {/* Logotypy partnerów */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6  pt-6">
            <Patron4 className="h-[50px] w-auto" />
            <Patron5 className="h-[50px] w-auto" />
            <Patron6 className="relative h-[50px] w-[100px] fill-black " />
            <Patron3 className="h-[50px] w-auto" />
            <Patron2 className="h-[50px] w-auto" />
            <Patron1 className="h-[50px] w-auto" />
            <Patron7 className="h-[100px] w-auto " />

</div>
          </div>
        </div>

        {/* Social media */}
        <div className="flex items-center justify-center md:justify-end gap-6 md:gap-4">
          <a
            target="_blank"
            href="https://www.facebook.com/CHForumKoszalin/"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <Facebook className="h-[40px] w-[40px] md:h-[26px] md:w-[26px] text-white hover:text-green transition-colors duration-200" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/forumkoszalin/"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <Instagram className="h-[40px] w-[40px] md:h-[26px] md:w-[26px] text-white hover:text-green transition-colors duration-200" />
          </a>
        </div>

      </div>
    </footer>

  );
};

export default Footer;

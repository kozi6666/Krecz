"use client";
import Link from "next/link";
import Logo from "~~/svg/logo.svg";
import Logo3 from "~~/svg/logo3.svg";

import { CalendarCheck, Target } from "lucide-react";
import CalendarIcon from '~~/svg/calendar.svg';
import TargetIcon from '~~/svg/target.svg';

import { usePathname, useRouter } from "next/navigation";
import { cn } from "../_utils/twMerge";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useTranslations } from "next-intl";


const Navigation = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const t = useTranslations();


  function onSelectChange(locale: string) {
    startTransition(() => {
      router.replace(locale === "de" ? "/de" : "/pl");
    });



  }
  return (
    <>
      <div className="lg:hidden flex z-50 justify-center gap-5 pt-2 bg-dark backdrop-blur-md px-4 py-2">
        <button
          className={cn(locale === "de" && "opacity-50")}
          onClick={() => {
            onSelectChange("pl");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 w-8">
            <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 w-8">
            <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
            <g mask="url(#a)">
              <path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z" />
              <path fill="#d80027" d="m0 167 255-23 257 23v178H0z" />
              <path fill="#333" d="M0 0h512v167H0z" />
            </g>
          </svg>
        </button>
      </div>
            <header className={cn("bg-dark xl:bg-transparent", pathname !== "/" && "lg:hidden")}>



        <nav className="mx-auto spacer flex h-[60px] items-center justify-between xl:h-full px-10 mx-auto xl:px-10">
          <Link href="/">
            <Logo className="w-[150px] xl:mt-10 xl:h-[80px] xl:w-[240px]" />
          </Link>
          <Link href="/">
            <Logo3 className="w-[150px] xl:mt-10 xl:h-[80px] xl:w-[240px]" />
          </Link>
        </nav>

        {/* Zawartość tekstowa */}
        <div className="relative z-10 text-white text-center  pb-1 px-1 max-w-4xl mx-auto">
          <h1 className="mt-5 text-xl md:text-5xl font-bold">{t("Nav.title1")}</h1>
          <p className="mt-1 text-md font-semibold text-light">{t("Nav.title2")}</p>
          <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-white/90">
            {t("Nav.desc")}
          </p>


          <div className="mx-5 mt-4 grid grid-cols-2  gap-10 text-white justify-items-center">
            <div className="flex items-center gap-4">
              <div className="flex aspect-square w-16 sm:w-20 items-center justify-center rounded-full border border-light  drop-shadow-md">
                <CalendarIcon className="w-16 h-16 text-green-500" />
              </div>
              <span className=" text-xs font-semibold ">22–29.05</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex aspect-square w-16 sm:w-20 items-center justify-center rounded-full border border-light  drop-shadow-md">
                <TargetIcon className=" w-16 h-16 text-green-500" />
              </div>
              <span className="text-xs font-semibold ">Forum Koszalin</span>
            </div>
          </div>

        </div>

      </header>

    </>
  );
};

export default Navigation;

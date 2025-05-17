"use client";

import Image from "next/image";
import Bike from "~~/img/bike.webp";
import Wycieczka from "~~/img/wycieczka.webp";
import Formularz from "./../_components/Formularz";
import Link from "next/link";
import { useTranslations } from "next-intl";
import About from "../_components/About";
import Howjoin from "../_components/Howjoin";
import Gallery from "../_components/Gallery";
import Faq from "../_components/Faq";
import Section from "~/components/ui/section";  
import Hero from "../_components/Hero";
import Header from "../_components/Header";


export default function HomePage() {
  const t = useTranslations();
  return (
    <>
    <Header/>
      <Hero/>
      <About />
      <Howjoin />
      {/*<section className="bg-green spacer relative flex min-h-[550px] flex-col items-center justify-center pb-[60px] pt-[60px] text-center lg:py-[80px] xl:max-h-[900px] xl:py-[100px]">
        <Image
          src={Wycieczka}
          width="504"
          height="596"
          alt="Wycieczka"
          className="absolute left-1/2 top-1/2 w-[calc(100%_-_30px)] max-w-[400px] -translate-x-1/2 -translate-y-1/2 md:top-1/2 xl:max-w-[560px]"
        />
        <div className="relative z-10">
          <h1 className="mx-auto max-w-[880px] text-xl font-bold leading-tight text-white xl:text-3xl xl:font-semibold 1440:text-4xl">
            {t("Section.title1")}
            <br /> {t("Section.title2")}
          </h1>
          <p className="mx-auto mt-8 max-w-[790px] text-lg font-normal text-white xl:text-xl 1440:text-2xl">
            {t("Section.content1")}{" "}
            <a
              href="https://rowerynaforum.pl/"
              target="_blank"
              className="font-bold underline"
            >
              {t("Section.content2")}
            </a>
          </p>
          <h2 className="x-auto mt-10 max-w-[880px] text-lg font-bold leading-tight text-white xl:text-xl xl:font-semibold 1440:text-2xl">
            {t("Section.content3")}
          </h2>
          <ul className="mx-auto mt-5 max-w-[1200px] space-y-2.5 text-md font-normal leading-tight text-white xl:text-lg 1440:text-xl">
            <li className="select-none opacity-50">
              <span className="font-semibold">15.06.2024 r</span>
            </li>
            <li className="select-none opacity-50">
              <span className="font-semibold">29.06.2024 r</span>
            </li>
            <li className="select-none opacity-50">
              <span className="font-semibold">06.07.2024 r</span> (DE)
            </li>
            <li className="select-none opacity-50">
              <span className="font-semibold">13.07.2024 r</span>
            </li>
            <li className="select-none opacity-50">
              <span className="font-semibold">27.07.2024 r</span>
            </li>
            <li className="select-none opacity-50">
              <span className="font-semibold">03.08.2024 r</span> (DE)
            </li>
            <li className="select-none opacity-50">
              <span className="font-semibold">10.08.2024 r</span>
            </li>
            <li>
              <span className="font-semibold">24.08.2024 r</span>
            </li>
          </ul>
          {/* <div className="mt-[50px] space-y-5 md:mt-16 md:flex md:items-center md:justify-center md:gap-[73px] md:space-y-0">
            <div>
              <p className="text-2xl text-light">3 km</p>
              <div className="mx-auto my-[12px] h-[3px] w-[136px] bg-white" />
              <p className="text-2xl text-white">1 zł</p>
            </div>
            <div>
              <p className="text-2xl text-light">10 km</p>
              <div className="mx-auto my-[12px] h-[3px] w-[136px] bg-white" />
              <p className="text-2xl text-white">10 zł</p>
            </div>
            <div>
              <p className="text-2xl text-light">50 km</p>
              <div className="mx-auto my-[12px] h-[3px] w-[136px] bg-white" />
              <p className="text-2xl text-white">50 zł</p>
            </div>
          </div> */}
      {/* <div className="mx-auto mt-[38px] flex max-w-[824px] items-center justify-center rounded-full border border-light px-6 pb-2 pt-2.5 xl:mt-16 xl:h-[72px]">
            <p className="text-sm text-white xl:text-md">
              Akcja trwa w dniach 13 czerwca do 20 czerwca 2024
            </p>
          </div> 
        </div>
      </section>*/}
     <Section
  id="form"
  background="dark"
  className="relative pb-[78px] pt-10 text-center lg:pt-16 xl:pb-16 xl:pt-[128px]"
>
  {/* Tło / ozdoba */}
  <Image
    src={Bike}
    width="1016"
    height="579"
    alt="Serce"
    className="absolute left-1/2 top-[60%] w-[calc(100%_-_60px)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:max-w-[1016px]"
  />

  {/* Treść */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-light">
    <h1 className="text-xl md:text-2xl xl:text-4xl font-bold leading-tight text-light mb-8">
      {t("Form.title")}
    </h1>

    {/* Formularz */}
    <div className="w-full">
      <Formularz />
    </div>
  </div>
</Section>

      <Faq />
    </>
  );
}

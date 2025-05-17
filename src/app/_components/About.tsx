"use client";

import { useTranslations } from "next-intl";
import Section from "~/components/ui/section";
import About1 from "~~/svg/about3km.svg";
import About2 from "~~/svg/about10km.svg";
import About3 from "~~/svg/about50km.svg";
import Blob2 from "~~/svg/blob2.svg";
import Blob1 from "~~/svg/blob1.svg";

import { motion } from "framer-motion"; 
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


const data = [
  {
    value: "1 zł",
    icon: <About1 className="w-24 h-24 md:w-32 h-32 text-green" />
  },
  {
    value: "10 zł",
    icon: <About2 className="w-24 h-24 md:w-32 h-32 text-green" />
  },
  {
    value: "50 zł",
    icon: <About3 className="w-24 h-24 md:w-32 h-32 text-green" />
  },
];


export default function About() {
  const t = useTranslations();
  return (
    <>

      <Section id="about"
      animate
      background="blob" blobComponent={<Blob2 className="w-max h-full object-cover bottom-0 left-0 opacity-10 " />}>
        <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 max-w-5xl mx-auto text-dark text-center">

          {/* Tytuł */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight xl:font-semibold mb-6">
            {t("About.title1")}
          </h2>

          {/* Akapit wprowadzający */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-dark/90 mb-6">
            {t("About.content1")}
          </p>

          {/* Cytat / wyróżnienie */}
          <blockquote className="text-lg sm:text-xl font-semibold text-dark italic border-l-4 border-green pl-4 mb-6">
            {t("About.span1")}
          </blockquote>

          {/* Rozwinięcie / treść końcowa */}
          <p className="text-base sm:text-lg text-dark/80 max-w-3xl mx-auto leading-relaxed">
            {t("About.content2")}
          </p>
        </div>
      </Section>


      <Section background="dark">
        <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 max-w-7xl mx-auto text-light text-center">

          {/* Tytuł */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight xl:font-semibold mb-10">
            {t("About.title2")}
          </h2>

          {/* Kafelki */}
           <motion.div
      className="max-w-3xl mx-auto grid grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="p-6 bg-light/5 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-y-4 text-center w-full"
        >
          {item.icon}
          <div className="text-lg font-bold whitespace-nowrap min-h-[28px]">{item.value}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</Section>



      <Section
      animate
       background="blob" blobComponent={<Blob1 className="w-max h-full object-cover absolute opacity-10 
    top-0 right-0" />}>

      
        <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 max-w-5xl mx-auto text-dark text-center">

          {/* Tytuł */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight xl:font-semibold mb-6">
            {t("About.title3")}
          </h2>

          {/* Tekst z wyróżnieniem */}
          <p className="text-base sm:text-lg md:text-xl text-dark/90 leading-relaxed max-w-3xl mx-auto">
            {t("About.content3")} <strong className="font-semibold text-dark">{t("About.span2")}</strong> {t("About.content4")}
          </p>

        </div>
      </Section>



    </>
  );
}

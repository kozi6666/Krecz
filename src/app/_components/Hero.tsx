"use client";


import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import CalendarIcon from '~~/svg/calendar.svg';
import TargetIcon from '~~/svg/target.svg';



export default function Hero() {
  const t = useTranslations();
  return (
    <>

      {/* Desktop Content */}
      <main className=" hidden lg:block transition-all duration-500 ease-in-out
 -mt-40 md:mt-0 lg:mt-0 h-[calc(100vh_-_180px)] lg:h-screen w-full bg-bg-sm bg-cover bg-center md:bg-bottom md:bg-bg-xl  xl:bg-top">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15 z-0"></div>

        <div className="md:spacer xl:spacer mx-auto flex h-full max-w-3xl flex-col 
        items-center justify-end pb-10 pt-8  md:h-full  md:justify-center md:pb-0 xl:mx-auto xl:w-[unset] xl:items-end">


          <div className=" container mx-auto px-4 relative z-10 py-20">
           <motion.div
  className="flex flex-col items-center text-center max-w-4xl mx-auto"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }}
>
  <motion.h1
    className="text-3xl drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }}
  >
    {t("Nav.title1")}
  </motion.h1>

  <motion.p
    className="text-xl font-bold drop-shadow-lg text-white/90 mb-1 max-w-3xl leading-relaxed"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
    }}
  >
    {t("Nav.title2")}
  </motion.p>

  <motion.p
    className="text-xl drop-shadow-lg text-white/90 mb-12 max-w-3xl leading-relaxed"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
    }}
  >
    {t("Nav.desc")}
  </motion.p>

  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
    }}
  >
    <Link
      href="#form"
      className="bg-light text-xl font-bold text-dark transition px-12 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-dark hover:text-light transition-all transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
    >
      {t("Main.btn")}
    </Link>
  </motion.div>

  <motion.div
    className="flex flex-wrap gap-4 mt-5 justify-center"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
    }}
  >
    <div className="flex items-center rounded-full px-5">
      <TargetIcon className="text-white mr-1 w-12 h-12" />
      <span className="text-white font-medium text-sm drop-shadow-lg">Forum Koszalin</span>
    </div>
    <div className="flex items-center rounded-full px-5">
      <CalendarIcon className="text-white mr-1 w-12 h-12" />
      <span className="text-white font-medium text-sm drop-shadow-lg">13–20.06.2025</span>
    </div>
  </motion.div>
</motion.div>

          </div>
        </div>
      </main>




{/* Mobile Content */}
<main className="block lg:hidden transition-all duration-500 ease-in-out -mt-40 md:mt-0 lg:mt-0 h-[calc(100vh_-_180px)] lg:h-screen w-full bg-bg-sm bg-cover bg-center md:bg-bottom md:bg-bg-xl xl:bg-top">
  <div className="md:spacer xl:spacer mx-auto flex h-full w-[305px] flex-col items-center justify-end pb-10 pt-8 md:mx-0 md:ml-auto md:h-full md:w-[400px] md:justify-center md:pb-0 xl:mx-auto xl:w-[unset] xl:items-end">
    <div className="container mx-auto px-4 relative z-10 py-10">
      <motion.div
  className="flex flex-col items-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 15,
    delay: 0.3, 
  }}
  viewport={{ once: true }}
>
  <Link
    href="#form"
    className="capitalize flex h-10 sm:h-12 md:h-14 lg:h-16 min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[305px] px-6 items-center justify-center rounded-[10px] bg-light text-base sm:text-lg font-bold text-dark transition hover:bg-dark hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484]"
  >
    {t("Main.btn")}
  </Link>
</motion.div>

    </div>
  </div>
</main>


    </>
  );
};


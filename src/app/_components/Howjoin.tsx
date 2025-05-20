"use client";

import { useTranslations } from "next-intl";
import Section from "~/components/ui/section";
import Bike from "~~/svg/bikerecord.svg";
import How1 from "~~/svg/howjoin1.svg";
import How2 from "~~/svg/howjoin2.svg";
import How3 from "~~/svg/howjoin3.svg";
import Blob3 from "~~/svg/blob3.svg";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";


export default function Howjoin() {
  const t = useTranslations();

  const { ref, inView } = useInView({ triggerOnce: true });

  const howJoinSteps = [
    {
      title: t("Howjoin.var1"),
      desc: t("Howjoin.desc1"),
      icon: <How1 className="w-16 h-16 md:w-20 md:h-20 text-green" />

    },
    {
      title: t("Howjoin.var2"),
      desc: t("Howjoin.desc2"),
      icon: <How2 className="w-16 h-16 md:w-20 md:h-20 text-green" />

    },
    {
      title: t("Howjoin.var3"),
      desc: t("Howjoin.desc3"),
      icon: <How3 className="w-16 h-16 md:w-20 md:h-20 text-green" />

    }
  ];

  const record = [
    {
      icon: <Bike className="w-32 h-32 md:w-52 md:h-auto text-green" />,

    }
  ]

  return (
    <>

      <Section
        id="howjoin"
        background="secondary"
        animate>



        <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 mx-auto text-dark text-center">
          <h2 className="mx-auto max-w-5xl text-3xl md:text-4xl font-bold leading-tight text-dark xl:font-semibold">
            {t("Howjoin.title1")}


          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-base sm:text-lg text-dark/80 lg:whitespace-nowrap">
            {t("Howjoin.content1")}
          </p>



          <div className="mt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {howJoinSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{step.icon}</div>
                    <div className="text-left
">
                      <h3 className="text-lg md:text-xl font-bold text-dark mb-1">
                        {step.title}</h3>
                      <p className="text-sm md:text-base justify-left text-dark/80 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>


      <Section
        background="blob" blobComponent={<Blob3 className=" w-max h-full object-cover absolute opacity-10 
    top-0 right-0" />}>
        {/* <div className="relative z-10 mb-5">
          <h2 className="mx-auto max-w-5xl text-3xl md:text-4xl font-bold leading-tight text-dark  xl:font-semibold ">
            {t("Howjoin.title2")}
          </h2>

          <ul className="mx-auto mt-10 max-w-2xl text-left px-5 list-disc">
            <li className="mt-5">{t("Howjoin.li1")}</li>
            <li className="mt-5">{t("Howjoin.li2")}</li>
            <li className="mt-5">{t("Howjoin.li3")}</li>
            <li className="mt-5">{t("Howjoin.li4")}</li>
            <li className="mt-5">{t("Howjoin.li5")}</li>

          </ul>
        </div>*/}

        <div className="relative z-10 max-w-3xl mx-auto px-4 lg:px-8 py-12 sm:py-20">

          {/* Kafelek z rekordami */}
          <div className="p-6 bg-dark backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-light w-full">
            <h3 className="mb-6 text-xl md:text-lg font-bold leading-tight text-light text-center">
              {t("Howjoin.record")}
            </h3>

            <div className=" flex items-center justify-center gap-6 flex-wrap sm:flex-nowrap">
              {/* Ikona roweru */}
              <div className="flex-shrink-0">
                {record.map((item, index) => (
                  <div
                    key={index}
                    className=""
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Dane rekordowe */}
              <div ref={ref} className="text-center uppercase text-sm md:text-base text-light space-y-2">
                <p>
                  <strong className="font-bold text-lg">
                    {inView ? <CountUp start={19800} end={20000} duration={3} separator="" /> : 19800}
                  </strong> <br/>{t("Howjoin.record1")}
                </p>
                <p>
                  <strong className="font-bold text-lg">
                    {inView ? <CountUp start={19000} end={19350} duration={3} separator="" /> : 19000}
                  </strong> <br/>{t("Howjoin.record2")}
                </p>
                <p>
                  <strong className="font-bold text-lg">
                    {inView ? <CountUp start={500} end={530} duration={3} separator="" /> : 500}
                  </strong> <br/>{t("Howjoin.record3")}
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-xl md:text-xl font-bold leading-tight text-dark xl:text-3xl 1440:text-4xl">
              {t("Howjoin.cta1")}<br />
              {t("Howjoin.cta2")}
            </h3>
          </div>

        </div>
      </Section>

    </>
  );
}

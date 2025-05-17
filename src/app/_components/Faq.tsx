import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from '~/components/ui/section';
import { useTranslations } from 'next-intl';


interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('Faq');

  // ⬇️ Wczytanie danych z JSON-a
  const faqItems: FaqItem[] = t.raw('items');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <Section id="faq" background="secondary">
  <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 py-12 sm:py-20 text-dark">
    
    {/* Nagłówek */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        {t("title")}
      </h2>
      <p className="max-w-3xl mx-auto text-base sm:text-lg text-dark/80">
        {t("desc")}
      </p>
    </div>

    {/* FAQ boxy */}
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-md transition-colors duration-300 ${
            openIndex === index
              ? 'bg-dark/10 backdrop-blur-md border border-light text-dark'
              : 'bg-white border border-gray-200 text-dark'
          }`}
        >
          <button
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium text-md">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="flex-shrink-0 text-current " size={20} />
            ) : (
              <ChevronDown className="flex-shrink-0 text-current" size={20} />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out px-5 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <div className="pt-2 text-sm text-left leading-relaxed">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

  );
};

export default Faq;

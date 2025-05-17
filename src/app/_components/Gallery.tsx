'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { useTranslations } from 'next-intl';
import Section from '~/components/ui/section';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const t = useTranslations();

  const images = [
    { url: 'https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg', alt: 'Osoba na rowerze' },
    { url: 'https://images.pexels.com/photos/2628215/pexels-photo-2628215.jpeg', alt: 'Grupa rowerzystów' },
    { url: 'https://images.pexels.com/photos/3621183/pexels-photo-3621183.jpeg', alt: 'Rowerzysta na drodze' },
    { url: 'https://images.pexels.com/photos/5067740/pexels-photo-5067740.jpeg', alt: 'Siłownia z rowerami' },
    { url: 'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg', alt: 'Rowerzysta na szlaku' },
    { url: 'https://images.pexels.com/photos/6643341/pexels-photo-6643341.jpeg', alt: 'Trening na rowerze' }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => setSelectedImageIndex(null);

  const showPrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const showNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <Section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">{t('Gallery.title')}</h2>
          <p className="text-center max-w-3xl">{t('Gallery.desc')}</p>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full rounded-lg mb-5"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full aspect-square flex items-center justify-center bg-dark/10 rounded-lg overflow-hidden"
                  onClick={() => handleImageClick(index)}
                >
                  <img src={image.url} alt={image.alt} className="max-w-full max-h-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={4.5}
            freeMode
            watchSlidesProgress
            className="thumbs-swiper mt-5"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer rounded-lg overflow-hidden">
                  <img src={image.url} alt={image.alt} className="w-full h-20 object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mx-auto items-center max-w-5xl">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleImageClick(index)}
            >
              <img src={image.url} alt={image.alt} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-2 z-50"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={24} />
          </button>

          {/* Prev */}
          {selectedImageIndex > 0 && (
            <button
              className="absolute left-4 sm:left-10 text-white bg-black/50 rounded-full p-2 z-50"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next */}
          {selectedImageIndex < images.length - 1 && (
            <button
              className="absolute right-4 sm:right-10 text-white bg-black/50 rounded-full p-2 z-50"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <ChevronRight size={32} />
            </button>
          )}

          {selectedImageIndex !== null && images[selectedImageIndex] && (
            <div className="relative max-w-full max-h-[90vh]">
              <img
                src={images[selectedImageIndex].url}
                alt={images[selectedImageIndex].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          )}

        </div>
      )}
    </Section>
  );
};

export default Gallery;

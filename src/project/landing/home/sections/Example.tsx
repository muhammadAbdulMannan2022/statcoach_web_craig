// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Define the interface for slide data
interface Slide {
  id: number;
  category: string;
  title: string;
  description: string;
  source: string;
  date: string;
  bgImage: string;
}

// Sample slide data
const slides: Slide[] = [
  {
    id: 1,
    category: "Football",
    title:
      "LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB CONFIRMS",
    description:
      "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals",
    source: "Agence France-Presse",
    date: "04 June 2023",
    bgImage:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    category: "Basketball",
    title: "NBA FINALS 2024: HISTORIC CHAMPIONSHIP WIN BREAKS RECORDS",
    description:
      "An unprecedented victory that showcases the evolution of modern basketball and team dynamics",
    source: "Sports Network",
    date: "15 June 2024",
    bgImage:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&h=1080&fit=crop",
  },
  {
    id: 3,
    category: "Tennis",
    title: "WIMBLEDON CHAMPIONSHIP: NEW CHAMPION EMERGES IN THRILLING FINAL",
    description:
      "Five-set thriller captivates audiences worldwide as underdog claims prestigious title",
    source: "International Sports",
    date: "16 July 2024",
    bgImage:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=1080&fit=crop",
  },
];

const Slider: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-10  px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl relative rounded-3xl shadow">
        <Swiper
          modules={[Navigation, Parallax, Autoplay]}
          speed={800}
          parallax={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={0} // No gap between slides
          className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden" // Responsive height and rounded corners
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full py-6 sm:py-8 rounded-3xl">
                {/* Background Image with Parallax */}
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat bg-center rounded-3xl"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                  data-swiper-parallax="-23%"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent rounded-2xl"
                  data-swiper-parallax="-15%"
                />

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
                    <div className="max-w-3xl">
                      {/* Category Badge */}
                      <div data-swiper-parallax="-100">
                        <span className="inline-block px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                          {slide.category}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div
                        className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4"
                        data-swiper-parallax="-200"
                      >
                        {slide.source} • {slide.date}
                      </div>

                      {/* Title */}
                      <h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                        data-swiper-parallax="-300"
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed"
                        data-swiper-parallax="-400"
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute right-4 bottom-5 flex gap-3 sm:gap-5 z-10">
                  <div className="swiper-button-prev-custom cursor-pointer group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="swiper-button-next-custom cursor-pointer group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

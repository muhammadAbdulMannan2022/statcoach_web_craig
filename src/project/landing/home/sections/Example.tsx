// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiExternalLinkFill } from "react-icons/ri";

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
    category: "AFL",
    title: "Coach Learning Framework",
    description:
      "Access video resources designed to enhance your knowledge of the fundamental skills of coaching.",
    source: "play.afl",
    date: "",
    hraf: "https://play.afl/coach/resources/coach-learning-framework",

    bgImage: "/d1.webp",
  },
  {
    id: 2,
    category: "AFL",
    title: "Meet the not-so-familiar faces in your club's coaches' box",
    description:
      "FROM assistants to analysts to coaching directors, AFL coaches' boxes are a wealth of information.",
    source: "afl.com.au",
    date: "",
    hraf: "https://www.afl.com.au/news/1325829/who-sits-in-your-clubs-coaches-box",
    bgImage: "/d2.webp",
  },
  {
    id: 3,
    category: "AFL (Skills)",
    title: "Coach Skills Series",
    description:
      "Short clips to help coach skills including handballing, marking, kicking and groundballs.",
    source: "play.afl",
    date: "",
    hraf: "https://play.afl/learning-resource/coaches/skills-series",
    bgImage: "/d3.webp",
  },
  {
    id: 4,
    category: "AFL ",
    title: "COACH ACCREDITATION (CoachAFL)",
    description:
      "The CoachAFL portal, is the home to all Coach Development resources and support for Australian Rules coaches across the nation. The platform features the following tools, to allow community coaches to continue to develop and enhance their coaching skillset",
    source: "wafc.com.au",
    date: "",
    hraf: "https://wafc.com.au/coaches/coaching-resources",
    bgImage: "/d4.png",
  },
];

const Slider: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-10  px-4 sm:px-6 lg:px-8 mt-20">
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
                        className="text-white/90  mb-3 sm:mb-4 flex items-center gap-3"
                        data-swiper-parallax="-200"
                      >
                        <span className="text-xs sm:text-sm">
                          {slide.source}{" "}
                        </span>
                        <a href={slide.hraf} target="_blank">
                          <RiExternalLinkFill width={10} height={10} />
                        </a>
                      </div>

                      {/* Title */}
                      <h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight line-clamp-2"
                        data-swiper-parallax="-300"
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed line-clamp-4"
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

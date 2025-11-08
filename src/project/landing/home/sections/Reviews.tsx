// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Fekete Csanád",
    organization: "American College of Radiology (ACR)",
    rating: 5,
    text: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
    image: "/rv1.jpg",
  },
  {
    id: 2,
    name: "Király Vince",
    organization: "American Academy of Pediatrics (AAP)",
    rating: 5,
    text: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
    image: "/rv2.jpg",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    organization: "Medical Association",
    rating: 5,
    text: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
    image: "/rv3.jpg",
  },
];
function ReviewCard({ review }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6">
      {/* hide on mobile, show from sm+ */}
      <img
        src={review.image}
        alt={review.name}
        className="hidden sm:block w-28 h-28 md:w-32 md:h-32 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-[#504B63] text-lg">{review.name}</h3>
        <p className="text-sm text-[#4A5565] mb-2">{review.organization}</p>
        <div className="flex gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
        <p
          title={review.text}
          className="text-sm text-[#696868] leading-relaxed line-clamp-3"
        >
          “{review.text}”
        </p>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <div id="reviews" className="mb-16 "></div>
      <section className="w-full py-16 px-4 bg-gradient-to-t from-[#F4F6FB] via-white to-[#F4F6FB]">
        <div className="max-w-7xl mx-auto relative  pb-10 ">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#504B63]">Clubs </span>
              <span className="text-light-green"> We Work With</span>
            </h2>
            <p className="text-[#696868] max-w-md">
              Last year, Savilia Blunk took a more conservative approach to her
              first season as an
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-card rounded-lg border border-gray-200">
                  <ReviewCard review={review} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center my-5">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}

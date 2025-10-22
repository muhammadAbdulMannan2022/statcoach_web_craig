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
    <div className="flex gap-4 p-6">
      <img
        src={review.image}
        alt={review.name}
        className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
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
          " {review.text} "
        </p>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto relative  pb-10 ">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#504B63]">Clients </span>
            <span className="text-light-green">Reviews</span>
          </h2>
          <p className="text-[#696868] max-w-md">
            Last year, Savilia Blunk took a more conservative approach to her
            first season as an
          </p>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
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
  );
}

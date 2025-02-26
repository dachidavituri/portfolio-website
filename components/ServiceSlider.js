import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxCode
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Crafting visually engaging designs that enhance user experience. "
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Building high-performance web applications tailored to your business needs. "
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Optimizing your website on search engines and attract more organic traffic."
  },
  {
    icon: <RxCode />,
    title: "API Integration",
    description: "We integrate third-party APIs to extend the functionality of your website or application."
  },

];


const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        console.log(item);
        return (
          <SwiperSlide key={index}>
            <div
              className="h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-300 bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)]
"
            >
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

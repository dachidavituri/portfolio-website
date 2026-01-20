// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/movie-9pvmdtvz4cb0xl37.jpg",
          link: "https://movie-app-seven-lyart.vercel.app/ka/movies/1220564",
        },
        {
          title: "title",
          path: "/vnhorbifareii6uedrt4.webp",
          link: "https://dachidavituri.github.io/github-search-app/",
        },
        {
          title: "title",
          path: "/Screenshot 2025-02-27 214830.png",
          link: "https://my-travel-six.vercel.app/ka/home",
        },
        {
          title: "title",
          path: "/nvjjyhvhqfwnjseojdgg.webp",
          link: "https://dachidavituri.github.io/Password-generator/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/txnhbxbvi4zqxxcqmrwq.webp",
          link: "https://dachidavituri.github.io/Accordion-app/",
        },
        {
          title: "title",
          path: "/mnmpkjsbvur3xvrydf66.webp",
          link: "https://dachidavituri.github.io/sign-up/",
        },
        {
          title: "title",
          path: "/so0b0hpmowz5ujjwbhkp.webp",
          link: "https://dachidavituri.github.io/tip-calculator/",
        },
        {
          title: "title",
          path: "/rhg8wnn0jawmcfq3vta1.webp",
          link: "https://dachidavituri.github.io/clock-app/",
        },
      ],
    },
  ],
};
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => {
        console.log(item);
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2  grid-rows-2 gap-4 cursor-pointer">
              {item.images.map((image, index) => (
                <Link key={index} href={image.link} passHref>
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group sm:h-[200px] h-[100px]">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={image.path}
                        width={500}
                        height={200}
                        alt={image.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    </div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">LIVE</div>
                        <div className="transition-all duration-300 delay-150 translate-y-[500%] group-hover:translate-y-0">
                          PROJECT
                        </div>
                        <div className="text-xl duration-300 delay-200 transition-all translate-y-[500%] group-hover:translate-y-0">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";
import { COLORS } from "../../../constant/theme";

export default function BestContentComp() {
  const { data: chains, isLoading } = useQuery({
    queryKey: ["youtubData"],
    queryFn: ContentApi.getYoutubeContent,
    throwOnError: (error) => {
      console.log("Error loading youtubuData.", error);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
      style={{ height: "474px" }}
    >
      {chains.map((chain, index) => (
        <SwiperSlide key={index}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                style={{ height: "215px" }}
                src={BASE_URL + `/storage/` + chain.image}
                alt={chain.title}
              />
            </a>
            <div className="p-4 ml-auto">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold text-end">
                {chain.title}
              </h6>

              <div className="p-3 flex flex-wrap gap-2 ml-auto ">
                <span
                  style={{
                    backgroundColor: COLORS.primarygreen,
                  }}
                  className={`text-xs font-medium px-2.5 py-0.5 rounded text-white ml-auto`}
                >
                  {chain.categoryName}
                </span>
              </div>

              <p className="text-slate-600 leading-normal font-light ml-auto">
                {"..." + chain.smallDescription.substring(0, 50)}
              </p>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                {chain.user.avatar && (
                  <img
                    alt={chain?.user?.fullName}
                    src={BASE_URL + "/storage/" + chain?.user?.avatar}
                    className="relative inline-block h-8 w-8 rounded-full"
                  />
                )}
                <div className="flex flex-col ml-3 text-sm">
                  <span className="text-slate-800 font-semibold">
                    {chain?.user?.fullName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

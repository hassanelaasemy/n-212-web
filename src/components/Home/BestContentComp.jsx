import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";

export default function BestContentComp() {

    const {
        data: items,
        isLoading,
    } = useQuery({
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
            style={{ height: '474px' }}
        >
            {items.map((slide, index) => (
                <SwiperSlide key={index}>


                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" style={{ height: '215px' }} src={BASE_URL + `/storage/` + slide.image} alt={slide.title} />

                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>


                </SwiperSlide>
            ))}
        </Swiper>

    )
 
  
}

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";

export default function Event() {

    const { data: items, isLoading } = useQuery({
        queryKey: ["eventData"],
        queryFn: ContentApi.getEvents,
        throwOnError: (error) => {
            console.log("Error loading EventData.", error);
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"

        // style={{height:'374px'}}

        >
            {items.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img
                        className="image_swiper"
                        src={BASE_URL + `/storage/` + slide.image}
                        alt={slide.title}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";
import '../../css/speaker.css'

export default function Speakers() {

    const {
        data: speakers,
        isLoading,
    } = useQuery({
        queryKey: ["speakerData"],
        queryFn: ContentApi.getPupularSpeakers,
        throwOnError: (error) => {
            console.log("Error loading Speakers.", error);
        },
    });
    if (isLoading) return <div>Loading...</div>;

    const colorPairs = [
        { text: "text-blue-800", bg: "bg-blue-100" },
        { text: "text-green-800", bg: "bg-green-100" },
        { text: "text-red-800", bg: "bg-red-100" },
        { text: "text-purple-800", bg: "bg-purple-100" },
        { text: "text-yellow-800", bg: "bg-yellow-100" },
        { text: "text-pink-800", bg: "bg-pink-100" }
    ];

    function getRandomColorPair() {
        return colorPairs[Math.floor(Math.random() * colorPairs.length)];
    }


    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            style={{ height: '100%' }}
        >
            {speakers.map((speaker, index) => (
                <SwiperSlide key={index}>


                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ height: '304px' }}>
                        <div className='relative'>
                            <a href="#">
                                <img className="rounded-t-lg w-full" style={{ height: '180px' }} src={BASE_URL + `/storage/` + speaker.cover} alt={speaker.id} />
                                <img className="rounded-t-lg absolute w-full speaker_avatar" src={BASE_URL + `/storage/` + speaker.avatar} alt={speaker.id} />
                            </a>

                        </div>
                        <a href="#">
                            <h5 class="mb-1 max-w-72 p-1 text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{speaker.fullName}</h5>
                        </a>

                        <div className="p-3 flex flex-wrap gap-2">
                            {speaker.roles.map((role, index) => {
                                const { text, bg } = getRandomColorPair();
                                return (
                                    <span
                                        key={index}
                                        className={`${text} ${bg} text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400`}
                                    >
                                        {role}
                                    </span>
                                );
                            })}
                        </div>


                    </div>


                </SwiperSlide>
            ))}
        </Swiper>

    )
}

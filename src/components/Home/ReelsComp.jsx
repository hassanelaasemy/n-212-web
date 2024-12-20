import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import ContentApi from "../../../Api/ContentApis";
import { BASE_URL } from "../../../config";
export default function ReelsComp() {
  const {
    isLoading,
    data: shorts,
  } = useQuery({
    queryKey: ["shorts"],
    queryFn: ContentApi.getQuiqlyContent,
    throwOnError: (error) => {
      console.log("Error loading shorts Data.", error);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        spaceBetween={50}
        modules={[Pagination]}
        style={{ width: "100%", height: "350px" }}
      >
        {shorts.map((reel, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={BASE_URL + "/storage/" + reel.imageFlex}
                alt={reel.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

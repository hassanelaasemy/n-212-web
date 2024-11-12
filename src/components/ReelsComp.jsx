import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/reels.css";
import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import ContentApi from "../../Api/ContentApis";
import { BASE_URL } from "../../config";
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
        slidesPerView={4}
        spaceBetween={50}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {shorts.map((reel, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={BASE_URL + "/storage/" + reel.image} alt={reel.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

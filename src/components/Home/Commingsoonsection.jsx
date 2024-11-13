import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";

export default function Commingsoonsection() {
  const {
    data: items,
    isLoading,
  } = useQuery({
    queryKey: ["comingSoonData"],
    queryFn: ContentApi.getCommingSoonContent,
    throwOnError: (error) => {
      console.log("Error loading comingSoonData.", error);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
    >
      {items.map((slide, index) => (
        <SwiperSlide key={index}>
          <img className="image_swiper" src={BASE_URL + `/storage/` + slide.image} alt={slide.title} />
          
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";

export default function Commingsoonsection() {
  const { data: items, isLoading } = useQuery({
    queryKey: ["comingSoonData"],
    queryFn: ContentApi.getCommingSoonContent,
    throwOnError: (error) => {
      console.log("Error loading comingSoonData.", error);
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
        // when window width is >= 768px (tablet)
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px (desktop)
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
      // style={{
      //   position: "relative",
      // }}
    >
      {items.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            className="image_swiper"
            src={BASE_URL + `/storage/` + slide.image}
            alt={slide.title}
          />

          <div style={{ position: "absolute", top: 20, left: -25, width: 180 }}>
            <div style={{ transform: "rotate(-40deg)" }}>
              <button
                style={{
                  backgroundColor: "#FF0000", // Replace with COLORS.primaryred
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold", // Replace with FONTS.fontBold if available
                    color: "#FFFFFF", // Replace with COLORS.white
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Coming soon...
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

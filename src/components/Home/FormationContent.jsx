import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles.css";
import { Pagination } from "swiper/modules";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";
import { COLORS } from "../../../constant/theme";

export default function FormationContent() {
  const {
    isLoading,
    error,
    data: courseData,
  } = useQuery({
    queryKey: ["courseData"],
    queryFn: ContentApi.getFormationContent,
    throwOnError: (error) => {
      console.log("Error loading courseData.", error);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 320px (mobile)
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
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
      style={{ height: "500px" }}
    >
      {courseData.map((formation, index) => (
        <SwiperSlide key={index}>
          <a href="javascript:void(0)">
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  src={BASE_URL + `/storage/` + formation.image}
                  alt="card-image"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="p-4 ml-auto">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold text-end">
                  {formation.title}
                </h6>

                <div className="p-3 flex flex-wrap gap-2 ml-auto ">
                  <span
                    style={{
                      backgroundColor: COLORS.primarygreen,
                    }}
                    className={`text-xs font-medium px-2.5 py-0.5 rounded text-white ml-auto`}
                  >
                    {formation.categoryName}
                  </span>
                </div>

                <p className="text-slate-600 leading-normal font-light ml-auto">
                  {"..." + formation.smallDescription.substring(0, 50)}
                </p>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt={formation.user.fullName}
                    src={BASE_URL + "/storage/" + formation.user.avatar}
                    className="relative inline-block h-8 w-8 rounded-full"
                  />
                  <div className="flex flex-col ml-3 text-sm">
                    <span className="text-slate-800 font-semibold">
                      {formation.user.fullName}
                    </span>
                    <span className="text-slate-600">
                      {formation?.user.roles.join("").substring(0, 9) + "..."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

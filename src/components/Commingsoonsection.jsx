// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./../styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const imageData = [
  {
    id: 1,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 2,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 3,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 4,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 5,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 6,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 7,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
  {
    id: 8,
    imageUrl:
      "https://f.hellowork.com/blogdumoderateur/2023/01/conseils-cours-en-ligne-e-learning.jpeg",
  },
];

export default function Commingsoonsection() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
    >
      {imageData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.imageUrl} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

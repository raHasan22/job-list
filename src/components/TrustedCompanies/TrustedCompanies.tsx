import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function TrustedCompanies() {
  return (
    <div className="px-2 py-8">
      <div className="mb-5 mx-5">
        <p className="text-lg font-bold font-serif mb-3">Our Trusted Companies</p>
        <hr style={styles.hrrrrr}/>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={2}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="px-4">
              <img
                width="100%"
                height="100%"
                src="assets/Trusted/trusted-company-11.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-8">
              <img
                width="100%"
                height="100%"
                src="assets/Trusted/trusted-company-22.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <img
                width="100%"
                height="100%"
                src="assets/Trusted/trusted-company-33.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <img
                width="100%"
                height="100%"
                src="assets/Trusted/trusted-company-44.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <img
                width="100%"
                height="100%"
                src="assets/Trusted/trusted-company-55.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <img
                width="100%"
                height="100%"
                src="assets/Trusted/trusted-company-66.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
const styles = {
    hrrrrr: {
      border: '1px solid #064749',
    },
  } as const;
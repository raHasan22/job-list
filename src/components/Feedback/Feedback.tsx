import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Feedback() {
  return (
    <div className="px-2 py-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-serif text-white my-4">
          Trusted Customer <span className="text-cyan-500">Feedback</span>
        </h1>
        <p className="font-mono">Check out our customer reviews</p>
      </div>
      <div className="my-8">
        <Swiper
         breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="text-center flex flex-col justify-center items-center py-6 px-3 rounded-md bg-[#001618]">
              <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
                <div className="bg-[#062224] rounded-full h-full">
                  <img
                    className="rounded-full"
                    width="100%"
                    height="100%"
                    src="assets/feedback/home6-feedback-author-01.png"
                  />
                </div>
              </div>
              <div className="rating rating-md mb-3">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <h4 className="mb-5 text-2xl px-3">
                On the other hand, denounce with righteous to indignation and
                dislike men who are so beguiled and demoralized.
              </h4>
              <h5 className="text-xl font-semibold font-mono">
                MJordan Miycol
              </h5>
              <p className="text-sm font-light">UI/UX Designer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center flex flex-col justify-center items-center py-6 px-3 rounded-md bg-[#001618]">
              <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
                <div className="bg-[#062224] rounded-full h-full">
                  <img
                    className="rounded-full"
                    width="100%"
                    height="100%"
                    src="assets/feedback/home6-feedback-author-02.png"
                  />
                </div>
              </div>
              <div className="rating rating-md mb-3">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h4 className="mb-5 text-2xl px-3">
                On the other hand, denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire.
              </h4>
              <h5 className="text-xl font-semibold font-mono">Rakhab Uddin</h5>
              <p className="text-sm font-light">Developer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center flex flex-col justify-center items-center py-6 px-3 rounded-md bg-[#001618]">
              <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
                <div className="bg-[#062224] rounded-full h-full">
                  <img
                    className="rounded-full"
                    width="100%"
                    height="100%"
                    src="assets/feedback/home6-feedback-author-03.png"
                  />
                </div>
              </div>
              <div className="rating rating-md mb-3">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h4 className="mb-5 text-2xl px-3">
                On the other hand, denounce with righteous to indignation and
                dislike men who are so beguiled and demoralized.
              </h4>
              <h5 className="text-xl font-semibold font-mono">
                Mrs. Jordan Harry
              </h5>
              <p className="text-sm font-light">Senior Nurse</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center flex flex-col justify-center items-center py-6 px-3 rounded-md bg-[#001618]">
              <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
                <div className="bg-[#062224] rounded-full h-full">
                  <img
                    className="rounded-full"
                    width="100%"
                    height="100%"
                    src="assets/feedback/home6-feedback-author-02.png"
                  />
                </div>
              </div>

              <div className="rating rating-md mb-3">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <h4 className="mb-5 text-2xl px-3">
                On the other hand, denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire.
              </h4>
              <h5 className="text-xl font-semibold font-mono">Rakhab Uddin</h5>
              <p className="text-sm font-light">Developer</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

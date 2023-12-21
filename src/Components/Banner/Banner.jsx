// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[80vh]"
            style={{ backgroundImage: "url(./banner1.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
              <h1 className="mb-5 text-7xl font-bold text-white">Be <span className="font-bold text-7xl bg-gradient-to-r from-red-600 via-orange-400  to-red-600 text-transparent bg-clip-text">Creative</span> </h1>
                <p className="mb-5 text-gray-400 font-semibold">
                  Effortlessly organize your workload and boost productivity
                  with our intuitive task management website. <br /> Streamline
                  collaboration, set deadlines, and achieve your goals <br />
                  seamlessly in a user-friendly digital workspace.
                </p>
                <button className="btn bg-red-700 text-white border-none px-8">
                  Explore More{" "}
                  <span className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div
            className="hero h-[80vh]"
            style={{ backgroundImage: "url(./banner2.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
              <h1 className="mb-5 text-7xl font-bold text-white">Be <span className="font-bold text-7xl bg-gradient-to-r from-red-600 via-orange-400  to-red-600 text-transparent bg-clip-text">Creative</span> </h1>
                <p className="mb-5 text-gray-400 font-semibold">
                  Effortlessly organize your workload and boost productivity
                  with our intuitive task management website. <br /> Streamline
                  collaboration, set deadlines, and achieve your goals <br />
                  seamlessly in a user-friendly digital workspace.
                </p>
                <button className="btn bg-red-700 text-white border-none px-8">
                  Explore More{" "}
                  <span className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </span>
                </button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div
            className="hero h-[80vh]"
            style={{ backgroundImage: "url(./banner3.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
              <h1 className="mb-5 text-7xl font-bold text-white">Be <span className="font-bold text-7xl bg-gradient-to-r from-red-600 via-orange-400  to-red-600 text-transparent bg-clip-text">Creative</span> </h1>
                <p className="mb-5 text-gray-400 font-semibold">
                  Effortlessly organize your workload and boost productivity
                  with our intuitive task management website. <br /> Streamline
                  collaboration, set deadlines, and achieve your goals <br />
                  seamlessly in a user-friendly digital workspace.
                </p>
                <button className="btn bg-red-700 text-white border-none px-8">
                  Explore More
                  <span className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </span>
                </button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div
            className="hero h-[80vh]"
            style={{ backgroundImage: "url(./banner4.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
              <h1 className="mb-5 text-7xl font-bold text-white">Be <span className="font-bold text-7xl bg-gradient-to-r from-red-600 via-orange-400  to-red-600 text-transparent bg-clip-text">Creative</span> </h1>
                <p className="mb-5 text-gray-400 font-semibold">
                  Effortlessly organize your workload and boost productivity
                  with our intuitive task management website. <br /> Streamline
                  collaboration, set deadlines, and achieve your goals <br />
                  seamlessly in a user-friendly digital workspace.
                </p>
                <button className="btn bg-red-700 text-white border-none px-8">
                  Explore More
                  <span className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </span>
                </button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div
            className="hero h-[80vh]"
            style={{ backgroundImage: "url(./banner5.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-7xl font-bold text-white">Be <span className="font-bold text-7xl bg-gradient-to-r from-red-600 via-orange-400  to-red-600 text-transparent bg-clip-text">Creative</span> </h1>
                <p className="mb-5 text-gray-400 font-semibold">
                  Effortlessly organize your workload and boost productivity
                  with our intuitive task management website. <br /> Streamline
                  collaboration, set deadlines, and achieve your goals <br />
                  seamlessly in a user-friendly digital workspace.
                </p>
                <button className="btn bg-red-700 text-white border-none px-8">
                  Explore More
                  <span className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </span>
                </button>
              </div>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

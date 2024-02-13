import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
function Testimonial() {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque impedit sunt nobis mollitia tenetur nostrum. Exercitationem ullam natus minus neque tis qui iusto. Quis provident iure quas quibusdam dolorem, expedita distinctio aliquam atque corrupti molestias.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque impedit sunt nobis mollitia tenetur nostrum. Exercita quibusdam dolorem, expedita distinctio aliquam atque corrupti molestias.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque impedit sunt nobis mollitia tenetur nostrum. Exerciis qui iusto. Quis provident iure quas quibusdam dolorem, expedita distinctio aliquam atque corrupti molestias.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque impedit sunt nobis mollitia tenetur nostrum. Exercitationem ullam natus minus neque fugit! Aperiam suscipit consectetur perspiciaias.",
    },
  ];

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span> From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial ">
                <img src={client.img} alt="" />
                <span style={{ color: darkMode ? "black" : "" }}>
                  {client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;

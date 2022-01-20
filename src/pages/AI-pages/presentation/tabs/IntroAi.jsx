import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import Intro1 from "./AI-intros/intro1";
import Intro2 from "./AI-intros/intro2";

SwiperCore.use([EffectCoverflow, Pagination]);

const App = () => {
  return (
    <StyledContainer className="Container">
      <StyledSwiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="intro1">
            <Intro1 />
            page 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro2">
            <Intro2 />
            page 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro3">page 3</div>
        </SwiperSlide>
      </StyledSwiper>
    </StyledContainer>
  );
};

export default App;

const StyledContainer = styled.div`
  height: 500px;
  width: 95vw;
  background: black;
  border-radius: 5px;
  margin: 30px auto;
`;
const StyledSwiper = styled(Swiper)`
  color: white;
  height: 100%;
`;
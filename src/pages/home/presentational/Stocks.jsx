import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stock from './Stock';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Stocks(props) {
  const [isLast, setIsLast] = useState(true);

  useEffect(() => {
    console.log(props.isLast);
    setIsLast(props.isLast);
  }, [props.isLast]);

  const stockSlide = props.stock.map((list, index) => (
    <SwiperSlide key={index}>
      <Stock
        name={list.itemName}
        index={index + 1}
        share={list.percent_by_account}
        money={list.price}
        rate={list.profit}
      ></Stock>
    </SwiperSlide>
  ));

  return (
    <>
      {isLast === true ? (
        <NoStock>
          아직 통장이 존재하지 않습니다!
        </NoStock>
      ) : (
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true, type: 'bullets', bulletClass: 'swiper-pagination-bullet' }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          {stockSlide}
        </Swiper>
      )}
    </>
  );
}

const NoStock = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  font-size: 20px;
`
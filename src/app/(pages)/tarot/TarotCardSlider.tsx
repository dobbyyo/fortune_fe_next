/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  dragPositionState,
  resetTriggerState,
  selectedCardsState,
} from "@/atoms/tarotState";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ResponsiveImage } from "@/app/components/img";

const TarotCardSlider = () => {
  const totalCards = 64;
  const sliderRef = useRef(null);
  const [selectedCards, setSelectedCards] = useRecoilState(selectedCardsState);
  const dragPosition = useRecoilValue(dragPositionState);
  const [resetTrigger, setResetTrigger] = useRecoilState(resetTriggerState);

  useEffect(() => {
    // 리셋 트리거가 활성화되면 카드 상태 초기화
    if (resetTrigger) {
      setSelectedCards(Array(selectedCards.length).fill(null)); // 상태 초기화
      setResetTrigger(false); // 트리거 초기화
    }
  }, [resetTrigger, setSelectedCards, selectedCards.length]);

  const handleCardClick = (index: number) => {
    if (!selectedCards.includes(null)) return; // 모든 카드가 선택된 경우 무시

    setSelectedCards((prev) => {
      if (prev.includes(index)) return prev; // 중복된 선택 무시

      const nextState = [...prev];
      const nullIndex = nextState.findIndex((card) => card === null); // null 위치 찾기

      if (nullIndex !== -1) {
        nextState[nullIndex] = index; // 선택된 index 추가
      }
      return nextState;
    });
  };

  useEffect(() => {
    if (sliderRef.current) {
      const swiperInstance = (
        sliderRef.current as {
          swiper: any;
        }
      ).swiper;
      const slideIndex = Math.floor((dragPosition / 100) * totalCards);
      swiperInstance.slideTo(slideIndex);
    }
  }, [dragPosition, totalCards]);

  return (
    <div className="w-full sm:p-4 flex">
      <Swiper
        ref={sliderRef}
        modules={[Navigation, Pagination]}
        grabCursor={false}
        navigation={false}
        pagination={false}
        breakpoints={{
          320: {
            slidesPerView: 12,
            spaceBetween: -10,
          },
          640: {
            slidesPerView: 20,
            spaceBetween: -66,
          },
        }}
      >
        {Array.from({ length: totalCards }).map((_, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              onClick={() => handleCardClick(index)}
              className={`card-${index} relative w-[60px] h-[95px] cursor-pointer hover:scale-105 transition-transform 
              ${
                selectedCards.includes(index)
                  ? "opacity-0 pointer-events-none"
                  : ""
              }`}
              style={{
                opacity: selectedCards.includes(index) ? "0" : "1",
                transform: selectedCards.includes(index)
                  ? "translateY(150px) scale(0.5)"
                  : "none",
                transition: "transform 0.5s, opacity 0.5s",
              }}
            >
              {/* <div className="w-[60px] h-[95px] relative"> */}
              <ResponsiveImage
                webpSrc="/tarot/webp/tarot-back.webp"
                pngSrc="/tarot/png/tarot-back.png"
                alt={`Card ${index + 1}`}
              />
              {/* </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TarotCardSlider;

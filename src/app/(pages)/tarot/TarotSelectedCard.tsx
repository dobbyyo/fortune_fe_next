import { ResponsiveImage } from "@/app/components/img";
import {
  selectedCardsState,
  tabCategoriesState,
  tabState,
} from "@/atoms/tarotState";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const TarotSelectedCard = () => {
  const activeTab = useRecoilValue(tabState);
  const categories = useRecoilValue(tabCategoriesState);
  const [selectedCards, setSelectedCards] = useRecoilState(selectedCardsState);

  // 탭 변경 시 선택된 카드 상태를 초기화
  useEffect(() => {
    setSelectedCards(categories.map(() => null));
  }, [activeTab, categories, setSelectedCards]);

  return (
    <div className="mt-8">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div
                className={`font-normal mb-2 text-[14px] sm:text-[20px] ${
                  activeTab === "오늘의 타로" && "w-[90px] sm:w-[120px]"
                }`}
              >
                {category}
              </div>
              <div
                className={
                  "w-[60px] h-[95px] bg-[#D9D9D9] rounded flex items-center justify-center shadow-md"
                }
              >
                <div className="w-[60px] h-[95px] relative">
                  {selectedCards[index] !== null ? (
                    <ResponsiveImage
                      webpSrc="/tarot/webp/tarot-back.webp"
                      pngSrc="/tarot/png/tarot-back.png"
                      alt={`Card ${index + 1}`}
                    />
                  ) : (
                    <div className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarotSelectedCard;

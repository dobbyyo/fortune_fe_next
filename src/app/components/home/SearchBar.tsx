"use client";

import { FormEvent, useState } from "react";
import { ResponsiveImage } from "@app/components/img";
import { useRouter } from "next/navigation";
import Suggestions from "./Suggestions";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const keywordMapping = {
    dream: ["해몽", "꿈"],
    saju: [
      "사주",
      "운세",
      "오늘의 운세",
      "내일의 운세",
      "지정일 운세",
      "신년운세",
      "토정비결",
      "정통사주",
    ],
    naming: ["작명", "이름"],
    tarot: [
      "타로",
      "타로점",
      "타로운세",
      "타로카드",
      "별자리",
      "띠",
      "연애",
      "취업",
    ],
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const [category, keywords] of Object.entries(keywordMapping)) {
      if (keywords.some((keyword) => searchTerm.includes(keyword))) {
        router.push(`/${category}`);
        return;
      }
    }

    alert("해당 키워드와 매칭되는 카테고리가 없습니다.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSuggestions([]); // 검색어가 비어있으면 제안 비움
      return;
    }

    // 검색어와 매칭되는 키워드 필터링
    const matchedSuggestions: string[] = [];
    for (const keywords of Object.values(keywordMapping)) {
      matchedSuggestions.push(
        ...keywords.filter((keyword) => keyword.includes(value))
      );
    }
    setSuggestions(matchedSuggestions);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="px-2 flex items-center w-full h-[40px] sm:h-[60px] 
                border border-[#404040] rounded-[5px] max-w-[800px]"
      >
        <div className="relative w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]">
          <ResponsiveImage
            webpSrc="/home/webp/search.webp"
            pngSrc="/home/webp/search.png"
            alt="Search"
          />
        </div>
        <input
          type="text"
          placeholder="검색할 내용을 입력해주세요."
          className="flex-1 p-2 bg-transparent border-none 
              focus:outline-none text-[14px] sm:text-[20px]
              placeholder:text-[14px] sm:placeholder:text-[20px] placeholder:font-normal"
          value={searchTerm}
          onChange={handleInputChange}
          maxLength={10}
        />
      </form>

      {/* Suggestions 렌더링 */}
      <Suggestions
        suggestions={suggestions}
        onSelectSuggestion={(suggestion) => setSearchTerm(suggestion)}
      />
    </>
  );
};

export default SearchBar;

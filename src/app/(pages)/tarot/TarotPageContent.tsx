"use client";

import { BaseNavBar } from "@/app/components/bar";
import { Line } from "@/app/components/common";
import { authState } from "@/atoms/authState";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import TarotMain from "./TarotMain";
import TarotCardTitle from "./TarotCardTitle";
import TarotCardSlider from "./TarotCardSlider";
import TarotSelectedCard from "./TarotSelectedCard";
import TarotActionButton from "./TarotActionButton";
import TarotTabNavigation from "./TarotTabNavigation";

interface TarotPageContentProps {
  authData: { status: number; message: string; data: null };
}

export const TarotPageContent = ({ authData }: TarotPageContentProps) => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    setAuth(authData.status === 200 ? true : false);
  }, [authData, setAuth]);

  return (
    <div className="baseWrapper">
      <BaseNavBar title={"타로"} />
      <Line />
      <TarotTabNavigation />
      <TarotMain>
        <TarotCardTitle />
        <TarotCardSlider />
        <TarotSelectedCard />
        <TarotActionButton />
      </TarotMain>
    </div>
  );
};

export default TarotPageContent;

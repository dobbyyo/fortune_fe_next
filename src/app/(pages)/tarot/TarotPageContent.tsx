"use client";

import { BaseNavBar } from "@/app/components/bar";
import { authState } from "@/atoms/authState";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

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
      <div></div>
    </div>
  );
};

export default TarotPageContent;

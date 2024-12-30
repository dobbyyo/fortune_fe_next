"use client";

import { CategoryList, SearchBar } from "@/app/components/home";
import { authState } from "@/atoms/authState";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface HomePageContentProps {
  authData: { status: number; message: string; data: null };
}

export const HomePageContent = ({ authData }: HomePageContentProps) => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    setAuth(authData.status === 200 ? true : false);
  }, [authData, setAuth]);

  return (
    <div className="baseWrapper">
      <SearchBar />
      <CategoryList />
    </div>
  );
};

export default HomePageContent;

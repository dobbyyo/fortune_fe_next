"use client";

import React, { ReactNode } from "react";
import {
  AuthHeader,
  Footer,
  MainContent,
  NoAuthHeader,
} from "@app/components/common";
import { useRecoilValue } from "recoil";
import { isAuthenticatedState } from "@/atoms/authState";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  return (
    <div className="min-h-screen flex flex-col">
      {isAuthenticated ? <AuthHeader /> : <NoAuthHeader />}
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default MainLayout;

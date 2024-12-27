import React, { ReactNode } from "react";
import { Header, Footer, MainContent } from "@app/components/common";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default MainLayout;

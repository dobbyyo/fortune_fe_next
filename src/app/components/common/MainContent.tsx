import React, { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return <main className="flex-1 p-6 bg-gray-100">{children}</main>;
};

export default MainContent;

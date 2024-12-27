import React, { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="flex-1 w-full max-w-[1200px] min-w-[320px] mx-auto px-4 py-2">
      {children}
    </main>
  );
};

export default MainContent;

import React, { ReactNode } from "react";

const TarotMain = ({ children }: { children: ReactNode }) => {
  return <div className="w-full bg-[#f1f1f1]">{children}</div>;
};

export default TarotMain;

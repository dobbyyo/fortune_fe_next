import React, { useState } from "react";
import { ResponsiveImage } from "../img";
import Link from "next/link";

interface NavBarProps {
  title: string;
}

const BaseNavBar = ({ title }: NavBarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    {
      label: "타로",
      pngIcon: "/side_icon/png/tarot.png",
      webpIcon: "/side_icon/webp/tarot.webp",
      path: "/tarot",
    },
    {
      label: "사주",
      pngIcon: "/side_icon/png/saju.png",
      webpIcon: "/side_icon/webp/saju.webp",
      path: "/saju",
    },
    {
      label: "꿈해몽",
      pngIcon: "/side_icon/png/dreaming.png",
      webpIcon: "/side_icon/webp/dreaming.webp",
      path: "/dream",
    },
    {
      label: "작명",
      pngIcon: "/side_icon/png/naming.png",
      webpIcon: "/side_icon/webp/naming.webp",
      path: "/naming",
    },
  ];

  return (
    <>
      <div className="navbar w-full flex items-center relative h-[100px]">
        <div className="navbar-start absolute left-4">
          <div className="dropdown relative">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle w-[30px] h-[30px]"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <ResponsiveImage
                webpSrc="/common/webp/the.webp"
                pngSrc="/common/png/the.png"
                alt="Bar"
              />
            </button>
            {isModalOpen && (
              <div
                className="absolute left-0 top-full mt-2 border-2 rounded-box z-50 w-[150px] sm:w-[200px] 
              p-2 shadow bg-white"
                onClick={() => setIsModalOpen(false)}
              >
                <ul className="space-y-2 w-full">
                  {menuItems.map((item) => (
                    <li key={item.label} className="w-full">
                      <Link
                        href={item.path}
                        className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg"
                      >
                        <div className="w-[20px] h-[20px] relative">
                          <ResponsiveImage
                            webpSrc={item.webpIcon}
                            pngSrc={item.pngIcon}
                            alt={item.label}
                          />
                        </div>
                        <span className="flex-1 text-left text-[18px]">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-center mx-auto">
          <h2 className="text-[15px] sm:text-[30px] font-bold">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default BaseNavBar;

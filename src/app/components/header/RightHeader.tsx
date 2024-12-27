"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LogoutModal } from "../modal";
import Image from "next/image";

const RightHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = true;

  const openLogoutModal = () => {
    setIsModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-center items-center">
      {auth ? (
        <>
          <div className="rounded-full w-[35px] h-[35px] sm:w-[46px] sm:h-[46px] mr-2">
            <Image
              alt="사용자 프로필 이미지"
              src="/header/webp/login-logo.webp"
              width={46}
              height={46}
              layout="responsive"
              objectFit="cover"
              className="w-full h-full cursor-pointer"
            />
          </div>
          <button onClick={openLogoutModal} className="header-btn">
            로그아웃
          </button>
        </>
      ) : (
        <Link href={"/login"} className="header-btn">
          로그인
        </Link>
      )}

      {isModalOpen && (
        <LogoutModal isOpen={isModalOpen} onClose={closeLogoutModal} />
      )}
    </div>
  );
};

export default RightHeader;

import React, { ReactNode } from "react";
import LeftSidebar from "../sidebar/(left)/LeftSidebar";
import RightSidebar from "../sidebar/(right)/RightSidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex w-full flex-col">
      {/* 1920px-1504px: 3단 레이아웃 (사이드바 2개 + 메인 콘텐츠) */}
      {/* 1504px-880px: 1단 레이아웃 (메인 콘텐츠만) */}
      {/* 880px-544px: 1단 레이아웃 (메인 콘텐츠) */}
      {/* 544px-375px: 모바일 레이아웃 */}
      <div className="mx-auto flex w-full max-w-[1920px] justify-between px-4 sm:gap-x-4 md:gap-x-8 lg:gap-x-16 xl:gap-x-24 2xl:gap-x-36">
        {/* 왼쪽 사이드바 */}
        <div className="w-[280px] shrink-0 sm:w-[300px] md:w-[324px]">
          <LeftSidebar />
        </div>

        {/* 메인 콘텐츠 */}
        <div className="w-full max-w-[808px] px-2 sm:px-4 md:px-6 lg:px-[45px] 2xl:max-w-[1224px]">
          {children}
        </div>

        {/* 오른쪽 사이드바 */}
        <div className="w-[280px] shrink-0 sm:w-[300px] md:w-[324px]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

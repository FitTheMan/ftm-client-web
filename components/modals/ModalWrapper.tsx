"use client";
import React, { useRef } from "react";
import { useModalStore } from "@/stores/ModalStore";

interface ModalWrapperProps {
  children: React.ReactNode;
  ContainerElement?: React.ElementType;
  isDimClick?: boolean;
  containerType?: "default" | "bottom" | "center";
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  ContainerElement = "div",
  isDimClick = true,
  containerType = "default",
}) => {
  const hideModal = useModalStore((state) => state.hideModal);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 배경 클릭 시 모달 닫기
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDimClick && e.target === wrapperRef.current) {
      hideModal();
    }
  };

  // 컨테이너 타입에 따른 클래스 설정
  const getContainerClass = () => {
    switch (containerType) {
      case "bottom":
        return "fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ease-in-out";
      case "center":
        return "bg-white rounded-xl shadow-lg max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out";
      default:
        return "bg-white rounded-xl shadow-lg max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out";
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
      onClick={handleBackdropClick}
    >
      <ContainerElement className={getContainerClass()}>
        {children}
      </ContainerElement>
    </div>
  );
};

export default ModalWrapper;

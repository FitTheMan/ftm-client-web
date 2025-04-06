"use client";
import React from "react";
import ModalWrapper from "./ModalWrapper";
import { ModalType } from "@/types/modal";
import { useModalStore } from "@/stores/ModalStore";

const ModalContainer = () => {
  const modals = useModalStore((state) => state.modalList);

  if (modals.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {modals.map((item: ModalType, index: number) => (
        <ModalWrapper
          key={index}
          ContainerElement={item.container}
          isDimClick={item.isDimClick}
          containerType={item.containerType}
        >
          {item.modal}
        </ModalWrapper>
      ))}
    </div>
  );
};

export default ModalContainer;

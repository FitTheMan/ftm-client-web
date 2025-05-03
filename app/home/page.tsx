"use client";
import { getUser } from "@/stores/AuthStore";
import { openSigninSelectModal } from "@/utils/modal/OpenSigninSelectModal";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const user = getUser();
    if (!user) {
      openSigninSelectModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>홈</div>
    </>
  );
};

export default Page;

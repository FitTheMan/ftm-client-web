"use client";

import { FiSearch } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { getUser } from "@/stores/AuthStore";
import { openSigninSelectModal } from "@/utils/modal/OpenSigninSelectModal";
import SectionHeader from "../components/header/SectionHeader";

export default function UserPick() {
  useEffect(() => {
    const user = getUser();
    if (!user) {
      openSigninSelectModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SectionHeader
        title="유저 Pick"
        rightContent={
          <div className="flex items-center space-x-4">
            <Button variant="icon">
              <FiSearch className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="secondary">Filter+</Button>
          </div>
        }
      />

      <div className="mt-8">
        <h3 className="text-lg font-medium">인기있는 글</h3>
        <p className="mt-1 text-sm text-gray-500">
          지금 사람들이 유저들을 위한 바이블
        </p>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionHeader from "@/app/(main)/components/header/SectionHeader";
import Button from "@/components/ui/Button";
import { EditInfoButton } from "../";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserInfo, useUpdateUserInfo } from "../../api";
import { HashTagInfo } from "../../types";
import { AGE_OPTIONS } from "../../constants";
import SelectBox from "@/components/ui/SeletBox";
import { openToast } from "@/utils/modal/OpenToast";

export default function MyPageEditPage() {
  const { data: userInfoData } = useSuspenseQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  const [selectedInterests, setSelectedInterests] = useState<HashTagInfo[]>(
    userInfoData.hashTagInfo
  );
  const router = useRouter();
  const { mutate: updateUserInfo } = useUpdateUserInfo();
  const { userNickname, ageInfo } = userInfoData;
  const [selectedAge, setSelectedAge] = useState<string>(ageInfo.description);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload = {
      nickname: formData.get("nickname") as string,
      ageInfo: {
        value: AGE_OPTIONS.find((option) => option.description === selectedAge)
          ?.value,
        description: selectedAge,
      },
      hashTagInfo: selectedInterests,
    };

    const requestData = new FormData();

    requestData.append(
      "data",
      new Blob([JSON.stringify(payload)], { type: "application/json" })
    );

    updateUserInfo(requestData, {
      onSuccess: () => {
        openToast("회원정보 수정 성공", "정상적으로 수정되었습니다.", 3000);
        router.back();
      },
      onError: () => {
        openToast(
          "회원정보 수정 실패",
          "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
          3000
        );
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <SectionHeader title="회원정보 수정" />
      <section>
        <div className="flex gap-5">
          <div className="size-20 rounded-full bg-gray-200">
            {/* <Image
                  src={imageUrl ?? ""}
                  alt="profile"
                  width={80}
                  height={80}
                /> */}
          </div>
          <h3 className="text-sm leading-6">
            프로필 사진 변경
            <p className="text-gray-500">
              10MB 이하 PNG, JPG, SVG를 올려주세요.
            </p>
            <Button className="mt-1 w-44 rounded-[10px]">사진 업로드</Button>
          </h3>
        </div>
      </section>

      <section className="text-sm">
        {/* main section */}
        <div className="grid grid-cols-2 gap-x-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">유저네임*</h3>
            <input
              type="text"
              placeholder={userNickname}
              name="nickname"
              className="w-full rounded-md border border-gray-200 bg-gray-100/50 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">연령대</h3>
            <SelectBox
              selectedOption={selectedAge}
              onSelect={setSelectedAge}
              placeholder="연령대를 선택해주세요"
              options={AGE_OPTIONS.map((option) => option.description)}
            />
          </div>
        </div>

        {/* sub section */}
        <div className="mt-6">
          <h3 className="font-semibold">나의 구르밍 관심</h3>
          <div className="mt-2 grid grid-cols-2 gap-x-12 gap-y-2">
            {selectedInterests?.map((tag) => (
              <EditInfoButton
                key={tag.value}
                hashTagInfo={tag}
                onSelect={setSelectedInterests}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center text-sm">
        <Button type="submit" className="w-44 rounded-[10px] font-bold">
          저장하기
        </Button>
      </section>
    </form>
  );
}

"use client";

import { useState } from "react";
import SectionHeader from "@/app/(main)/components/header/SectionHeader";
import Button from "@/components/ui/Button";
import { EditInfoBar, EditInfoButton } from "../";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserInfo, useUpdateUserInfo } from "../../api";
import { HashTagInfo } from "../../types";

export default function MyPageEditPage() {
  const { data: userInfoData } = useSuspenseQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  const [selectedInterests, setSelectedInterests] = useState<HashTagInfo[]>(
    userInfoData.hashTagInfo
  );
  const { mutate: updateUserInfo } = useUpdateUserInfo();
  const { userNickname, ageInfo } = userInfoData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload = {
      nickname: formData.get("nickname") as string,
      ageInfo: { value: "FIFIES", description: formData.get("age") as string },
      hashTagInfo: selectedInterests,
    };

    console.log(payload);
    const requestData = new FormData();

    requestData.append(
      "data",
      new Blob([JSON.stringify(payload)], { type: "application/json" })
    );

    updateUserInfo(requestData);
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
          <EditInfoBar
            title="유저네임*"
            placeholder={userNickname}
            name="nickname"
          />
          <EditInfoBar
            title="연령대"
            placeholder={ageInfo.description}
            name="age"
          />
        </div>

        {/* sub section */}
        <div className="mt-6">
          <h3>나의 구르밍 관심</h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
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
        <Button type="submit" className="w-44 rounded-[10px]">
          저장하기
        </Button>
      </section>
    </form>
  );
}

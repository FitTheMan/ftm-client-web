import Image from "next/image";
import React from "react";
import { formatImageUrl } from "../../user-pick/[postId]/utils";

interface TrendingItemProps {
  number: number;
  title: string;
  profileImage?: string;
  stats?: {
    year?: string;
    count?: string;
    views?: string;
  };
}

export default function TrendingItem({
  number,
  title,
  profileImage,
  stats,
}: TrendingItemProps) {
  console.log("profileImage", profileImage);
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-[#e1e1e7]">
          <span className="text-sm font-medium leading-none text-[#374254]">
            {number}
          </span>
        </div>
        <span className="ml-[22px] w-[148px] text-sm font-medium leading-none text-[#374254]">
          {title}
        </span>
      </div>
      <div className="h-6 w-6 overflow-hidden rounded-[20px] bg-[#e1e1e7]">
        {profileImage ? (
          <Image
            src={formatImageUrl(profileImage)}
            alt="프로필 이미지"
            className="h-full w-full object-cover"
            width={24}
            height={24}
          />
        ) : (
          <div className="h-full w-full bg-[#e1e1e7]"></div>
        )}
      </div>

      {stats && (
        <div className="mt-1 flex items-center justify-start px-7 text-sm text-secondary">
          {stats.year && (
            <>
              <span className="mr-2 h-4 w-4 rounded-full bg-gray-300"></span>
              <span className="mr-2">{stats.year}</span>
            </>
          )}
          {stats.count && (
            <>
              <span className="mr-2 h-4 w-4 rounded-full bg-gray-300"></span>
              <span className="mr-2">{stats.count}</span>
            </>
          )}
          {stats.views && (
            <>
              <span className="mr-2 h-4 w-4 rounded-full bg-gray-300"></span>
              <span className="">{stats.views}</span>
            </>
          )}
        </div>
      )}
    </li>
  );
}

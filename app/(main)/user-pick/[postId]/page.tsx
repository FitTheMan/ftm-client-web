import Image from "next/image";
import React from "react";

interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const { postId } = params;

  const postData = {
    id: postId,
    title: "남자 기초 화장품의 모든 것",
    author: "핏더맨",
    category: "새학기",
    date: "2025.02.16",
    tags: [
      "프래그런스",
      "향수",
      "헤어 스타일링",
      "베이 스파이시",
      "베이 스파이시2",
    ],
    likeCount: 0,
    scrapCount: 0,
    viewCount: 0,
  };

  const products = [
    {
      id: 1,
      img: "/user-pick-test/images/example.png", // 임시 이미지
      brand: "조말론",
      title: "English Pear & Freesia Limited Deco a Limited Casgne...",
      tags: ["프레그런스", "향수"],
    },
    {
      id: 2,
      img: "/user-pick-test/images/example.png", // 임시 이미지
      brand: "조말론",
      title: "English Pear & Freesia Limited Deco a Limited Casgne...",
      tags: ["프레그런스", "향수"],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl bg-white p-6">
      {/* 제목 */}
      <h1 className="mb-4 font-pretendard text-xl font-bold leading-tight tracking-normal text-primary sm:text-2xl">
        {postData.title}
      </h1>

      {/* 태그 섹션 */}
      <div className="mb-6 flex flex-wrap gap-1">
        {postData.tags.map((tag, index) => (
          <div
            key={index}
            className="relative flex flex-row items-center justify-center gap-3 rounded-md border border-solid border-[transparent] bg-[#e1e1e7] pb-1.5 pl-2 pr-2 pt-1.5"
          >
            <div className="relative text-left font-['Pretendard-Medium',_sans-serif] text-[10px] font-medium leading-none text-[#374254]">
              {tag}
            </div>
          </div>
        ))}
      </div>

      {/* 작성자 정보와 액션 버튼 */}
      <div className="mb-8 flex items-center justify-between">
        {/* 작성자 정보 */}
        <div className="flex items-center gap-3">
          {/* 프로필 이미지 */}
          <div className="relative h-9 w-9 rounded-[50%] bg-[#d9d9d9]"></div>

          {/* 작성자 정보 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">
                {postData.author}
              </span>
              <span className="text-sm text-secondary">
                {postData.category}
              </span>
            </div>
            <span className="text-sm text-secondary">{postData.date}</span>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex gap-2">
          {/* 좋아요 버튼 */}
          <button className="flex flex-col items-center rounded p-2 hover:bg-gray-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#374254]"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* 스크랩 버튼 */}
          <button className="flex flex-col items-center rounded p-2 hover:bg-gray-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#374254]"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* 공유 버튼 */}
          <button className="flex flex-col items-center rounded p-2 hover:bg-gray-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#374254]"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>

      {/* 구분선 */}
      <hr className="mb-8 border-t border-gray-200" />

      {/* 콘텐츠 영역 */}
      <div className="prose max-w-none">
        <div className="min-h-96 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-center text-gray-500"></p>
        </div>
      </div>

      {/* 게시글에서 추천한 상품 */}
      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">게시글에서 추천한 상품</h2>
        <hr className="mb-1 border-t border-gray-200" />
        <div className="flex flex-col divide-y">
          {[0, 1].map((row) => (
            <div key={row} className="flex flex-col py-4 md:flex-row">
              {products.map((product, i) => (
                <div
                  key={product.id + "-" + row}
                  className={`flex flex-1 items-center gap-4 ${i !== 0 ? "mt-3 border-t pt-3 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0" : ""} border-gray-200 px-2`}
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-md object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <span className="text-xs font-bold text-[#374254]">
                      {product.brand}
                    </span>
                    <div className="truncate text-sm">{product.title}</div>
                    <div className="mt-2 flex gap-1">
                      {product.tags.map((tag) => (
                        <div
                          key={tag}
                          className="relative flex flex-row items-center justify-center gap-3 rounded-md border border-solid border-[transparent] bg-[#e1e1e7] pb-1.5 pl-2 pr-2 pt-1.5"
                        >
                          <div className="relative text-left font-['Pretendard-Medium',_sans-serif] text-[10px] font-medium leading-none text-[#374254]">
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr className="mt-1 border-t border-gray-200" />
      </section>
    </div>
  );
};

export default PostDetailPage;

import SectionHeader from "../components/SectionHeader";
import Card from "./components/Card";

const Page = () => {
  return (
    <>
      <SectionHeader
        title="그루밍 지수 분석"
        description="검사 결과는 최대 5개까지 등록됩니다."
      ></SectionHeader>
      <div className="flex w-full flex-wrap justify-between gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Page;

// 그루밍 카드 만들었으니 api 로그인 아이디에 저장 후 존재하는 데이터 연결까지 해야함.

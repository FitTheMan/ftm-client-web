import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const DefaultLandingAction = () => {
  return (
    <section className="flex flex-col gap-4 pr-32 max-xl:pr-0">
      <Link
        href={ROUTES.GROOMING_CHECK}
        className="h-24 w-full content-center self-center rounded-3xl bg-blue-500 px-4 py-2 text-center text-2xl text-white max-md:text-lg"
      >
        그루밍지수 재검사 하러가기
      </Link>
      <Link
        href={ROUTES.ROOT}
        className="h-24 w-full content-center self-center rounded-3xl bg-gray-300 px-4 py-2 text-center text-2xl text-gray-400 max-md:text-lg"
      >
        로그인 없이 둘러보기
      </Link>
    </section>
  );
};

export default DefaultLandingAction;

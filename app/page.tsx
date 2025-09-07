import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const ActionButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex h-[72px] w-[303px] content-center items-center justify-center rounded-[18px] bg-blue-500 text-xl font-semibold text-white md:w-[330px]"
    >
      {children}
    </Link>
  );
};

const Page = () => {
  return (
    <section className="flex h-[calc(100vh-64px)] flex-col items-center justify-center bg-[url('/home/images/landing.png')] bg-cover bg-center md:px-9">
      <h1 className="w-full text-center text-[64px] font-bold text-blue-500 md:text-8xl lg:text-[120px] xl:text-[150px]">
        Discover Your New Appearance
      </h1>
      <section className="mt-28 flex w-full flex-col items-center justify-center gap-7 md:flex-row">
        <ActionButton href={ROUTES.GROOMING}>
          그루밍 지수 검사하러 가기
        </ActionButton>
        <ActionButton href={ROUTES.SIGNIN}>핏더맨 로그인하러 가기</ActionButton>
      </section>
    </section>
  );
};

export default Page;

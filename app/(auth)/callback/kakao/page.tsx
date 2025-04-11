"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { kakaoLogin } from "@/app/(auth)/signin/api";
import { ROUTES } from "@/constants/routes";
import { setUser } from "@/stores/AuthStore";
import { useMutation } from "@tanstack/react-query";

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutateAsync } = useMutation({
    mutationFn: kakaoLogin,
  });

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      router.push(ROUTES.HOME);
      return;
    }

    const processKakaoLogin = async () => {
      try {
        const response = await mutateAsync(code);

        if (response.status === 202) {
          router.push(`${ROUTES.SIGNUP}?social=true`);
          return;
        }

        if (response.status === 200) {
          setUser(response.data.data);
          router.push(ROUTES.HOME);
          return;
        }

        router.push(ROUTES.SIGNIN);
      } catch (error) {
        console.error("Kakao login error:", error);
        router.push(ROUTES.SIGNIN);
      }
    };

    processKakaoLogin();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-lg font-medium text-gray-600">
          카카오 로그인 처리중...
        </p>
      </div>
    </div>
  );
}

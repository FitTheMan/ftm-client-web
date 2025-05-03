import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/AuthStore";
import { checkSessionValidity } from "@/app/(auth)/signin/api";
import { openAlert } from "@/utils/modal/OpenAlert";
import { useSignOut } from "@/app/(auth)/signin/hooks/useSignOut";

export const useSessionValidityCheck = () => {
  const router = useRouter();
  const { user, clearUser } = useAuthStore((state) => state);
  const { mutate: logout } = useSignOut();

  const { data: isValid } = useQuery<boolean>({
    queryKey: ["sessionValidity"],
    queryFn: checkSessionValidity,
    enabled: !!user?.id,
    refetchOnWindowFocus: true,
  });
  // TODO: 실제 세션 만료시 테스트 필요
  useEffect(() => {
    if (user && isValid === false) {
      openAlert("로그인이 만료되었습니다. 다시 로그인해주세요.", () =>
        logout()
      );
    }
  }, [user, isValid, router, clearUser]);
};

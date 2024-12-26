import { useRecoilState } from "recoil";
import { isAuthenticatedState } from "@/atoms/authState";

/**
 * 사용자 인증 상태를 관리하는 커스텀 훅
 */
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

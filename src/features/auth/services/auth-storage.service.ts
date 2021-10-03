import { AuthStatus } from "@/core/consts/auth-status.enum";
import { User } from "@/core/models/user.model";

const AUTHORISATION = "AUTHORISATION";
const AUTH_USER = "AUTH_USER";

class AuthStorageService {
  setAuth(status: AuthStatus) {
    localStorage.setItem(AUTHORISATION, status);
  }
  getAuth(): string | null {
    return localStorage.getItem(AUTHORISATION);
  }
  getUserInfo(): User {
    const data = localStorage.getItem(AUTH_USER);
    return JSON.parse(data ? data : "");
  }
  setUserInfo(user: User): void {
    localStorage.setItem(AUTH_USER, JSON.stringify(user));
  }
  removeAuth() {
    localStorage.removeItem(AUTHORISATION);
  }
}

export const authStorageService = new AuthStorageService();

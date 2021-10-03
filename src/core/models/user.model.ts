import { UserStatus } from "@/core/consts/user-status.enum";

export interface User {
  uid?: string | null;
  name?: string | null;
  displayName?: string | null;
  emailVerified?: boolean;
  photoURL?: string;
  email: string;
  password: string | null;
  status?: UserStatus;
  refreshToken?: string;
}

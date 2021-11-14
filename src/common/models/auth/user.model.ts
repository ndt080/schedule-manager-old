import { UserStatus } from "@/common/consts";
import { Tokens } from "@/common/models";

export interface User {
  uid?: string | null;
  name?: string | null;
  displayName?: string | null;
  emailVerified?: boolean;
  photoURL?: string;
  email: string;
  password: string | null;
  status?: UserStatus;
  tokens?: Tokens;
}

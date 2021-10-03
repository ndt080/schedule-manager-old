import Vue from "vue";
import { app } from "@/main";

class NotificationService extends Vue {
  success(message: string): void {
    app.$toast.success(message);
  }

  warning(message: string): void {
    app.$toast.warning(message);
  }

  error(message: string): void {
    app.$toast.error(message);
  }

  info(message: string): void {
    app.$toast.info(message);
  }
}

export const notificationService = new NotificationService();

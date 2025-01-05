export enum NotificationTimeEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  HALF_MONTHLY = "HALF_MONTHLY",
  THIRTY_MONTHLY = "THIRTY_MONTHLY",
  OTHER = "OTHER",
}

export const labelNotificationTimeEnum = {
  [NotificationTimeEnum.DAILY]: "Diariamente",
  [NotificationTimeEnum.WEEKLY]: "Semanalmente",
  [NotificationTimeEnum.MONTHLY]: "Mensalmente",
  [NotificationTimeEnum.HALF_MONTHLY]: "Quinzenalmente",
  [NotificationTimeEnum.THIRTY_MONTHLY]: "Trimestralmente",
  [NotificationTimeEnum.OTHER]: "Outro",
};

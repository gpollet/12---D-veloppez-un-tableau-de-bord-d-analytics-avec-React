import { UserSessionsType } from "../types.js";

export class UserSessions {
  constructor(data: UserSessionsType) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
import { UserActivityType } from "../types.js";

export class UserActivity {
	constructor(data: UserActivityType) {
		this.userId = data.userId;
		this.sessions = data.sessions;
	}

	get userId():this {
		return this.userId;
	}
  get activitySessions() {
    return this.sessions;
  }
}

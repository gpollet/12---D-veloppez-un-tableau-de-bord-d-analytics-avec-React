import { dataset } from "../api/data.js";
import {
	UserActivityType,
	UserDataType,
	UserPerformanceType,
	UserSessionsType,
	UserType,
} from "../types.js";

export class User implements UserType {
	userId: number;
	userMainData: UserDataType;
	userActivity: UserActivityType;
	userPerformance: UserPerformanceType;
	userSessions: UserSessionsType;
	constructor(userId: number) {
		this.userId = userId;
		this.userMainData = dataset.data.find(set => set.id === userId);
		this.userActivity = dataset.activity.find(set => set.userId === userId);
		this.userPerformance = dataset.performance.find(set => set.userId === userId);
		this.userSessions = dataset.sessions.find(set => set.userId === userId);
	}

	getUserId() {
		return this.userId;
	}

  
	getUserData() {
    return this.userMainData;
	}
  
  getFirstName() {
    return this.userMainData.userInfos.firstName
  }

	getUserActivity() {
		return this.userActivity;
	}
	getUserPerformance() {
		return this.userPerformance;
	}
	getUserSessions() {
		return this.userSessions;
	}
}

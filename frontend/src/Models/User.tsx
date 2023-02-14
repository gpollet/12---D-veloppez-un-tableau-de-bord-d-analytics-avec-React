import * as api from "../api/data.js";
import { KeyData, UserType } from "../types.js";

export class User implements UserType {
	mainData: UserType["mainData"];
	activity: UserType["activity"];
	performance: UserType["performance"];
	sessions: UserType["sessions"];
	constructor(userId: number) {
		this.mainData = api.USER_MAIN_DATA.find(set => set.id === userId);
		this.activity = api.USER_ACTIVITY.find(set => set.userId === userId);
		this.performance = api.USER_PERFORMANCE.find(set => set.userId === userId);
		this.sessions = api.USER_AVERAGE_SESSIONS.find(set => set.userId === userId);
	}
	
	checkIfUserExist() {
		// Makes sure data exist for said userId, to avoid potential errors
		if (!this.mainData || !this.activity || !this.performance || !this.sessions) {
			return false;
		} else {
			return true;
		}
	}
	
	getScore() {
		// Covers both possible names for that parameter
		if (this.mainData?.score) {
			return this.mainData.score;
		} else if (this.mainData?.todayScore) {
			return this.mainData.todayScore;
		}
	}
	
	getKeyData() {
		return this.mainData?.keyData as KeyData;
	}

	getInfos() {
		return this.mainData?.userInfos;
	}

	getActivity() {
		return this.activity?.sessions;
	}

	getPerformance() {
		return this.performance?.data;
	}

	getPerformanceKind(kind: number) {
		switch (kind) {
			case 1:
				return "cardio";
			case 2:
				return "energy";
			case 3:
				return "endurance";
			case 4:
				return "strength";
			case 5:
				return "speed";
			case 6:
				return "intensity";
		}
	}

	getSessions() {
		return this.sessions?.sessions;
	}
}

import * as api from "../api/data.js";
import { formatedScore, KeyData, UserType } from "../types.js";

export class User implements UserType {
	mainData: UserType["mainData"];
	activity: UserType["activity"];
	performance: UserType["performance"];
	sessions: UserType["sessions"];
	constructor(userId: number) {
		this.mainData = api.USER_MAIN_DATA.find(set => set.id === userId) as UserType["mainData"];
		this.activity = api.USER_ACTIVITY.find(set => set.userId === userId) as UserType["activity"];
		this.performance = api.USER_PERFORMANCE.find(set => set.userId === userId) as UserType["performance"];
		this.sessions = api.USER_AVERAGE_SESSIONS.find(set => set.userId === userId) as UserType["sessions"];
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
		let result
		if (this.mainData.score) {
			result = [{score: this.mainData.score}];
		} else if (this.mainData.todayScore) {
			result = [{score: this.mainData.todayScore}];
		}
		return result as formatedScore[]
	}

	getKeyData() {
		return this.mainData.keyData as KeyData;
	}

	getInfos() {
		return this.mainData.userInfos;
	}

	getActivity() {
		return this.activity.sessions;
	}

	getPerformance() {
		return this.performance.data;
	}

	getPerformanceKind() {
		return this.performance.kind;
	}

	getSessions() {
		const sessions = this.sessions.sessions
			sessions.map((session) => {
				if (session.day === 1) session.day = "L"
				if (session.day === 2) session.day = "M"
				if (session.day === 3) session.day = "M"
				if (session.day === 4) session.day = "J"
				if (session.day === 5) session.day = "V"
				if (session.day === 6) session.day = "S"
				if (session.day === 7) session.day = "D"
			})
		return sessions;
	}
}

import * as api from "../api/data.js";
import { formatedScore, KeyData, UserType } from "../types.js";

export class User implements UserType {
	userId: number;
	mainData: UserType["mainData"];
	activity: UserType["activity"];
	performance: UserType["performance"];
	sessions: UserType["sessions"];
	//constructor(userId: number) {
	//	this.mainData = api.USER_MAIN_DATA.find(set => set.id === userId) as UserType["mainData"];
	//	this.activity = api.USER_ACTIVITY.find(set => set.userId === userId) as UserType["activity"];
	//	this.performance = api.USER_PERFORMANCE.find(
	//		set => set.userId === userId
	//	) as UserType["performance"];
	//	this.sessions = api.USER_AVERAGE_SESSIONS.find(
	//		set => set.userId === userId
	//	) as UserType["sessions"];
	//}

	constructor(
		userId: number,
		userData: {
			mainData: UserType["mainData"];
			activity: UserType["activity"];
			performance: UserType["performance"];
			sessions: UserType["sessions"];
		}
	) {
		this.userId = userId;
		this.mainData = userData.mainData as UserType["mainData"];
		this.activity = userData.activity as UserType["activity"];
		this.performance = userData.performance as UserType["performance"];
		this.sessions = userData.sessions as UserType["sessions"];
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
		let result;
		if (this.mainData.score) {
			result = [{ score: this.mainData.score }];
		} else if (this.mainData.todayScore) {
			result = [{ score: this.mainData.todayScore }];
		}
		return result as formatedScore[];
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
		/**
		 * Converts the performance kinds from sessions (type: number) to its text equivalent and translates it to the desired displayed text
		 */
		this.performance.data.map(entry => {
			switch (entry.kind) {
				case 1:
					entry.kind = "Cardio";
					break;
				case 2:
					entry.kind = "Énergie";
					break;
				case 3:
					entry.kind = "Endurance";
					break;
				case 4:
					entry.kind = "Force";
					break;
				case 5:
					entry.kind = "Vitesse";
					break;
				case 6:
					entry.kind = "Intensité";
					break;
			}
		});
		// Converts this.performance.data to an array so its order can be reversed, so that it matches the desired display on the chart (intensity at the top, endurance at the bottom)
		return this.performance.data.flat().reverse();
	}

	getSessions() {
		// Converts days from numbers to their corresponding name
		this.sessions.sessions.map(session => {
			switch (session.day) {
				case 1:
					session.day = "L";
					break;
				case 2:
					session.day = "M";
					break;
				case 3:
					session.day = "M";
					break;
				case 4:
					session.day = "J";
					break;
				case 5:
					session.day = "V";
					break;
				case 6:
					session.day = "S";
					break;
				case 7:
					session.day = "D";
					break;
			}
		});
		return this.sessions.sessions;
	}
}

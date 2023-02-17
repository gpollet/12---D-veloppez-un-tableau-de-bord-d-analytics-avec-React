interface UserId {
	userId: number;
}

interface UserInfos {
	firstName: string;
	lastName: string;
	age: number;
}

export interface KeyData {
	calorieCount: number;
	proteinCount: number;
	carbohydrateCount: number;
	lipidCount: number;
}

interface UserDataTypeBase {
	id: number;
	userInfos: UserInfos;
	keyData: KeyData;
}

/**
 * Makes sure at least "score" property OR "todayScore" property is present
 */

export interface UserScore extends UserDataTypeBase {
	score: number;
	todayScore?: never;
}

interface UserTodayScore extends UserDataTypeBase {
	todayScore: number;
	score?: never;
}

export interface formatedScore {
	// [key: number] allows use of score[index]
	score: number;
}

export type UserDataType = UserTodayScore | UserScore;

export interface UserActivityType extends UserId {
	sessions: Array<{
		day: string;
		kilogram: number;
		calories: number;
	}>;
}

export interface UserSessionsType extends UserId {
	sessions: Array<{
		day: number | string;
		sessionLength: number;
	}>;
}

export interface UserPerformanceType extends UserId {
	kind: {
		[key: number]: string;
	};
	data: Array<{
		value: number;
		kind: number | string;
	}>;
}

export interface UserType extends UserId {
	mainData: UserDataType;
	activity: UserActivityType;
	performance: UserPerformanceType;
	sessions: UserSessionsType;
}

export type ApiEndpoints = "performance" | "average-sessions" | "activity"
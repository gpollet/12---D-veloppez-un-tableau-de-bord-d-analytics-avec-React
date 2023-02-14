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

export interface UserDataType {
	id: number;
	userInfos: UserInfos;
	todayScore?: number;
	score?: number;
	keyData: KeyData;
}

export interface UserActivityType extends UserId {
	sessions: Array<{
		day: string;
		kilogram: number;
		calories: number;
	}>;
}

export interface UserSessionsType extends UserId {
	sessions: Array<{
		day: number;
		sessionLength: number;
	}>;
}

export interface UserPerformanceType extends UserId {
	kind: {
		[key: number]: string;
	};
	data: Array<{
		value: number;
		kind: number;
	}>;
}

export interface UserType {
	/**
	 * properties below are obtained using .find() in "Models/User.tsx", which can return type undefined, hence the "|".
	 */
	mainData: UserDataType | undefined;
	activity: UserActivityType | undefined;
	performance: UserPerformanceType | undefined;
	sessions: UserSessionsType | undefined;
}

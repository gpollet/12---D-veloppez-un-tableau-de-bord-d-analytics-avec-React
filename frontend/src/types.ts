interface UserId {
	userId: number;
}

export interface UserDataType {
	id: number;
	userInfos: Array<{
		firstName: string;
		lastName: string;
		age: number;
	}>;
	todayScore: number;
	keyData: Array<{
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	}>;
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
  }>
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
interface UserId {
	userId: number;
}

export interface UserData {
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

export interface UserActivity extends UserId {
	sessions: Array<{
		day: string;
    kilogram: number;
		calories: number;
	}>;
}

export interface UserSessions extends UserId {
  sessions: Array<{
    day: number;
    sessionLength: number;
  }>
}

export interface UserPerformance extends UserId {
  kind: {
    [key: number]: string;
  };
  data: Array<{
    value: number;
    kind: number;
  }>;
}
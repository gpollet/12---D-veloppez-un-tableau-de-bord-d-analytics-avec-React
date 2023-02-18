import axios from "axios";
import { ApiEndpoints, UserType } from "../types.js";

// Generic model of request
/**
 *
 * @param { number } userId
 * @returns { Promise }
 */
const requestModel = async (userId: number, endpoint: ApiEndpoints) => {
	let response;
	try {
		await axios
			.get(
				endpoint === "main-data"
					? `http://localhost:3000/user/${userId}`
					: `http://localhost:3000/user/${userId}/${endpoint}`
			)
			.then(res => {
				response = res.data.data;
			});
		return response;
	} catch (error) {
		return;
	}
};

/**
 * Fetches all data for a specific userId
 */
export const getAllUserData = async (userId: number) => {
	return {
		userId: userId,
		mainData: (await requestModel(userId, "main-data")) as unknown as UserType["mainData"],
		performance: (await requestModel(userId, "performance")) as unknown as UserType["performance"],
		sessions: (await requestModel(userId, "average-sessions")) as unknown as UserType["sessions"],
		activity: (await requestModel(userId, "activity")) as unknown as UserType["activity"],
	};
};

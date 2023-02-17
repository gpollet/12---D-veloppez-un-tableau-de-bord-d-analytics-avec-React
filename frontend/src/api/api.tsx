import axios from "axios";
import { ApiEndpoints } from "../types.js";

const requestModel = async (userId: number, endpoint?: ApiEndpoints) => {
	let response;
	await axios
		.get(
			!endpoint
				? `http://localhost:3000/user/${userId}`
				: `http://localhost:3000/user/${userId}/${endpoint}`
		)
		.then(res => {
      response = res.data.data;
		})
		.catch(err => {
			console.log(err);
		});
	return response;
};

// Fetches USER_MAIN_DATA, then returns the result
export const getUserGeneralData = (userId: number) => {
	return requestModel(userId);
};

// Fetches either USER_ACTIVITY, USER_AVERAGE_SESSIONS or USER_PERFORMANCE depending on the endpoint requested, passed as a variable here
export const getUserSpecificData = (userId: number, endpoint: ApiEndpoints) => {
	return requestModel(userId, endpoint);
};

import { UserDataType } from "../types.js";

export class UserData {
  constructor(data: UserDataType) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.keyData = data.keyData;
  }
}
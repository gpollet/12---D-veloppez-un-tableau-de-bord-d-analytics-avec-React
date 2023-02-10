import { UserPerformanceType } from "../types.js";

export class UserPerformance {
  constructor(data: UserPerformanceType) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}
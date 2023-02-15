import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis } from "recharts";
import { UserSessionsType } from "../types.js";



const SessionsAvg = ({sessions}: {sessions: UserSessionsType["sessions"]}) => {
  
  return (
    <>
      <LineChart
      width={258}
      height={263}
      data={sessions}
      >
        <CartesianGrid />
        <XAxis
        dataKey={"day"}
        />
        <Line
        dataKey="sessionLength"
        unit="mn"
        type={"basis"}
        />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default SessionsAvg;
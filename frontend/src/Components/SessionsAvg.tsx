import { Line, LineChart, Tooltip, XAxis } from "recharts";
import { UserSessionsType } from "../types.js";



const SessionsAvg = ({sessions}: {sessions: UserSessionsType["sessions"]}) => {
  return (
    <>
      <LineChart
      width={258}
      height={263}
      data={sessions}
      >
        
        <XAxis
        dataKey={"day"}
        axisLine={false}
        />
        <Line
        dataKey="sessionLength"
        unit="mn"
        type={"monotone"}
        dot={false}
        activeDot={true}
        strokeWidth={2}
        />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default SessionsAvg;
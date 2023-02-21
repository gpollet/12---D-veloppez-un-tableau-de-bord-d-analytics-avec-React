import { Line, LineChart, Tooltip, XAxis } from "recharts";
import { UserSessionsType } from "../types.js";

const SessionsAvg = ({ sessions }: { sessions: UserSessionsType["sessions"] }):JSX.Element => {
	return (
		<>
			<LineChart
				width={258}
				height={263}
				data={sessions}
				title="Session Average"
				className="chart_session-average"
			>
				<XAxis
					dataKey={"day"}
					axisLine={false}
				/>
				<Line
					dataKey="sessionLength"
					unit=" min"
					type={"monotone"}
					dot={false}
					activeDot={true}
					strokeWidth={2}
					stroke="white"
				/>
				<Tooltip
					labelFormatter={() => ""}
					formatter={(sessions): string | number => [sessions]}
				/>
			</LineChart>
		</>
	);
};

export default SessionsAvg;

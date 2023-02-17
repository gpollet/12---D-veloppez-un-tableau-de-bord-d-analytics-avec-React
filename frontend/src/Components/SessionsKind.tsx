import { CartesianGrid, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts";
import { UserPerformanceType } from "../types.js";

const SessionsKind = ({ sessions }: { sessions: UserPerformanceType["data"] }) => {
	return (
		<>
			<RadarChart
				width={258}
				height={263}
				data={sessions}
				className="chart_session-kind"
			>
				<Radar
					dataKey="value"
					fill="#FF0101B2"
				/>
				;
				<CartesianGrid />
				<PolarGrid />
				<PolarAngleAxis
					dataKey={"kind"}
					//tickLine={false}
				/>
			</RadarChart>
		</>
	);
};

export default SessionsKind;

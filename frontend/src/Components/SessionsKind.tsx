import {
	CartesianGrid,
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import { UserPerformanceType } from "../types.js";

const SessionsKind = ({ sessions, height, width }: { sessions: UserPerformanceType["data"], height?: number, width?: number  }):JSX.Element => {
	return (
		<>
			<RadarChart
				data={sessions}
				height={height}
				width={width}
				className="chart_session-kind"
			>
				<Radar
					dataKey="value"
					fill="#FF0101B2"
				/>
				;
				<PolarGrid />
				<PolarAngleAxis dataKey={"kind"} />
			</RadarChart>
		</>
	);
};

export default SessionsKind;

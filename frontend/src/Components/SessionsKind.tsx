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

const SessionsKind = ({ sessions }: { sessions: UserPerformanceType["data"] }) => {
	return (
		<>
			<ResponsiveContainer
				width="30%"
				height={263}
			>
				<RadarChart
					data={sessions}
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
			</ResponsiveContainer>
		</>
	);
};

export default SessionsKind;

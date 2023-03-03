import { Label, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { UserPerformanceType } from "../types.js";

const SessionsKind = ({
	sessions,
	height,
	width,
}: {
	sessions: UserPerformanceType["data"];
	height?: number;
	width?: number;
}): JSX.Element => {
	const chartInnerMargin = 5;
	return (
		<>
			<RadarChart
				data={sessions}
				height={height}
				width={width}
				innerRadius="12%"
				className="chart_session-kind"
			>
				<PolarAngleAxis dataKey={"kind"} tick={{ fill: "white" }} textAnchor="middle" />
				<PolarGrid radialLines={false} />
				<Radar dataKey="value" fill="#FF0101B2"></Radar>
			</RadarChart>
		</>
	);
};

export default SessionsKind;

import { Line, LineChart, Tooltip, XAxis, TooltipProps } from "recharts";
import { UserSessionsType } from "../types.js";

const SessionsAvg = ({ sessions }: { sessions: UserSessionsType["sessions"] }):JSX.Element => {
	const TooltipContent = ({ active, payload }: TooltipProps<number, string>
		):JSX.Element => {
			if (active && payload && payload.length) {
				return (
					<div className="session-avg_custom-tooltip">
						{<p>{payload[0].value}{payload[0].unit}</p>}
					</div>
				);
			}
			// Else scenario required by Typescript
			else {
				return (
					<div className="activity-graph_custom-tooltip">
						<p>Erreur</p>
					</div>
				)
			}
		};
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
				content={<TooltipContent />}
				/>
			</LineChart>
		</>
	);
};

export default SessionsAvg;

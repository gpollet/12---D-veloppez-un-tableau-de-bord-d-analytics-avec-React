import { Line, LineChart, Tooltip, XAxis, TooltipProps, ResponsiveContainer } from "recharts";
import { UserSessionsType } from "../types.js";

const SessionsAvg = ({ sessions }: { sessions: UserSessionsType["sessions"] }): JSX.Element => {
	const xAxisPadding: number = 15;
	const TooltipContent = ({ active, payload }: TooltipProps<number, string>): JSX.Element => {
		if (active && payload && payload.length) {
			return (
				<div className="chart_session-average_custom-tooltip">
					{
						<p>
							{payload[0].value}
							{payload[0].unit}
						</p>
					}
				</div>
			);
		}
		// Else scenario required by Typescript
		else {
			return (
				<div className="chart_session-average_custom-tooltip">
					<p>Erreur</p>
				</div>
			);
		}
	};
	return (
		<>
			<ResponsiveContainer
				width="30%"
				height={263}
			>
				<LineChart
					data={sessions}
					className="chart_session-average"
				>
					<XAxis
						dataKey={"day"}
						axisLine={false}
						tickLine={false}
						tick={{ fill: "white", opacity: 0.5 }}
						padding={{ left: xAxisPadding, right: xAxisPadding }}
					/>
					<Line
						dataKey="sessionLength"
						unit=" min"
						type={"monotone"}
						dot={false}
						//activeDot={true}
						activeDot={{ stroke: "white", opacity: 1, strokeWidth: 5, r: 5 }}
						strokeWidth={2}
						stroke="white"
					/>
					<Tooltip
						content={<TooltipContent />}
						wrapperStyle={{ outline: "none" }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};

export default SessionsAvg;

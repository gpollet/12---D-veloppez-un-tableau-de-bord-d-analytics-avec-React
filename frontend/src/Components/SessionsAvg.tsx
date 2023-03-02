import { Line, LineChart, Tooltip, XAxis, TooltipProps, ResponsiveContainer } from "recharts";
import { UserSessionsType } from "../types.js";

const SessionsAvg = ({
	sessions,
	height,
	width,
}: {
	sessions: UserSessionsType["sessions"];
	height?: number;
	width?: number;
}): JSX.Element => {
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
			<LineChart
				data={sessions}
				className="chart_session-average"
				height={height}
				width={width}
				margin={{ top: 60, bottom: 5 }}>
				<XAxis
					dataKey={"day"}
					axisLine={false}
					tickLine={false}
					tick={{ fill: "white", opacity: 0.5 }}
					padding={{ left: xAxisPadding, right: xAxisPadding }}
				/>
				<defs>
					<linearGradient id="chart_session-average-gradient">
						<stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
						<stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
					</linearGradient>
				</defs>
				<Line
					dataKey="sessionLength"
					unit=" min"
					type={"monotone"}
					dot={false}
					//activeDot={true}
					activeDot={{ stroke: "white", opacity: 1, strokeWidth: 5, r: 5 }}
					strokeWidth={2}
					stroke="url(#chart_session-average-gradient)"
				/>

				<Tooltip
					content={<TooltipContent />}
					wrapperStyle={{ outline: "none" }}
					//cursor={{ fill: "#FFFFFF", width: "100%",  }}
					//cursor={false}
				/>
				<text x="1.5em" y="2em" className="chart_session-average-title">
					Durée moyenne des
				</text>
				<text x="1.5em" y="3em" className="chart_session-average-title">
					sessions
				</text>
			</LineChart>
		</>
	);
};

export default SessionsAvg;

import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	TooltipProps,
	XAxis,
	YAxis,
} from "recharts";
import { UserActivityType } from "../types.js";

const ActivityGraph = ({ sessions }: { sessions: UserActivityType["sessions"] }): JSX.Element => {
	// Retrieves the number of the day corresponding to each session
	const getSessionDay = () => sessions.map((session) => new Date(session.day).getDate());
	/**
	 * If tooltip is active, display a custom div containing the values corresponding to that session
	 * TooltipProps<value, name("Poids (kg" | "Calories brûlées (kCal)")>
	 */
	const TooltipContent = ({ active, payload }: TooltipProps<number, string>): JSX.Element => {
		if (active && payload && payload.length) {
			return (
				<div className="activity-graph_custom-tooltip">
					<p>
						{payload[0].value}
						{payload[0].unit}
					</p>
					<p>
						{payload[1].value}
						{payload[1].unit}
					</p>
				</div>
			);
		}
		// Else scenario required by Typescript
		else {
			return (
				<div className="activity-graph_custom-tooltip">
					<p>Erreur</p>
				</div>
			);
		}
	};
	const containerHeight = 320;
	const legendHeight = 40;
	const chartContainerInnerMargin = 30;
	return (
		<>
			<ResponsiveContainer width="100%" height={containerHeight}>
				<BarChart
					data={sessions}
					barSize={8}
					margin={{
						top: 30,
						right: chartContainerInnerMargin,
						bottom: 15,
						left: chartContainerInnerMargin,
					}}>
					<text
						textAnchor="start"
						y={legendHeight}
						x={chartContainerInnerMargin}
						className="charts-title">
						Activité Quotidienne
					</text>
					<XAxis dataKey={getSessionDay} tickLine={false} color="#9B9EAC" />
					<YAxis
						tickLine={false}
						orientation="right"
						dataKey="kilogram"
						axisLine={false}
						domain={["dataMin-1", "dataMax+1"]}
						allowDecimals={false}
						color="#9B9EAC"
					/>
					<YAxis yAxisId="caloriesYAxis" dataKey="calories" allowDataOverflow={true} hide={true} />
					<Tooltip
						position={{ y: legendHeight }}
						content={<TooltipContent />}
						wrapperStyle={{ outline: "none" }}
						cursor={{ opacity: "0.5" }}
					/>
					<CartesianGrid strokeDasharray="0 3 0 " vertical={false} horizontal={true} />

					<Legend
						wrapperStyle={{ top: 25 }}
						height={legendHeight}
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize={8}
					/>
					<Bar
						radius={[3.5, 3.5, 0, 0]}
						name="Poids (kg)"
						dataKey="kilogram"
						legendType="none"
						unit="kg"
					/>
					<Bar
						radius={[3.5, 3.5, 0, 0]}
						name="Calories brûlées (kCal)"
						legendType="none"
						dataKey="calories"
						yAxisId="caloriesYAxis"
						fill="#E60000"
						unit="kCal"
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);
};

export default ActivityGraph;

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent.js";
import { UserActivityType } from "../types.js";

const ActivityGraph = ({ sessions }: { sessions: UserActivityType["sessions"] }) => {
	// Retrieves the number of the day corresponding to each session
	const getSessionDay = () => sessions.map(session => new Date(session.day).getDate());
	// If tooltip is active, display a custom div containing the values corresponding to that session
	const TooltipContent = ({ active, payload }: { active: boolean; payload: Payload }):JSX.Element => {
		if (active && payload && Object.values(payload).length) {
			return (
				<div className="activity-graph_custom-tooltip">
					<p>{Object.values(payload)[0].value + Object.values(payload)[0].unit}</p>
					<p>{Object.values(payload)[1].value + Object.values(payload)[1].unit}</p>
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
	const calcWeightAxisTicks = () => {
		let weights:number[] = [];
		sessions.map(session => {
			weights.push(session.kilogram);
		});
		const minMaxValues = {
			min: Math.min(...weights) - 1,
			middle: Math.min(...weights) + (Math.max(...weights) - Math.min(...weights)) / 2,
			max: Math.max(...weights) + 1,
		};
		return minMaxValues;
	};
	const containerHeight = 320;
	const legendHeight = 30;
	return (
		<>
			<BarChart
				width={835}
				height={containerHeight}
				margin={{ top: 20 }}
				data={sessions}
				barSize={8}
				title={"Activité quotidienne"}
			>
				<text
					// y = 1em : margin from <p> element in .dashboard_top-message
					y="1em"
					className="activity-graph_title"
				>
					Activité Quotidienne
				</text>
				<XAxis
					dataKey={getSessionDay}
					tickLine={false}
					padding={{ left: 0, right: 0 }}
				/>
				<YAxis
					tickLine={false}
					orientation="right"
					dataKey="kilogram"
					axisLine={false}
					domain={["dataMin-1", "dataMax+1"]}
					allowDecimals={false}
				/>
				<YAxis
					yAxisId="caloriesYAxis"
					dataKey="calories"
					allowDataOverflow={true}
					hide={true}
				/>
				<CartesianGrid
					strokeDasharray="0 3 0 "
					horizontalPoints={[containerHeight / 2, containerHeight * 0.1]}
					vertical={false}
					horizontal={true}
				/>
				<Tooltip
					position={{ y: 30 }}
					content={<TooltipContent active={false} payload={undefined} />}
					wrapperStyle={{ outline: "none" }}
				/>
				<Legend
					wrapperStyle={{ top: 0 }}
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
		</>
	);
};

export default ActivityGraph;

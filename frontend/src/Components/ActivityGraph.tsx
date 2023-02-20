import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts";
import { UserActivityType } from "../types.js";

const ActivityGraph = ({ sessions }: { sessions: UserActivityType["sessions"] }) => {
	const getSessionNumber = () => sessions.map(session => sessions.indexOf(session) + 1);
	const TooltipContent = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="activity-graph_custom-tooltip">
					<p>{payload[0].value+payload[0].unit}</p>
					<p>{payload[1].value+payload[1].unit}</p>
				</div>
			);
		}
	};
	return (
		<>
			<BarChart
				width={835}
				height={320}
				data={sessions}
				barSize={7}
				title={"Activité quotidienne"}
			>
				<CartesianGrid
					vertical={false}
					strokeDasharray="3"
				/>
				<XAxis dataKey={getSessionNumber} />
				<Tooltip
					position={{ y: 30 }}
					content={<TooltipContent />}		
					wrapperStyle={{ outline: "none" }}			
				/>
				<Legend
					height={30}
					verticalAlign="top"
					align="right"
					iconType="circle"
					iconSize={8}
					// Changes text color in legend
					formatter={value => <span style={{ color: "#74798C" }}>{value}</span>}
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
					fill="#E60000"
					unit="kCal"
				/>
			</BarChart>
		</>
	);
};

export default ActivityGraph;

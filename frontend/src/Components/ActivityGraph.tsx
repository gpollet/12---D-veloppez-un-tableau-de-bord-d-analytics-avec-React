import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts";
import { UserActivityType } from "../types.js";

const ActivityGraph = ({ sessions }: { sessions: UserActivityType["sessions"] }) => {
	const getSessionNumber = () => sessions.map(session => sessions.indexOf(session) + 1);
	return (
		<>
			<BarChart
				width={835}
				height={320}
				data={sessions}
				barSize={7}
        title={"Activité quotidienne"}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey={getSessionNumber}
					padding={{ left: 0, right: 0 }}
				/>
				<Tooltip
					position={{ y: 0 }}
					separator={""}
				/>
				<Legend />
				<Bar
					name="Poids (kg)"
					dataKey="kilogram"
					fill="#282D30"
					legendType="circle"
					unit="kg"
				/>
				<Bar
					name="Calories brûlées (kCal)"
					dataKey="calories"
					fill="#E60000"
					legendType="circle"
					unit="kCal"
				/>
			</BarChart>
		</>
	);
};

export default ActivityGraph;

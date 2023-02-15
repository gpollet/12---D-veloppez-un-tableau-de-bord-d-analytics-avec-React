import { CartesianGrid, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts";
import { UserPerformanceType } from "../types.js";

const SessionsKind = ({ sessions, performanceKind }: { sessions: UserPerformanceType["data"], performanceKind: UserPerformanceType["kind"] }) => {
	/**
	 * Converts the performance kinds from sessions (type: number) to its text equivalent
	 */
	const formatPerformances = () => {
		const result:Array<{value:number, kind:string}> = [];
		sessions.map(session => {
			for (let [key, value] of Object.entries(performanceKind)) {
				if (Number(key) == session.kind)
					result.push({
						value: session.value,
						kind: value,
					});
			}
		});
		return result.reverse();
	};
	return (
		<>
			<RadarChart
				width={258}
				height={263}
				data={formatPerformances()}
			>
				<Radar
					dataKey="value"
					fill="#FF0101B2"
				/>
				;
				<CartesianGrid />
				<PolarGrid />
				<PolarAngleAxis
					dataKey={"kind"}
					//tickLine={false}
				/>
			</RadarChart>
		</>
	);
};

export default SessionsKind;

import { Pie, PieChart } from "recharts";
import { formatedScore } from "../types.js";

const UserScore = ({
	score,
	height,
	width,
}: {
	score: formatedScore[];
	height?: number;
	width?: number;
}): JSX.Element => {
	//  Changes how far/close the circle is from the edges of the container
	const pieRadius = height ? height / 2.6 : 250;
	const startAngle = 210;
	/**
	 * Calculates the value of the <Pie> endAngle needed for the circle to accurately display user's progress
	 */
	const userProgress = score[0].score * 100;
	const percentToAngle = () => {
		// Since we know 3.6° = 1%, calculates at how many degrees the end angle must be to actually display the user's progress in %
		const progressAngle = userProgress * 3.6;
		return startAngle - progressAngle;
	};

	return (
		<>
			<PieChart
				data={score}
				width={width}
				height={height}
			>
				<text
					x={width ? width / 3 : undefined}
					y={height ? height / 6 : undefined}
					textAnchor="end"
					fontSize="1em"
				>
					Score
				</text>
				<text
					x={height ? height / 2 : undefined}
					y={width ? width / 2 : undefined}
					textAnchor="middle"
					alignmentBaseline="middle"
					fontWeight={700}
					fontSize="2em"
				>
					{`${userProgress}%`}
				</text>
				<text
					textAnchor="middle"
					alignmentBaseline="middle"
					x={height ? height / 2 : undefined}
					y={width ? width / 2 + 26 : undefined}
					
				>
					{`de votre objectif`}
				</text>
				<Pie
					data={score}
					dataKey={"score"}
					innerRadius={pieRadius - 10}
					outerRadius={pieRadius}
					fill="#FF0000"
					startAngle={startAngle}
					endAngle={percentToAngle()}
					cornerRadius={5}
				></Pie>
			</PieChart>
		</>
	);
};

export default UserScore;

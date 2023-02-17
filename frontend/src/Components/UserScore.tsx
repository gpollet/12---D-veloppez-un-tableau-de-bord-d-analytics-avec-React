import { Label, Pie, PieChart, Text } from "recharts";
import { formatedScore } from "../types.js";

const UserScore = ({ score }: { score: formatedScore[] }) => {
	const pieRadius = 90;
	const startAngle = 210;
	/**
	 * Calculates the value of the <Pie> endAngle needed for the circle to accurately display user's progress
	 */
	const userProgress = score[0].score * 100;
	const labelContent = `${userProgress}% de votre objectif`;
	const percentToAngle = () => {
		// Since we know 3.6° = 1%, calculates at how many degrees the end angle must be to actually display the user's progress in %
		const progressAngle = userProgress * 3.6;
		return startAngle - progressAngle;
	};
	return (
		<>
			<PieChart
				width={258}
				height={263}
				data={score}
			>
				<Pie
					data={score}
					dataKey={"score"}
					innerRadius={pieRadius - 10}
					outerRadius={pieRadius}
					fill="#FF0000"
					startAngle={startAngle}
					endAngle={percentToAngle()}
				>
					<Label
						width={75}
						content={
							<Text
								textAnchor="middle"
								verticalAnchor="middle"
								x={258 / 2}
								y={263 / 2}
							>
								{labelContent}
							</Text>
						}
					/>
				</Pie>
			</PieChart>
		</>
	);
};

export default UserScore;

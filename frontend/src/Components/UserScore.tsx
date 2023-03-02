import { Label, LabelProps, Pie, PieChart } from "recharts";
import { PolarViewBox } from "recharts/types/util/types.js";
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

	// Typeguard to narrow the type of viewBox, which MUST be PolarViewBox since CartesianViewBox does not contains properties cx & cy, causing an error.
	const isPolarViewBox = (viewBoxParams: any): viewBoxParams is PolarViewBox => {
		if (viewBoxParams.cx | viewBoxParams.cy) {
			return true;
		} else {
			return false;
		}
	};

	// Creates a custom label, needed to display the text content on multiple lines
	const CustomLabel = ({ viewBox }: LabelProps): JSX.Element => {
		if (viewBox && isPolarViewBox(viewBox)) {
			const { cx, cy } = viewBox;
			const labelFontSize = 18;
			return (
				<>
					<text
						x={cx}
						y={cy! - labelFontSize}
						textAnchor="middle"
						dominantBaseline="central">
						<tspan
							fontSize={labelFontSize * 1.5}
							fontWeight={700}>
							{userProgress}%
						</tspan>
						<tspan
							y={cy! + labelFontSize * 0.5}
							x={cx}
							fontSize={labelFontSize}>
							de votre
						</tspan>
						<tspan
							y={cy! + labelFontSize * 1.5}
							x={cx}
							fontSize={labelFontSize}>
							objectif
						</tspan>
					</text>
				</>
			);
		} else {
			return (
				<div>
					<p>Erreur</p>
				</div>
			);
		}
	};
	return (
		<>
			<PieChart
				data={score}
				width={width}
				height={height}>
				<Pie
				className="chart_user-score"
					data={score}
					dataKey={"score"}
					innerRadius={pieRadius - 10}
					outerRadius={pieRadius}
					fill="#FF0000"
					startAngle={startAngle}
					endAngle={percentToAngle()}
					cornerRadius={5}>
					<Label content={<CustomLabel />} />
				</Pie>
			</PieChart>
		</>
	);
};

export default UserScore;

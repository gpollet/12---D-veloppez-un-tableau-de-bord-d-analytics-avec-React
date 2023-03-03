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
	// Defines the padding on the left and right of the chart
	const xAxisPadding: number = 15;

	// Creates a custom tooltip
	const TooltipContent = ({ active, payload }: TooltipProps<number, string>): JSX.Element => {
		if (active && payload && payload.length) {
			displayGrayOverlay(true);
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
		// If tooltip is inactive, also turns off the gray overlay
		else {
			displayGrayOverlay(false);
			return <></>;
		}
	};

	const grayOverlay = document.querySelector(".chart_session-average_tooltip-background");
	// Adds gray background on hover
	const displayGrayOverlay = (tooltipIsActive: boolean) => {
		const activeDot = document.querySelector(".recharts-active-dot")?.firstElementChild;
		if (activeDot && tooltipIsActive === true) {
			// Gets the x position of the currently displayed value so that the overlay starts at that position
			const xPosition = activeDot.getAttribute("cx");
			const overlayWidth = Number(width) - Number(xPosition);
			// If hovered value is the very first one, makes sure the gray overlay covers the whole chart
			if (xPosition === xAxisPadding.toString()) {
				grayOverlay?.setAttribute("x", "0");
				grayOverlay?.setAttribute("width", `${overlayWidth + xAxisPadding}`);
			} else {
				grayOverlay?.setAttribute("x", Number(xPosition).toString());
				grayOverlay?.setAttribute("width", `${overlayWidth}`);
			}
		} else {
			grayOverlay?.setAttribute("width", "0");
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

				<Tooltip content={<TooltipContent />} wrapperStyle={{ outline: "none" }} cursor={false} />
				<svg>
					<rect
						className="chart_session-average_tooltip-background"
						fill="black"
						opacity={0.1}
						height="100%"></rect>
				</svg>
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

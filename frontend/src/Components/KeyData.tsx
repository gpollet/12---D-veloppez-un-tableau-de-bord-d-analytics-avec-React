const KeyData = ({
	nutrientType,
	nutrientValue,
}: {
	nutrientType: string;
	nutrientValue: number;
}) => {
	const nutrients = [
		{
			type: "calorie",
			displayName: "Calories",
		},
		{
			type: "protein",
			displayName: "Proteines",
		},
		{
			type: "carbohydrate",
			displayName: "Glucides",
		},
		{
			type: "lipid",
			displayName: "Lipides",
		},
	];
	/**
	 * Gets the name of the nutrient to be displayed to the user
	 */
	const getNutrientType = nutrients.find(nutrient => nutrient.type == nutrientType);
	return (
		<><div className="dashboard_right-panel-container">
      
        <img src={"src/assets/nutrients-icons/" + getNutrientType?.type + "-icon.png"} />
        
              <p>
                <span className="dashboard_right-panel-values">
                  {nutrientValue}
                {getNutrientType?.type === "calorie" ? "kCal" : "g"}
                  </span>
              <br/>{getNutrientType?.displayName}
              </p>
            
    </div>
            </>
	);
};

export default KeyData;

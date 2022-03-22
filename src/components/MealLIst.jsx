import Meal from "./Meal"
import { useNavigate } from "react-router-dom";
function MealList({meals}){
    const back = useNavigate();
    const goBack = () => back(-1);
    return<>
    <button className="btn" onClick={goBack}>Go back</button>
    <div className="list">
        {meals.map(meal => (
        <Meal key={meal.IdMeal} {...meal} />
        ))}
    </div>
    </>
}

export default MealList
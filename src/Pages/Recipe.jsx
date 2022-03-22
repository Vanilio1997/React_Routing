import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMealById } from "../api"
import Preloader from "../components/Preloader"
import DishList from "../components/DishItem"

function Recipe(){
const [recipes,setRecipes]= useState([])
let foodId = useParams();

useEffect(()=>{
    getMealById(foodId.id).then(data => setRecipes(data.meals))
},[foodId])
    return(
<>
{!(recipes.length) ?<Preloader /> : <DishList dishes={recipes} />}
</>
)
}

export default Recipe
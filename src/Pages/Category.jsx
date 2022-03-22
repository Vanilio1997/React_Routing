import { useParams } from "react-router-dom";
import {getFilteredCategory}  from '../api';
import {useEffect,useState} from 'react';
import Preloader from "../components/Preloader";
import MealList from "../components/MealLIst";

function Category(){
const[meals,setMeals] = useState([])
const {name} = useParams();
useEffect(()=>{
getFilteredCategory(name).then(data => setMeals(data.meals));
},[name])
return<>
{
    !meals.length ?<Preloader /> : <MealList meals = {meals}/> 
}
</>
}


export default Category
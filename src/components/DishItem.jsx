// import DishItem from "./DishItem"
function DishList(props){
    const {dishes} = props;
    console.log(dishes);
    
    return(<>
    <img src={dishes[0].strMealThumb} />
    <h1>{dishes[0].strMeal}</h1>
    <h5>Categoty:{dishes[0].strCategory}</h5>
    {dishes[0].strArea ?<h5>Area:{dishes[0].strArea}</h5>:null }
    <p>{dishes[0].strInstructions}</p>
    <table className="centered">
        <thead>
           <tr>
                <th>Ingredient</th>
            <th>Measure</th></tr>
        </thead>
        <tbody>
           {Object.keys(dishes[0]).map(key => {
                   if(key.includes('Ingredient')&& dishes[0][key]){
                       return (
                           <tr key={key}>
                               <td>{dishes[0][key]}</td>
                               <td>{
                                   dishes[0][`strMeasure${key.slice(13)}`]
                                   }</td>
                           </tr>
                       )
                   }
                   return null
               })
           }
        </tbody>
    </table>
    {dishes[0].strYoutube ? 
    <><h5 style={{ margin: '2rem 0 1.5rem 0' }}>Video recipe</h5><div className="row">
                <iframe src={`https://www.youtube.com/embed/${dishes[0].strYoutube.slice(-11)}`} frameborder="0"></iframe>
            </div></>
    :null }
    </>)
}

export default DishList
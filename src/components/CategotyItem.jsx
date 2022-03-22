import { Link } from "react-router-dom"

function CategoryItem(props){

    return(
    
      <div className="card">
        <div className="card-image">
          <img src={props.strCategoryThumb} />

        </div>
        <div className="card-content">
          <p>{props.strCategoryDescription.slice(0,150)}...</p>
        </div>
        <div className="card-action">
<Link to={`/category/${props.strCategory}`} className='btn'>
    Watch Category
</Link>
        </div>
        <div className="card-action">
          <a href="#">{props.strCategory}</a>
        </div>
      </div>


    )
}

export default CategoryItem
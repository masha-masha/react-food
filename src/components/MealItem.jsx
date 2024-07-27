import {Link} from 'react-router-dom';

const MealItem = ({idMeal, strMeal, strMealThumb}) => {
    return (
        <div className="card">
            <div className="card-image">
              <img onError={(e) => e.target.src = `https://placehold.jp/30/ff8c00/ffffff/300x300.png?text=${strMeal}`} src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
              <span className="card-title">{strMeal}</span>
              <p>{strMeal}</p>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn" >Watch recepie</Link>
            </div>
          </div>
      )
}

export default MealItem
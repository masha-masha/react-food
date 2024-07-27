import MealItem from './MealItem';


const MealsList = ({ meals }) => {
  return (
    <div className="list">
      {meals.map((meal) => {
        return (
          <MealItem
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
          />
        );
      })}
    </div>

  );
};

export default MealsList;

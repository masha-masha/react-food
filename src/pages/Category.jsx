import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';
import MealsList from '../components/MealsList';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);
  return (
    <>
      <button className='btn go-back' onClick={goBack}>
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
};

export default Category;

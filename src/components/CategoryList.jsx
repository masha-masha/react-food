import CategoryItem from './CategoryItem';

const CategoryList = ({ catalog }) => {
  return (
    <div className='list'>
      {catalog.length ? (
        catalog.map((el) => {
          return (
            <CategoryItem
              key={el.idCategory}
              idCategory={el.idCategory}
              strCategory={el.strCategory}
              strCategoryThumb={el.strCategoryThumb}
              strCategoryDescription={el.strCategoryDescription}
            />
          );
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export default CategoryList;

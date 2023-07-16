import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    filterCategory,
    filterRating,
    clearAllFilters,
    searchInput,
  } = props

  const onKeyDownFunction = event => {
    searchInput(event.key)
  }
  const clearFiltersButton = () => {
    clearAllFilters()
  }

  const onClickCategory = event => {
    filterCategory(event.target.value)
    // console.log(event.target.value)
  }

  const onClickRatingButton = event => {
    filterRating(event.target.value)
    // console.log(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-box-container">
        <input
          type="search"
          className="search-input-box"
          placeholder="Search"
          onKeyDown={onKeyDownFunction}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-container">
        {categoryOptions.map(eachCategory => (
          <li key={eachCategory.categoryId}>
            <button
              type="button"
              className="category-button"
              value={eachCategory.categoryId}
              onClick={onClickCategory}
            >
              {eachCategory.name}
            </button>
          </li>
        ))}
      </ul>
      <h1 className="rating-heading"> Rating </h1>
      <ul className="ratings-container">
        {ratingsList.map(eachRating => (
          <li key={eachRating.ratingId}>
            <button
              type="button"
              className="rating-button"
              value={eachRating.ratingId}
              onClick={onClickRatingButton}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating${eachRating.ratingId}`}
                className="rating-image"
              />
              <p className="stars-description"> && up </p>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filters-button"
        onClick={clearFiltersButton}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

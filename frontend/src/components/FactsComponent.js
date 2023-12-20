import React, { useState } from 'react'
import * as FactsArrays from './context/FactsArrays'

const FactsComponent = () => {
  const [currentCategory, setCurrentCategory] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = ['Science', 'Art', 'History']

  const showNextFacts = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % currentCategory.length)
  }

  const handleCategoryChange = (category) => {
    setCurrentCategory(FactsArrays[category.toLowerCase() + 'Facts'])
    setCurrentIndex(0)
  }

  return (
    <div>
      <h2>Facts</h2>
      <div>
        <label>Select a category: </label>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">Select</option>
          {categories.map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {currentCategory && (
        <div>
          <ul>
            {currentCategory.slice(currentIndex, currentIndex + 6).map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
          <button onClick={showNextFacts}>Show More Facts</button>
        </div>
      )}
    </div>
  )
}

export default FactsComponent

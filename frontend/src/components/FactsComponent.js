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
        <label>
          <b>Select a category: </b>
        </label>
        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{
            height: 50,
            width: 100,
            borderRadius: 50,
            cursor: "pointer",
            backgroundColor: "cyan",
            borderStyle: "inset",
            borderColor: "blue",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          <option value="" style={{}}>Select</option>
          {categories.map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {currentCategory && (
        <div>
          <ul style={{ paddingTop: 10, fontSize: 25}}>
            {currentCategory
              .slice(currentIndex, currentIndex + 6)
              .map((fact, index) => (
                <li key={index}><b>{fact}</b></li>
              ))}
          </ul>
          <button
            onClick={showNextFacts}
            style={{
              height: 60,
              width: 170,
              borderRadius: 50,
              cursor: "pointer",
              backgroundColor: "cyan",
              borderStyle: "inset",
              borderColor: "blue",
              fontSize: 18,
            }}
          >
            <b>Show More Facts</b>
          </button>
        </div>
      )}
    </div>
  );
}

export default FactsComponent

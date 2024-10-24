import React from 'react'
import FilterStatusArea from './FilterStatusArea/FilterStatusArea'
import FilterViewArea from './FilterViewArea/FilterViewArea'
import "./style.css"

const FilterArea = () => {
  return (
    <div className='filterArea'>
      <FilterStatusArea/>
      <FilterViewArea/>
    </div>
  )
}

export default FilterArea

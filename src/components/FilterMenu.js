import React from 'react';
import Filter from '../components/Filter'

const FilterMenu = ({filter, handleClick}) => {
  return(
    <ul
      className='FilterMenu'
      >
        <Filter
          active={filter === 'SHOW_ALL'}
          title='All Todos'
          onClick={() => handleClick('SHOW_ALL')}
        />
        <Filter
          active={filter === 'SHOW_ACTIVE'}
          title='Active'
          onClick={() => handleClick('SHOW_ACTIVE')}
        />
        <Filter
          active={filter === 'SHOW_COMPLETED'}
          title='Completed'
          onClick={() => handleClick('SHOW_COMPLETED')}
        />
      </ul>
  )
}

export default FilterMenu

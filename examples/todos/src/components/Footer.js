import React, { Fragment } from 'react'
import FilterLink from '../containers/FilterLink'
import FilterCheckbox from '../containers/FilterCheckbox'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <Fragment>
    <div>
      <span>Show by status: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
    <div 
      style={{
        marginTop: '10px',
      }}
    >
      <span>Show by priority: </span>
      <FilterCheckbox filter={[VisibilityFilters.SHOW_HIGH, VisibilityFilters.HIDE_HIGH]}>
        High
      </FilterCheckbox>
      <FilterCheckbox filter={[VisibilityFilters.SHOW_NORMAL, VisibilityFilters.HIDE_NORMAL]}>
        Normal
      </FilterCheckbox>
      <FilterCheckbox filter={[VisibilityFilters.SHOW_LOW, VisibilityFilters.HIDE_LOW]}>
        Low
      </FilterCheckbox>
    </div>
  </Fragment>
)

export default Footer

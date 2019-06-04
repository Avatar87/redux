import React from 'react'
import PropTypes from 'prop-types'

const Priorityselect = ({ selected, choosePriority }) => (
  <div
    style={{
      display: 'inline',
      marginLeft: '10px'
    }}>
    <span>Priority</span>
      <select
        value={selected}
        style={{
          marginLeft: '4px',
        }}
        onChange={choosePriority}
      >
        <option value='High'>High</option>
        <option value='Normal'>Normal</option>
        <option value='Low'>Low</option>
      </select>
  </div>
)

Priorityselect.propTypes = {
  selected: PropTypes.string.isRequired,
  choosePriority: PropTypes.func.isRequired
}

export default Priorityselect
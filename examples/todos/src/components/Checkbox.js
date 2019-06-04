import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ checked, children, onChange }) => (
  <span>
    <input type = "checkbox" 
       onChange={onChange}
       defaultChecked={true}
       style={{
          marginLeft: '4px',
       }}
       className={'checkbox'}
    />
    {children}
  </span>
      
)

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Checkbox
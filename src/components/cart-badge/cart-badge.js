import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'

function CartBadge(props) {
  return (
    <Badge count={props.amount} className={'cart-button-container'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  amount: 0,
}

CartBadge.propTypes = {
  amount: PropTypes.number,
}

export default CartBadge

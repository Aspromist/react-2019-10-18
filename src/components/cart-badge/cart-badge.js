import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'

function CartBadge(props) {
  return (
    <Badge count={props.totalAmount} className={'cart-button-container'}>
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

export default connect(store => ({
  totalAmount: Object.values(store.cart).reduce(
    (acc, item) => acc + item[0],
    0
  ),
}))(CartBadge)

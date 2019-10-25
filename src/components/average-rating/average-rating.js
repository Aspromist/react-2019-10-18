import React from 'react'
import {Rate} from 'antd'

function AverageRating({reviews}) {
  const rawRating =
    reviews.reduce((acc, {rating}) => {
      return acc + rating
    }, 0) / reviews.length
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate defaultValue={normalizedRating} disabled allowHalf />
    </div>
  )
}

export default AverageRating

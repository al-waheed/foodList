import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export class Ratings extends Component {
  render() {
    return (
      <div>
        {[...Array(5)].map((_, i) => {
            return (
              <span style={{ color: i + 1 <= this.props.ratings ? '#f6990e' : 'gray' }}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            )

          })}
      </div>
    )
  }
}

export default Ratings

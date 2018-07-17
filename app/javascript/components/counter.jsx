import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // count: 0
      count: props.count
    }
  }

  handleUp = () => {
    this.setState({
      count: ++this.state.count
    })
  }

  handleDown = () => {
    this.setState({
      count: --this.state.count
    })
  }

  render() {
    return (
      <div>
        <div>{ this.state.count }</div>
        <button onClick={ this.handleUp }>+</button>
        <button onClick={ this.handleDown }>-</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

Counter.propTypes = {
  count: PropTypes.number
}

export default Counter

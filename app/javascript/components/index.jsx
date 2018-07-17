import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'



function CounterB(props) {
  return (
    <li className='box' style={{backgroundColor: props.counter.color}} onClick={() => props.countUp(props.counter)}>{props.counter.id}:{props.counter.count}</li>
  )
}

function CounterList(props) {
  const counters = props.counters.map(counter => {
    return (
      <CounterB
        counter={counter}
        key={counter.id}
        countUp={props.countUp}
      />
    )
  })
  return (
    <ul>
      {counters}
    </ul>
  )
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      counterBs: [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'}
      ],
      total: 0
    }
    this.countUp = this.countUp.bind(this)
  }

  countUp(counter) {
    this.setState(prevState => {
      const counters = prevState.counterBs.map(counter => {
        return {
          id: counter.id,
          count: counter.count,
          color: counter.color
        }
      })
      const pos = counters.map(counter => {
        return counter.id;
      }).indexOf(counter.id);
      counters[pos].count++;
      return {
        counterBs: counters,
        total: prevState.total + 1
      }
    })
  }

  render() {
    return (
      <div className="container">
        <CounterList
          counters={this.state.counterBs}
          countUp={this.countUp}
          />
        <div className="total">
          TOTAL INVENTORY: {this.state.total}
        </div>
      </div>
    )
  }
}

// 出力
// class Output extends React.Component {
//   render() {
//     return (
//       <App/>
//     );
//   }
// }

// function Output() {
//     return (
//       <App/>
//     )
// }

// export default Output
export default App

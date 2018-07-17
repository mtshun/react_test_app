import React, {Component} from 'react'
import PropTypes from 'prop-types'

function showMessage() {
  alert('Messi is god!!');
}

function Counter(props) {

  function countUp(color) {
    alert('this is ' + color);
  }

  return (<li style={{
      backgroundColor: props.color
    }} onClick={() => countUp(props.color)}>0</li>);
}

function A_counter(props) {
  function atagCounter(e, color) {
    e.preventDefault();
    alert('a タグをonclick! ' + color + ' です.');
  }

  return (<li style={{
      backgroundColor: props.color
    }}>
    <a href="#" onClick={(e) => atagCounter(e, props.color)}>hoge</a>
  </li>);

}

class Hoge extends React.Component {

  render() {
    const name = 'messi';

    return (
      <div>
        <p>hello hoge!</p>
        <hr/>
        <p>hello, {name.toUpperCase()}</p>
        <div className="box"></div>
        <div style={{
            width: 100,
            height: 100,
            backgroundColor: 'tomato'
          }} onClick={showMessage}>
        </div>
        <div className='container'>
          <ul>
            {
            // -> component使用
            }
            <Counter color="skyblue"/>
            <Counter color="tomato"/>
            <Counter color="green"/>
            <h3>aタグにonclickをつける場合</h3>
            <A_counter color="skyblue"/>
            <A_counter color="gray"/>
            <A_counter color="pink"/>
          </ul>
        </div>
      </div>
    )
  }
}

export default Hoge

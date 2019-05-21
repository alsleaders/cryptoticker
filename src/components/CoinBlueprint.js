import React, { Component } from 'react'
import CoinImage from './CoinImage'

class CoinBlueprint extends Component {
  render() {
    return (
      <div id="coin-box">
        <h3>{this.props.name}</h3>
        <h4>{this.props.price}</h4>
        <p>{this.props.symbol}</p>
        {/* <p>{this.props.id}</p> */}
        <CoinImage id={this.props.id} />
        {/* <img src="https://s2.coinmarketcap.com/static/img/coins/16x16/${' + this.props.id + '}.png' /> */}
        {/* <p>{this.state.percent_change_1hr}</p>
        <p>{this.state.percent_change_24hr}</p>
        <p>{this.state.percent_change_7d}</p> */}
      </div>
    )
  }
}

export default CoinBlueprint

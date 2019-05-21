import React, { Component } from 'react'
import CoinImage from './CoinImage'

class CoinBlueprint extends Component {
  render() {
    return (
      <div id="coin-box">
        <h3>{this.props.name}</h3>
        <h4>{this.props.price}</h4>
        <p>{this.props.symbol}</p>
        {/* <p>{this.props.oneHour}</p>
        <p>{this.props.percent_change_24hr}</p>
        <p>{this.props.percent_change_7d}</p> */}
        <CoinImage id={this.props.id} />
      </div>
    )
  }
}

export default CoinBlueprint

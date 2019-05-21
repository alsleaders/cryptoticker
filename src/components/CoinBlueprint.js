import React, { Component } from 'react'
import CoinImage from './CoinImage'

class CoinBlueprint extends Component {
  render() {
    return (
      <table id="coin-box">
        <tr>
          <h3>{this.props.name}</h3>
          <h4>{this.props.price}</h4>
          <p>{this.props.symbol}</p>
          <CoinImage id={this.props.id} />
        </tr>
        <tr>
          <td>{this.props.oneHour}</td>
          <td>{this.props.oneDay}</td>
          <td>{this.props.oneWeek}</td>
        </tr>
      </table>
    )
  }
}

export default CoinBlueprint

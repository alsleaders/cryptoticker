import React, { Component } from 'react'
import CoinImage from './CoinImage'

class CoinBlueprint extends Component {
  render() {
    return (
      <section id="table">
        <table id="coin-box">
          <tbody>
            <th>{this.props.name}</th>
            <th>{this.props.price}</th>
            <th>{this.props.symbol}</th>
            <CoinImage id={this.props.id} />
            <tr>
              {/* <th>Change in the past hour</th>
            <th>Change in the past day</th>
            <th>Change in the past week</th> */}
            </tr>
            <tr id="center-values">
              <td>{this.props.oneHour}</td>
              <td>{this.props.oneDay}</td>
              <td>{this.props.oneWeek}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default CoinBlueprint

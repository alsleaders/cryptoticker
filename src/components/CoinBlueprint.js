import React, { Component } from 'react'

class CoinBlueprint extends Component {
  render() {
    return (
      <div id="coin-box">
        <h3>{this.props.name}</h3>
        <h4>{this.props.quotes.USD.price}</h4>
        <p>{this.props.symbol}</p>
        {/* <p>{this.state.percent_change_1hr}</p>
        <p>{this.state.percent_change_24hr}</p>
        <p>{this.state.percent_change_7d}</p> */}
      </div>
    )
  }
}

export default CoinBlueprint

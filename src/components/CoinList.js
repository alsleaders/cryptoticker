import CoinBlueprint from './CoinBlueprint'
import CoinImage from './CoinImage'
import React, { Component } from 'react'

class CoinList extends Component {
  state = {
    coinArray: []
  }

  componentDidMount() {
    console.log('working so far')
    this.getDataFromApi()
  }

  getDataFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          coinArray: Object.values(json.data)
        })
        console.log('you should have an array now')
      })
  }

  render() {
    console.log('rendering plants must smell awful')
    return (
      <main>
        {this.state.coinArray.map(coin => {
          return (
            <>
              <CoinBlueprint
                name={coin.name}
                symbol={coin.symbol}
                price={coin.quotes.USD.price}
                id={coin.id}
                // image='https://s2.coinmarketcap.com/static/img/coins/16x16/${' + this.props.id + '}.png'
              />
            </>
          )
        })}
      </main>
    )
  }
}

export default CoinList

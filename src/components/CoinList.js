import CoinBlueprint from './CoinBlueprint'
import CoinImage from './CoinImage'
import React, { Component } from 'react'

class CoinList extends Component {
  state = {
    coinArray: []
  }

  componentDidMount() {
    this.getDataFromApi()
    console.log('working so far')
    setInterval(this.getDataFromApi, 10000)
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
                oneHour={coin.quotes.USD.percent_change_1h}
                oneDay={coin.quotes.USD.percent_change_24h}
                oneWeek={coin.quotes.USD.percent_change_7d}
              />
            </>
          )
        })}
      </main>
    )
  }
}

export default CoinList

import React, { Component } from 'react'
import CoinList from './components/CoinList'
import Headers from './components/Headers'

class App extends Component {
  render() {
    return (
      <>
        <Headers />
        <CoinList />
      </>
    )
  }
}

export default App

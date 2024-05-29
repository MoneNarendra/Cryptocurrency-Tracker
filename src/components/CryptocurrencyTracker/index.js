import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptyoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptyoList()
  }

  getCryptyoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptyoList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptyoList} = this.state
    return (
      <div className="bg-continaer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <CryptocurrenciesList cryptyoList={cryptyoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker

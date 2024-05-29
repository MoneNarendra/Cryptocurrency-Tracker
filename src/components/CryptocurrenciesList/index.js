import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptyoList} = props
  return (
    <div className="inner-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-img"
      />

      <ul className="crypto-currency-container cryptyo-list-con">
        <li className="tabel-head">
          <p className="header-text">Coin Type</p>
          <div className="currency-container">
            <p className="header-text">USD</p>
            <p className="header-text">EURO</p>
          </div>
        </li>
        {cryptyoList.map(eachCryptoItem => (
          <CryptocurrencyItem
            eachCryptoItem={eachCryptoItem}
            key={eachCryptoItem.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList

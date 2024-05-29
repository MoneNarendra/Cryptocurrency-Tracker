import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptoItem} = props
  const {euroValue, usdValue, currencyLogo, currencyName} = eachCryptoItem
  return (
    <li className="item-container">
      <div className="currency-con">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="text">{currencyName}</p>
      </div>
      <div className="currency-container">
        <p className="text">{usdValue}</p>
        <p className="text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

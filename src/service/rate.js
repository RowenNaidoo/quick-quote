import 'whatwg-fetch'

export const getSpotRate = async (fromCurrency, toCurrency, amount) => (
  window.fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`)
    .then(response => response.json())
)
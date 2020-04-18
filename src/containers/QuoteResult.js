import React, { useState } from 'react'
import styled from 'styled-components'

import { getSpotRate } from '../service/rate'
import Button from '../components/Button'

const QuoteResult = ({ match: { params }, history }) => {
  const { fromCurrency, toCurrency, amount } = params
  const [quoteData, setQuoteData] = useState({})

  React.useEffect(() => {
    let cancel = false

    const runEffect = async () => {
      const quoteResponse = await getSpotRate(fromCurrency, toCurrency, amount)
      if (cancel) { return }
      setQuoteData(quoteResponse)
    }
    runEffect()

    return () => {
      cancel = true
    }
  }, [])

  const startNewQuote = () => {
    history.push('/')
  }

  return (
    <Container>
      <MainHeader>
        OFX Customer Rate
      </MainHeader>
      <Rate id='rate'>
        {quoteData.CustomerRate}
      </Rate>
      <AmountContainer>
        <Header>
          From
      </Header>
        <Currency>
          {fromCurrency}
        </Currency>
        <Amount id='fromAmount'>
          {parseFloat(amount).toFixed(2)}
        </Amount>
      </AmountContainer>
      <AmountContainer>
        <Header>
          To
        </Header>
        <Currency>
          {toCurrency}
        </Currency>
        <Amount id='toAmount'>
          {parseFloat(quoteData.CustomerAmount).toFixed(2)}
        </Amount>
      </AmountContainer>
      <ButtonContainer>
        <Button buttonText='START NEW QUOTE' onButtonClicked={startNewQuote} />
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: auto;
`
const MainHeader = styled.h1`
  font-size: 24px;
  font-weight:normal;
  margin-bottom: 5px;
  text-align: center;
`
const Header = styled.h1`
  font-size: 24px;
  font-weight:normal;
  margin-bottom: 5px;
`
const Rate = styled.div`
  color:green;
  text-align: center;
  font-size:  48px;
`
const AmountContainer = styled.div`
  padding-left: 30px;
  font-size: 35px;
`
const Currency = styled.span`
  font-size: 35px;
  margin-right: 5px;
`
const Amount = styled.span`
  font-size: 35px;
  color: blue;
`
const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`

export default QuoteResult
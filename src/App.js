import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import QuoteForm from './containers/QuoteForm'
import QuoteResult from './containers/QuoteResult'
import breakPoints from './utils/breakpoints'

function App() {
  return (
    <Container>
      <Header>Quick Quote</Header>
      <ContentContainer>
        <Switch>
          <Route path="/" component={QuoteForm} exact />
          <Route path="/result/:fromCurrency/:toCurrency/:amount" component={QuoteResult} />
        </Switch>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 15px;

  @media (min-width: ${breakPoints.tablet}) {
    width: 768px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`
const Header = styled.h1`
  flex: 1 1 auto;
  border-bottom: 1px solid lightGray;
  font-weight: normal;
`
const ContentContainer = styled.div`
  background-color: #F3F6F1;
  padding: 0 15px;
`
export default App

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import QuoteResult from '../../containers/QuoteResult'
import * as rateService from '../../service/rate'


describe('<App />', () => {
  let useEffect
  let component

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  }

  const spotratePromise = new Promise((resolve) => {
    resolve({
      CustomerRate: 0.6209,
      CustomerAmount: 62.09
    })
  })

  const defaultProps = {
    match: { params: { fromCurrency: 'AUD', toCurrency: 'USD', amount: 100 } }
  }

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect')
    mockUseEffect()
    mockUseEffect()

    rateService.getSpotRate = jest.fn().mockReturnValue(spotratePromise)
    component = shallow(<QuoteResult {...defaultProps} />)
  })

  test('matches snapshot', () => {
    component = renderer.create(<QuoteResult {...defaultProps} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('displays correct rates and values', () => {
    expect(component.find('#rate').text()).toEqual('0.6209')
    expect(component.find('#fromAmount').text()).toEqual(parseFloat('100').toFixed(2))
    expect(component.find('#toAmount').text()).toEqual(parseFloat('62.09').toFixed(2))
  })
})
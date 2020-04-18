import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import QuoteForm from '../../containers/QuoteForm'


describe('<App />', () => {
  let component

  beforeEach(() => {
    component = shallow(<QuoteForm />)
  })

  test('matches snapshot', () => {
    const component = renderer.create(<QuoteForm />)
    expect(component.toJSON()).toMatchSnapshot()
  })
});
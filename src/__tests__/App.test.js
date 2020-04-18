import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('<App />', () => {
  let component
  const router = {
    history: new BrowserRouter().history,
    route: {
      location: {},
      match: {},
    },
  }

  const createContext = () => ({
    context: { router },
    childContextTypes: { router: {} },
  })

  beforeEach(() => {
    component = shallow(<App />, createContext())
  })

  test('matches snapshot', () => {
    component = renderer.create(<BrowserRouter><App /></BrowserRouter>)
    expect(component.toJSON()).toMatchSnapshot()
  })
});

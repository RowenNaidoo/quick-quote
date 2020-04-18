import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import Button from '../../components/Button'


describe('<Button />', () => {
  let component
  let mockButtonClicked = jest.fn()

  const defaultProps = {
    buttonText: 'click me',
    onButtonClicked: mockButtonClicked
  }

  beforeEach(() => {
    component = shallow(<Button {...defaultProps} />)
  })

  test('matches snapshot', () => {
    const component = renderer.create(<Button {...defaultProps} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('shows button text', () => {
    expect(component.text()).toEqual('click me')
  })

  test('fires onClick function', () => {
    component.simulate('click')
    expect(mockButtonClicked).toHaveBeenCalled()
  })
})
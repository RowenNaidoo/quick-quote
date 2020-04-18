import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import TextFormField from '../../components/TextFormField'


describe('<TextFormField />', () => {
  let component
  let mockFieldChanged = jest.fn()

  const defaultProps = {
    value: 'some text',
    fieldId: 'fieldId',
    headerText: 'some header text',
    onFieldChanged: mockFieldChanged,
    errorMessage: '',
    isRequired: true
  }

  beforeEach(() => {
    component = shallow(<TextFormField {...defaultProps} />)
  })

  test('matches snapshot', () => {
    const component = renderer.create(<TextFormField {...defaultProps} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('fires onChange function', () => {
    const event = {
      target: {value:'a'}
    }

    component.find('#fieldId').simulate('change', event)
    expect(mockFieldChanged).toHaveBeenCalled()
  })
})
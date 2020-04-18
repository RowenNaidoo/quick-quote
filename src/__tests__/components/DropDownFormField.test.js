import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import DropDownFormField from '../../components/DropDownFormField'


describe('<DropDownFormField />', () => {
  let component
  let mockFieldChanged = jest.fn()

  const defaultProps = {
    selectedValue: 'USD',
    fieldId: 'ddFieldId',
    headerText: 'some header text',
    onFieldChanged: mockFieldChanged,
    errorMessage: '',
    options: [
      { value: 'AUD', text: 'Australian Dollar(AUD)' },
      { value: 'USD', text: 'US Dollar(USD)' }
    ],
    isRequired: true
  }

  beforeEach(() => {
    component = shallow(<DropDownFormField {...defaultProps} />)
  })

  test('matches snapshot', () => {
    component = renderer.create(<DropDownFormField {...defaultProps} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
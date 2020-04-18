import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import DropDownTextField from '../../components/DropDownTextField'


describe('<DropDownTextField />', () => {
  let component
  let mockFieldChanged = jest.fn()

  const defaultProps = {
    value: {contactNumber: '', countryCode: ''},
    fieldId: 'fieldId',
    headerText: 'some header text',
    onFieldChanged: mockFieldChanged,
    errorMessage: '',
    options: [{text: "+61", value: "+61"}],
    isRequired: true
  }

  beforeEach(() => {
    component = shallow(<DropDownTextField {...defaultProps} />)
  })

  test('matches snapshot', () => {
    component = renderer.create(<DropDownTextField {...defaultProps} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('renders dropdown and text field', () => {
    expect(component.find('DropDownFormField')).toHaveLength(1)
    expect(component.find('TextFormField')).toHaveLength(1)
  })
})
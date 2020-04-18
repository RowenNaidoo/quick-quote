import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DropDownFormField = ({ selectedValue, fieldId, headerText, onFieldChanged, errorMessage, options, isRequired, rightRadius = true }) => (
  <Conatiner>
    <Element>
      {headerText}{isRequired && <RequiredIndicator>*</RequiredIndicator>}
    </Element>
    <Element>
      <Field id={fieldId} value={selectedValue} rightRadius={rightRadius} onChange={(e) => { onFieldChanged(fieldId, e.target.value) }}>
        <option value=''>Select...</option>
        {
          options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
        }
      </Field>
    </Element>
    <Element>
      <ValidationMessage>
        {errorMessage}
      </ValidationMessage>
    </Element>
  </Conatiner>
)

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
`
const Element = styled.div`
  flex: 1 1 auto;
  justify-content: left;
`
const Field = styled.select`
  height: 36px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid lightgray;
  padding: 0 10px;
  border-top-right-radius: ${props => props.rightRadius || '0px'};
  border-bottom-right-radius: ${props => props.rightRadius || '0px'};
`
const ValidationMessage = styled.span`
  color: red;
  font-size: 14px;
`
const RequiredIndicator = styled.span`
  color: red;
  font-size: 20px;
`

DropDownFormField.propTypes = {
  selectedValue: PropTypes.string,
  fieldId: PropTypes.string,
  headerText: PropTypes.string,
  onFieldChanged: PropTypes.func,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.bool
}

export default DropDownFormField
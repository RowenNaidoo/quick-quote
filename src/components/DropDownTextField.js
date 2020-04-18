import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextFormField from './TextFormField'
import DropDownFormField from './DropDownFormField'

const DropDownTextField = ({ value, fieldId, headerText, onFieldChanged, errorMessage, options, isRequired }) => {
  const onDropDownChanged = (id, val) => {
    onFieldChanged(fieldId, { countryCode: val, contactNumber: value.contactNumber })
  }

  const onTextChanged = (id, val) => {
    onFieldChanged(fieldId, { countryCode: value.countryCode, contactNumber: val })
  }

  return (<Conatiner>
    <Element>
      {headerText}{isRequired && <RequiredIndicator>*</RequiredIndicator>}
    </Element>
    <Element>
      <DropDownContainer>
        <DropDownFormField
          fieldId={`${fieldId}_dropDown`}
          onFieldChanged={onDropDownChanged}
          options={options}
          selectedValue={value.countryCode}
          rightRadius={false} />
      </DropDownContainer>
      <TextContainer>
        <TextFormField
          value={value.contactNumber}
          fieldId={`${fieldId}_text`}
          onFieldChanged={onTextChanged}
          leftRadius={false} />
      </TextContainer>
    </Element>
    <Element>
      <ValidationMessage>
        {errorMessage}
      </ValidationMessage>
    </Element>
  </Conatiner>)
}

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
`
const Element = styled.div`
  flex: 1 1 auto;
  justify-content: left;
  display: flex;
  flex-direction: row;
`
const DropDownContainer = styled.div`
  flex: 0 1 100px;
`
const TextContainer = styled.div`
  flex: 1 1 auto;
`
const ValidationMessage = styled.span`
  color: red;
  font-size: 14px;
`
const RequiredIndicator = styled.span`
  color: red;
`

DropDownTextField.propTypes = {
  fieldId: PropTypes.string,
  headerText: PropTypes.string,
  onFieldChanged: PropTypes.func,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.bool
}

export default DropDownTextField
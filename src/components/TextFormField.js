import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextFormField = ({ value, fieldId, headerText, onFieldChanged, errorMessage, isRequired, leftRadius = true }) => (
  <Container>
    <Element>
      {headerText}{isRequired && <RequiredIndicator>*</RequiredIndicator>}
    </Element>
    <Element>
      <Field
        type='text'
        id={fieldId}
        value={value}
        onChange={(e) => { onFieldChanged(fieldId, e.target.value) }}>
      </Field>
    </Element>
    <Element>
      <ValidationMessage>
        {errorMessage}
      </ValidationMessage>
    </Element>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Element = styled.div`
  flex: 1 1 auto;
  justify-content: left;
  display: flex;
`
const Field = styled.input`
  height: 34px;
  width: 100%;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid lightgray;
  flex: 1;
  border-top-left-radius: ${props => props.leftRadius || '0px'};
  border-bottom-left-radius: ${props => props.leftRadius || '0px'};
`
const ValidationMessage = styled.span`
  color: red;
  font-size: 14px;
`
const RequiredIndicator = styled.span`
  color: red;
  font-size: 20px;
`

TextFormField.propTypes = {
  value: PropTypes.string,
  fieldId: PropTypes.string,
  headerText: PropTypes.string,
  onFieldChanged: PropTypes.func,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  leftRadius: PropTypes.bool
}

export default TextFormField
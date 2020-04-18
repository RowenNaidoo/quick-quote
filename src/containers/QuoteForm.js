import React, { useState } from 'react'
import styled from 'styled-components'

import breakPoints from '../utils/breakpoints'
import { isEmpty, isValidAmount } from '../utils/validators'

import TextFormField from '../components/TextFormField'
import DropDownField from '../components/DropDownFormField'
import DropDownTextField from '../components/DropDownTextField'
import Button from '../components/Button'

const QuoteForm = ({ history }) => {
  const currencyOptions = [
    { value: 'AUD', text: 'Australian Dollar(AUD)' },
    { value: 'USD', text: 'US Dollar(USD)' }
  ]

  const countryCodeOptions = [
    { value: '+61', text: '+61' }
  ]

  const [formData, setFormData] = useState({
    firstName: { value: '', validators: [isEmpty('First Name')], errorMessage: '' },
    lastName: { value: '', validators: [isEmpty('Last Name')], errorMessage: '' },
    email: { value: '', validators: null, errorMessage: '' },
    contact: { value: { countryCode: '', contactNumber: '' }, validators: null, errorMessage: '' },
    fromCurrency: { value: '', validators: [isEmpty('From Currency')], errorMessage: '' },
    toCurrency: { value: '', validators: [isEmpty('To Currency')], errorMessage: '' },
    amount: { value: '', validators: [isEmpty('Amount'), isValidAmount('Amount')], errorMessage: '' },
  })

  const updateFormData = (fieldId, fieldValue) => {
    let data = { ...formData }
    data[fieldId].value = fieldValue
    setFormData(data)
  }

  const getQuote = (e) => {
    e.preventDefault()
    let validationData = { ...formData }
    let hasErrors = false
    Object.entries(formData).forEach(([key, val]) => {
      if (val.validators) {
        const fieldValidationResult = val.validators.map(validator => validator(formData[key].value))
        const filteredFieldValidationResults = fieldValidationResult.filter(fvr => fvr.hasError)
        let fieldValidationMessage = ''
        if (filteredFieldValidationResults.length > 0) {
          fieldValidationMessage = filteredFieldValidationResults[0]
          hasErrors = true
        }
        validationData[key] = { ...validationData[key], errorMessage: fieldValidationMessage.errorMessage }
        return validationData[key]
      } else {
        return validationData[key]
      }
    })
    setFormData(validationData)

    if (!hasErrors) {
      history.push(`/result/${validationData.fromCurrency.value}/${validationData.toCurrency.value}/${validationData.amount.value}`)
    }
  }

  const { firstName, lastName, email, contact, fromCurrency, toCurrency, amount } = formData
  return (
    <Container>
      <form>
      <FormRow>
        <FormField rightMargin>
          <TextFormField
            fieldId='firstName'
            value={firstName.value}
            headerText='First Name'
            onFieldChanged={updateFormData}
            isRequired
            errorMessage={formData.firstName.errorMessage} />
        </FormField>
        <FormField leftMargin>
          <TextFormField
            fieldId='lastName'
            value={lastName.value}
            headerText='Last Name'
            onFieldChanged={updateFormData}
            isRequired
            errorMessage={formData.lastName.errorMessage} />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <TextFormField
            fieldId='email'
            value={email.value}
            headerText='Email'
            onFieldChanged={updateFormData} />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <DropDownTextField
            value={contact.value}
            fieldId='contact'
            headerText='Telephone / Mobile'
            onFieldChanged={updateFormData}
            options={countryCodeOptions} />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField rightMargin>
          <DropDownField
            fieldId='fromCurrency'
            value={fromCurrency.value}
            headerText='From Currency'
            onFieldChanged={updateFormData}
            options={currencyOptions}
            isRequired
            errorMessage={formData.fromCurrency.errorMessage} />
        </FormField>
        <FormField leftMargin>
          <DropDownField
            fieldId='toCurrency'
            value={toCurrency.value}
            headerText='To Currency'
            onFieldChanged={updateFormData}
            options={currencyOptions}
            isRequired
            errorMessage={formData.toCurrency.errorMessage} />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <TextFormField
            fieldId='amount'
            value={amount.value}
            headerText='Amount'
            onFieldChanged={updateFormData}
            isRequired
            errorMessage={formData.amount.errorMessage} />
        </FormField>
      </FormRow>
      <FormRow>
        <ButtonContainer>
          <Button
            buttonText='GET QUOTE'
            onButtonClicked={getQuote} />
        </ButtonContainer>
      </FormRow>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`
const FormRow = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
  }
`
const FormField = styled.div`
  flex: 1 1 auto;
  margin: 8px 0;

  @media (min-width: ${breakPoints.tablet}) {
    margin-right: ${props => props.rightMargin && '15px'};
    margin-left: ${props => props.leftMargin && '15px'};
  }
`
const ButtonContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
`

export default QuoteForm
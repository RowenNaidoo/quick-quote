import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ buttonText, onButtonClicked }) => (
  <StyledButton onClick={onButtonClicked}>
    {buttonText}
  </StyledButton>
)

const StyledButton = styled.button`
  border-color: #047db1;
  color: #fff;
  background-color: #047db1;
  border: 1px solid transparent;
  margin: 16px 0;
  max-width: 210px;
  min-height: 44px;
  padding: 10px 0 14px 0;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
`

Button.propTypes = {
  buttonText: PropTypes.string,
  onButtonClicked: PropTypes.func
}

export default Button
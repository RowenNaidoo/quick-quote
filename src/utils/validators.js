export const isEmpty = (fieldName) => (val) => {
  if (val === undefined || val === null || val === '') {
    return {
      hasError: true,
      errorMessage: `${fieldName} is required`
    }
  }

  return {
    hasError: false,
    errorMessage: ''
  }
}

export const isValidAmount = (fieldName) => (val) => {
  if(isNaN(val)) {
    return {
      hasError: true,
      errorMessage: `${fieldName} must be a numeric value`
    }
  }

  if(val <= 0) {
    return {
      hasError: true,
      errorMessage: `${fieldName} must be greater than 0`
    }
  }

  return {
    hasError: false,
    errorMessage: ''
  }
}
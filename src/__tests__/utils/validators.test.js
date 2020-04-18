import { isEmpty, isValidAmount} from '../../utils/validators'

describe('#validators', () => {
  describe('#isEmpty', () => {
    let expected = {
      hasError: true,
      errorMessage: `First Name is required`
    }

    test('returns errors for null, undefined and empty values', () => {
      expect(isEmpty('First Name')(null)).toEqual(expected)
      expect(isEmpty('First Name')(undefined)).toEqual(expected)
      expect(isEmpty('First Name')('')).toEqual(expected)
    })
  })

  describe('#isValidAmount', () => {
    test('returns error for non numeric entry', () => {
      let expected = {
        hasError: true,
        errorMessage: `Amount must be a numeric value`
      }
      expect(isValidAmount('Amount')('asd')).toEqual(expected)
    })

    test('returns error for amount less than or equal to 0', () => {
      let expected = {
        hasError: true,
        errorMessage: `Amount must be greater than 0`
      }
      expect(isValidAmount('Amount')(0)).toEqual(expected)
    })
  })
})
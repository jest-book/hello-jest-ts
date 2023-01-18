import { severanceTax } from './severanceTax'

describe('severanceTax', () => {
  it.each([
    [
      'employee',
      'other',
      5,
      3000000,
      {
        incomeTaxAmount: 25000,
        retirementIncomeDeduction: 2000000,
        taxableRetirementIncomeAmount: 500000,
        withholdingTaxAmount: 25524,
      },
    ],
    [
      'employee',
      'other',
      6,
      3000000,
      {
        incomeTaxAmount: 15000,
        retirementIncomeDeduction: 2400000,
        taxableRetirementIncomeAmount: 300000,
        withholdingTaxAmount: 15314,
      },
    ],
    [
      'employee',
      'other',
      5,
      5000000,
      {
        incomeTaxAmount: 75000,
        retirementIncomeDeduction: 2000000,
        taxableRetirementIncomeAmount: 1500000,
        withholdingTaxAmount: 76575,
      },
    ],
    [
      'employee',
      'other',
      6,
      5000000,
      {
        incomeTaxAmount: 65000,
        retirementIncomeDeduction: 2400000,
        taxableRetirementIncomeAmount: 1300000,
        withholdingTaxAmount: 66365,
      },
    ],
    [
      'boardMember',
      'other',
      5,
      5000000,
      {
        incomeTaxAmount: 202500,
        retirementIncomeDeduction: 2000000,
        taxableRetirementIncomeAmount: 3000000,
        withholdingTaxAmount: 206752,
      },
    ],
    [
      'boardMember',
      'other',
      6,
      5000000,
      {
        incomeTaxAmount: 65000,
        retirementIncomeDeduction: 2400000,
        taxableRetirementIncomeAmount: 1300000,
        withholdingTaxAmount: 66365,
      },
    ],
    [
      'employee',
      'disability',
      5,
      5000000,
      {
        incomeTaxAmount: 50000,
        retirementIncomeDeduction: 3000000,
        taxableRetirementIncomeAmount: 1000000,
        withholdingTaxAmount: 51049,
      },
    ],
    [
      'employee',
      'disability',
      6,
      5000000,
      {
        incomeTaxAmount: 40000,
        retirementIncomeDeduction: 3400000,
        taxableRetirementIncomeAmount: 800000,
        withholdingTaxAmount: 40839,
      },
    ],
    [
      'employee',
      'other',
      1,
      5000000,
      {
        incomeTaxAmount: 172500,
        retirementIncomeDeduction: 800000,
        taxableRetirementIncomeAmount: 2700000,
        withholdingTaxAmount: 176122,
      },
    ],
    [
      'employee',
      'other',
      2,
      5000000,
      {
        incomeTaxAmount: 172500,
        retirementIncomeDeduction: 800000,
        taxableRetirementIncomeAmount: 2700000,
        withholdingTaxAmount: 176122,
      },
    ],
    [
      'employee',
      'other',
      20,
      10000000,
      {
        incomeTaxAmount: 50000,
        retirementIncomeDeduction: 8000000,
        taxableRetirementIncomeAmount: 1000000,
        withholdingTaxAmount: 51049,
      },
    ],
    [
      'employee',
      'other',
      21,
      10000000,
      {
        incomeTaxAmount: 32500,
        retirementIncomeDeduction: 8700000,
        taxableRetirementIncomeAmount: 650000,
        withholdingTaxAmount: 33182,
      },
    ],
    [
      'employee',
      'other',
      1,
      999,
      {
        incomeTaxAmount: 0,
        retirementIncomeDeduction: 800000,
        taxableRetirementIncomeAmount: 0,
        withholdingTaxAmount: 0,
      },
    ],
    [
      'employee',
      'other',
      1,
      801000,
      {
        incomeTaxAmount: 0,
        retirementIncomeDeduction: 800000,
        taxableRetirementIncomeAmount: 0,
        withholdingTaxAmount: 0,
      },
    ],
    [
      'boardMember',
      'other',
      1,
      801000,
      {
        incomeTaxAmount: 50,
        retirementIncomeDeduction: 800000,
        taxableRetirementIncomeAmount: 1000,
        withholdingTaxAmount: 51,
      },
    ],
  ])(
    '%s, %s, %s, %s',
    (
      role,
      retirementReason,
      serviceYears,
      retirementIncomeAmount,
      expected,
    ) => {
      expect(
        severanceTax(
          serviceYears,
          retirementReason,
          role,
          retirementIncomeAmount,
        ),
      ).toEqual(expected)
    },
  )
})

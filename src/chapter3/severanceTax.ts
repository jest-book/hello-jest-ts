// 退職者控除額の算出
const calculateRetirementIncomeDeduction = (serviceYears, retirementReason) => {
  // 勤続年数20年以下の場合に退職者控除額は40万円×勤続年数
  // 勤続年数20年超の場合に退職者控除額は800万円+70万円×（勤続年数-20年）
  const baseDeduction =
    serviceYears <= 20
      ? serviceYears * 400000
      : 800000 + 700000 * (serviceYears - 20)

  // 退職基因が障害者の場合（障害者となったことに直接基因して退職した）、100万円を加算
  const retirementReasonBenefit =
    retirementReason === 'disability' ? 1000000 : 0

  // 80万円未満の場合は、退職所得控除額に80万円を設定
  return baseDeduction < 800000
    ? 800000 + retirementReasonBenefit
    : baseDeduction + retirementReasonBenefit
}

// 課税退職所得金額の算出
const calculateTaxableRetirementIncomeAmount = (
  serviceYears,
  role,
  retirementIncomeAmount,
  retirementIncomeDeduction,
) => {
  let taxableRetirementIncomeAmount =
    retirementIncomeAmount - retirementIncomeDeduction

  // taxableRetirementIncomeAmountが1000以下の場合に0を返す（1000円未満は切り捨て）
  if (taxableRetirementIncomeAmount <= 1000) return 0

  // 勤続年数が5年以下の従業員の場合、退職金の額から退職所得控除額を差し引いた残額の300万円以下の金額に対して、1/2を掛けた金額と300万円を超える金額を足した値が課税退職所得金額
  if (serviceYears <= 5 && role === 'employee') {
    taxableRetirementIncomeAmount =
      taxableRetirementIncomeAmount > 3000000
        ? taxableRetirementIncomeAmount - 3000000 + 3000000 * 0.5
        : taxableRetirementIncomeAmount * 0.5
  }

  // 勤続年数が5年超の従業員もしくは役員の場合、退職金の額から退職所得控除額を差し引いた金額に1/2を掛けた金額が課税退職所得金額
  if (serviceYears > 5) {
    taxableRetirementIncomeAmount = taxableRetirementIncomeAmount * 0.5
  }

  // 1000円未満を切り捨て
  return Math.floor(taxableRetirementIncomeAmount / 1000) * 1000
}

// 所得税額の算出
const calculateIncomeTaxAmount = (
  taxableRetirementIncomeAmount,
  incomeTaxMatrix,
) => {
  // 課税退職所得金額に応じた所得税の税率と控除額を取得
  const incomeTaxMatrixItem = incomeTaxMatrix.find(
    item =>
      item.max >= taxableRetirementIncomeAmount &&
      item.min <= taxableRetirementIncomeAmount,
  )

  // 課税退職所得金額に所得税の税率を掛け、控除額を差し引く
  return (
    taxableRetirementIncomeAmount * incomeTaxMatrixItem.taxRate -
    incomeTaxMatrixItem.deduction
  )
}

// 源泉徴収税額の算出
const calicurateWithholdingTaxAmount = incomeTaxAmount => {
  // 復興特別所得税率 2.1%
  const specialIncomeTaxForReconstructionRate = 0.021
  // 源泉徴収税額=所得税額+復興特別所得税額
  const rawWithholdingTaxAmount =
    incomeTaxAmount * (1 + specialIncomeTaxForReconstructionRate)
  // 1円未満の端数は切り捨て
  return Math.floor(rawWithholdingTaxAmount)
}

// メインの処理
export const severanceTax = (
  serviceYears,
  retirementReason,
  role,
  retirementIncomeAmount,
) => {
  // 令和4年の課税退職所得金額に応じた所得税の税率と控除額
  // 課税退職所得金額のレンジ: min, max
  // 所得税の税率: taxRate
  // 所得税の控除額: deduction
  const incomeTaxMatrix = [
    { min: 0, max: 999, taxRate: 0, deduction: 0 },
    { min: 1000, max: 1949000, taxRate: 0.05, deduction: 0 },
    { min: 1950000, max: 3299000, taxRate: 0.1, deduction: 97500 },
    { min: 3300000, max: 6949000, taxRate: 0.2, deduction: 427500 },
    { min: 6950000, max: 8999000, taxRate: 0.23, deduction: 636000 },
    { min: 9000000, max: 17999000, taxRate: 0.33, deduction: 1536000 },
    { min: 18000000, max: 39999000, taxRate: 0.4, deduction: 2796000 },
    { min: 40000000, max: 99999999999, taxRate: 0.45, deduction: 4796000 },
  ]

  // 退職者控除額の算出
  const retirementIncomeDeduction = calculateRetirementIncomeDeduction(
    serviceYears,
    retirementReason,
  )

  // 課税退職所得金額の算出
  const taxableRetirementIncomeAmount = calculateTaxableRetirementIncomeAmount(
    serviceYears,
    role,
    retirementIncomeAmount,
    retirementIncomeDeduction,
  )

  // 所得税額の算出
  const incomeTaxAmount = calculateIncomeTaxAmount(
    taxableRetirementIncomeAmount,
    incomeTaxMatrix,
  )

  // 源泉徴収税額の算出
  const withholdingTaxAmount = calicurateWithholdingTaxAmount(incomeTaxAmount)

  return {
    retirementIncomeDeduction: retirementIncomeDeduction,
    taxableRetirementIncomeAmount: taxableRetirementIncomeAmount,
    incomeTaxAmount: incomeTaxAmount,
    withholdingTaxAmount: withholdingTaxAmount,
  }
}

import { severanceTax } from './severanceTax.js'

// prettier-ignore
(function(){
  const serviceYears = 1 // 勤続年数
  const retirementReason = 'other' // 退職理由 disability or other
  const role = 'employee' // 役職 employee or boardMember
  const retirementIncomeAmount = 1000000 // 退職金 100万

  const result = severanceTax(serviceYears, retirementReason, role, retirementIncomeAmount)
  console.log(result)
})()

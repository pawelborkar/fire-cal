import type { FireInputs, YearProjection, FireSummary } from './types';

export function calculateFireProjections(inputs: FireInputs): {
  projections: YearProjection[];
  summary: FireSummary;
} {
  const {
    principalAmount,
    annualROI,
    numYears,
    totalYearlyExpense,
    inflationRate,
    swrRate,
  } = inputs;

  const projections: YearProjection[] = [];
  let currentBalance = principalAmount;
  let currentExpense = totalYearlyExpense;

  let peakNetWorth = principalAmount;
  let peakYear = 0;
  let totalWithdrawn = 0;
  let totalGains = 0;
  let depletedYear: number | null = null;

  const roiDecimal = annualROI / 100;
  const inflationDecimal = inflationRate / 100;

  for (let year = 1; year <= numYears; year++) {
    const startingAmount = currentBalance;

    if (currentBalance <= 0) {
      if (depletedYear === null) depletedYear = year - 1;
      projections.push({
        year,
        startingAmount: 0,
        yearlyExpense: currentExpense * (1 + inflationDecimal),
        yearlyGains: 0,
        endingAmount: 0,
        realGains: 0,
        depleted: true,
      });
      currentExpense *= 1 + inflationDecimal;
      continue;
    }

    // Expense rises with inflation
    currentExpense = year === 1 ? totalYearlyExpense : currentExpense * (1 + inflationDecimal);
    
    // Withdrawal occurs
    const actualWithdrawal = Math.min(currentBalance, currentExpense);
    totalWithdrawn += actualWithdrawal;
    let balanceAfterWithdrawal = currentBalance - actualWithdrawal;

    let yearlyGains = 0;
    if (balanceAfterWithdrawal > 0) {
      yearlyGains = balanceAfterWithdrawal * roiDecimal;
      totalGains += yearlyGains;
    }

    const endingAmount = Math.max(0, balanceAfterWithdrawal + yearlyGains);
    const realGains = yearlyGains - (startingAmount * inflationDecimal);

    if (endingAmount > peakNetWorth) {
      peakNetWorth = endingAmount;
      peakYear = year;
    }

    if (endingAmount <= 0 && depletedYear === null) {
      depletedYear = year;
    }

    projections.push({
      year,
      startingAmount,
      yearlyExpense: currentExpense,
      yearlyGains,
      endingAmount,
      realGains,
      depleted: endingAmount <= 0,
    });

    currentBalance = endingAmount;
  }

  const effectiveSWR = swrRate > 0 ? swrRate / 100 : 0.04;
  const targetFireCorpus = totalYearlyExpense / effectiveSWR;
  const leanFireCorpus = targetFireCorpus * 0.75;
  const fatFireCorpus = targetFireCorpus * 1.5;
  const baristaFireCorpus = targetFireCorpus * 0.5;

  const isPerpetual = depletedYear === null && currentBalance >= principalAmount * 0.5;
  const yearsSustained = depletedYear === null ? numYears : depletedYear;
  const currentFundingPercent = targetFireCorpus > 0 
    ? Math.min(999, Math.round((principalAmount / targetFireCorpus) * 100))
    : 0;

  const summary: FireSummary = {
    targetFireCorpus,
    leanFireCorpus,
    fatFireCorpus,
    baristaFireCorpus,
    isPerpetual,
    yearsSustained,
    peakNetWorth,
    peakYear,
    totalWithdrawn,
    totalGains,
    finalPortfolioValue: currentBalance,
    currentFundingPercent,
  };

  return { projections, summary };
}

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';

export interface FireInputs {
  principalAmount: number;
  annualROI: number;
  numYears: number;
  totalYearlyExpense: number;
  inflationRate: number;
  selectedCurrency: CurrencyCode;
  swrRate: number; // e.g. 4.0%
}

export interface YearProjection {
  year: number;
  startingAmount: number;
  yearlyExpense: number;
  yearlyGains: number;
  endingAmount: number;
  realGains: number;
  depleted: boolean;
}

export interface FireSummary {
  targetFireCorpus: number;
  leanFireCorpus: number;
  fatFireCorpus: number;
  baristaFireCorpus: number;
  isPerpetual: boolean;
  yearsSustained: number;
  peakNetWorth: number;
  peakYear: number;
  totalWithdrawn: number;
  totalGains: number;
  finalPortfolioValue: number;
  currentFundingPercent: number;
}

export interface FirePreset {
  id: string;
  name: string;
  description: string;
  roi: number;
  inflation: number;
  years: number;
  swr: number;
}

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  locale: string;
  unitCrores?: boolean;
}

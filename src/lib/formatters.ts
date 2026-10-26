import type { CurrencyCode, CurrencyConfig, FirePreset } from './types';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    name: 'Indian Rupee (INR)',
    locale: 'en-IN',
    unitCrores: true,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar (USD)',
    locale: 'en-US',
    unitCrores: false,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro (EUR)',
    locale: 'de-DE',
    unitCrores: false,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound (GBP)',
    locale: 'en-GB',
    unitCrores: false,
  },
  CAD: {
    code: 'CAD',
    symbol: 'C$',
    name: 'Canadian Dollar (CAD)',
    locale: 'en-CA',
    unitCrores: false,
  },
  AUD: {
    code: 'AUD',
    symbol: 'A$',
    name: 'Australian Dollar (AUD)',
    locale: 'en-AU',
    unitCrores: false,
  },
};

export const PRESETS: FirePreset[] = [
  {
    id: 'india-balanced',
    name: 'India Balanced',
    description: '10% Return, 6% Inflation, 4% SWR (Popular Indian equity + debt asset allocation)',
    roi: 10.0,
    inflation: 6.0,
    years: 40,
    swr: 4.0,
  },
  {
    id: 'india-conservative',
    name: 'India Conservative',
    description: '8.5% Return, 6% Inflation, 3.5% SWR (Higher debt/FD allocation for safety)',
    roi: 8.5,
    inflation: 6.0,
    years: 45,
    swr: 3.5,
  },
  {
    id: 'india-aggressive',
    name: 'India Aggressive',
    description: '12% Return, 5.5% Inflation, 4% SWR (High equity, index funds & growth portfolio)',
    roi: 12.0,
    inflation: 5.5,
    years: 35,
    swr: 4.0,
  },
  {
    id: 'global-standard',
    name: 'Global / US Classic',
    description: '8% Return, 3% Inflation, 4% SWR (Classic Trinity Study US / Developed market model)',
    roi: 8.0,
    inflation: 3.0,
    years: 40,
    swr: 4.0,
  },
  {
    id: 'global-conservative',
    name: 'Global Conservative',
    description: '6.5% Return, 2.5% Inflation, 3.3% SWR (Capital preservation focus)',
    roi: 6.5,
    inflation: 2.5,
    years: 50,
    swr: 3.3,
  },
];

/**
 * Format currency in compact form:
 * For INR: Crores (Cr) or Lakhs (L)
 * For others: Millions (M) or Thousands (k)
 */
export function formatCompactCurrency(amount: number, currency: CurrencyCode = 'INR'): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '—';
  const cfg = CURRENCIES[currency] || CURRENCIES.INR;
  const isNegative = amount < 0;
  const abs = Math.abs(amount);

  let formatted = '';
  if (cfg.unitCrores) {
    if (abs >= 10000000) {
      formatted = `${(abs / 10000000).toFixed(2)} Cr`;
    } else if (abs >= 100000) {
      formatted = `${(abs / 100000).toFixed(2)} Lakh`;
    } else if (abs >= 1000) {
      formatted = `${(abs / 1000).toFixed(1)}k`;
    } else {
      formatted = abs.toLocaleString('en-IN');
    }
  } else {
    if (abs >= 1000000000) {
      formatted = `${(abs / 1000000000).toFixed(2)}B`;
    } else if (abs >= 1000000) {
      formatted = `${(abs / 1000000).toFixed(2)}M`;
    } else if (abs >= 1000) {
      formatted = `${(abs / 1000).toFixed(1)}k`;
    } else {
      formatted = abs.toLocaleString(cfg.locale, { maximumFractionDigits: 0 });
    }
  }

  return `${isNegative ? '-' : ''}${cfg.symbol}${formatted}`;
}

/**
 * Format full currency with locale thousand separators
 */
export function formatFullCurrency(amount: number, currency: CurrencyCode = 'INR'): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '—';
  const cfg = CURRENCIES[currency] || CURRENCIES.INR;
  const isNegative = amount < 0;
  const abs = Math.round(Math.abs(amount));

  const numStr = abs.toLocaleString(cfg.locale);
  return `${isNegative ? '-' : ''}${cfg.symbol}${numStr}`;
}

export function formatPercent(value: number, decimals: number = 1): string {
  if (isNaN(value)) return '0%';
  return `${value.toFixed(decimals)}%`;
}

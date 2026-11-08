export const SITE_METADATA = {
  title: 'FIRE Calculator — Financial Independence Retire Early Calculator | Free & Local-First',
  shortTitle: 'FIRE Calculator',
  tagline: 'Calculate your FIRE number, portfolio longevity, and safe withdrawal path',
  description: 'Free, local-first Financial Independence Retire Early (FIRE) calculator. Calculate your FIRE corpus (25x-33x rule), safe withdrawal rate, inflation-adjusted portfolio trajectory, and Lean/Fat/Coast FIRE milestones with zero sign-ups or ads.',
  url: 'https://fire.pawel.in',
  author: 'Pawel Borkar',
  authorUrl: 'https://pawel.in',
  githubUrl: 'https://github.com/pawelborkar/fire-cal',
  relatedAppUrl: 'https://pomodoro.in',
  keywords: [
    'FIRE calculator',
    'financial independence retire early',
    'early retirement calculator',
    'FIRE number calculator',
    '4 percent rule calculator',
    'safe withdrawal rate',
    'crore fire calculator india',
    'lean fire fat fire coast fire',
    'retirement corpus calculator',
    'inflation adjusted retirement calculator',
    'local first fire calculator'
  ],
};

export const FAQ_ITEMS = [
  {
    question: 'What is the FIRE Movement (Financial Independence, Retire Early)?',
    answer: 'The FIRE movement is a lifestyle and financial framework focused on extreme savings, deliberate spending, and smart investing to amass enough assets to retire decades before conventional retirement age. The core philosophy is achieving freedom of time, where working becomes optional rather than mandatory.'
  },
  {
    question: 'How is the FIRE Number calculated?',
    answer: 'The traditional FIRE number is based on the Trinity Study\'s 4% Safe Withdrawal Rate (SWR). It is calculated as 25 times your anticipated annual living expenses (Target Corpus = Annual Expenses × 25). For higher inflation markets like India or for longer horizons (40-50 years), many planners recommend a safer 3% to 3.33% SWR, which equates to 30x to 33x annual expenses.'
  },
  {
    question: 'What is the difference between Lean FIRE, Standard FIRE, Fat FIRE, and Coast FIRE?',
    answer: 'Lean FIRE covers minimal subsistence living (typically ~75% of average expenses). Standard FIRE covers your current baseline comfortable lifestyle (100% of expenses). Fat FIRE accommodates an abundant, luxurious retirement with ample discretionary buffer for travel and luxury (150%+ of expenses). Coast FIRE means you have already invested enough money early in life that compound interest will grow it to your full retirement goal by retirement age, without requiring you to invest another penny.'
  },
  {
    question: 'How does inflation affect my FIRE retirement portfolio?',
    answer: 'Inflation continuously reduces the purchasing power of your money. At 6% annual inflation, your expenses double approximately every 12 years. A reliable FIRE calculator must compound your living expenses upward each year and verify that your investment returns (equity/debt blend) outpace inflation after taxes.'
  },
  {
    question: 'Why should I use a local-first FIRE calculator?',
    answer: 'Financial planning data is deeply sensitive and private. Unlike traditional cloud calculators that log your net worth, expenses, and asset numbers to remote databases for ad targeting, this calculator runs 100% locally in your browser sandbox using client-side JavaScript. No account is required, no analytics track your portfolio, and your data stays on your machine.'
  },
  {
    question: 'What returns (ROI) and inflation rate should I assume for India?',
    answer: 'For long-term Indian portfolios, a balanced asset allocation (e.g. 60-70% Equity Index/Mutual Funds and 30-40% Debt/EPF/PPF/FD) historically targets 10% to 11% nominal annual returns. Long-term consumer price inflation in India typically averages 5.5% to 6.5%. This provides a real return (returns minus inflation) of around 4% to 5%.'
  },
  {
    question: 'What is Sequence of Returns Risk (SRR)?',
    answer: 'Sequence of Returns Risk refers to the danger of experiencing a major market downturn during the first 3 to 5 years of early retirement while you are actively withdrawing money. Experiencing severe losses early depletes the portfolio capital prematurely, permanently damaging its long-term compounding recovery. Holding a 2-3 year emergency cash/debt buffer helps protect against this risk.'
  }
];

export function getStructuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE_METADATA.title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      url: SITE_METADATA.url,
      description: SITE_METADATA.description,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Person',
        name: SITE_METADATA.author,
        url: SITE_METADATA.authorUrl,
      },
      featureList: [
        'Local-First private calculation',
        'Custom ROI and inflation rates',
        'Multi-currency support including INR Lakhs and Crores',
        'Lean, Standard, Fat, and Barista FIRE target calculations',
        'Interactive year-by-year compounding table and chart visualizer',
        'Shareable calculation state via URL query parameters'
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_METADATA.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'FIRE Calculator',
          item: `${SITE_METADATA.url}/#calculator`,
        },
      ],
    },
  ];
}

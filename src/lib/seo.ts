export const SITE_METADATA = {
  title: 'FIRE Calculator — Free Early Retirement & 4% Rule Tool',
  shortTitle: 'FIRE Calculator',
  tagline: 'Calculate your FIRE number, portfolio longevity, and safe withdrawal path',
  description: 'Free, 100% private FIRE calculator. Calculate your early retirement corpus, 4% rule safe withdrawal rate, compounding inflation, and Lean/Fat/Coast milestones with zero ads.',
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
    'free early retirement calculator online',
    'private fire calculator no sign up',
    'coast fire calculator online',
    'fire calculator india lakh crore',
    'can i retire at 40 calculator',
    'sequence of returns risk retirement calculator'
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
    question: 'Can I retire early in India with ₹3 Crore?',
    answer: 'Yes, ₹3 Crore can support early retirement in India depending on your annual lifestyle costs. Using a prudent 3.33% Safe Withdrawal Rate (30x rule), ₹3 Crore generates an initial annual living budget of ₹10 Lakhs (~₹83,300/month). If your current annual expenses are below ₹10 Lakhs, and your portfolio is invested in a balanced 60:40 equity-to-debt mix that outpaces 6% inflation, ₹3 Crore provides a sustainable corpus.'
  },
  {
    question: 'How does the 33x rule differ from the 25x rule?',
    answer: 'The 25x rule equates to a 4% Safe Withdrawal Rate (SWR) based on 30-year US retirement models. The 33x rule equates to a more conservative 3.03% SWR. Financial planners recommend 30x to 33x for retirees aged 30 to 45 who need their portfolio to survive 45 to 50+ years, and for markets with higher consumer price inflation (such as India and emerging economies).'
  },
  {
    question: 'What is Coast FIRE and how do I calculate my Coast FIRE number?',
    answer: 'Coast FIRE is the milestone where you have invested enough money early in your career that compound growth alone will swell the portfolio to your full FIRE retirement corpus by traditional retirement age, without requiring you to invest another penny. The formula is: Coast FIRE Corpus = Target FIRE Corpus ÷ (1 + Annual Real Return)^Years until retirement.'
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
    question: 'Is my financial data kept private on this FIRE calculator?',
    answer: 'Financial planning data is deeply personal and sensitive. Unlike traditional financial tools that save your net worth, expenses, and asset numbers to remote databases for ad targeting, this calculator runs entirely inside your browser. No account or sign-up is required, no trackers log your portfolio, and your data never leaves your device.'
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
      '@type': 'SoftwareApplication',
      name: SITE_METADATA.title,
      operatingSystem: 'All',
      applicationCategory: 'FinanceApplication',
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
        'Private browser-based calculation with zero telemetry or tracking',
        'Custom ROI and compounding inflation rate modeling',
        'Multi-currency support including INR Lakhs and Crores',
        'Safe withdrawal rate (SWR) stress testing (2.5% to 6%)',
        'Lean, Standard, Fat, Barista, and Coast FIRE target calculators',
        'Interactive year-by-year compounding table and chart visualizer',
        'Shareable calculation state via URL query parameters',
        'Downloadable CSV compounding amortization spreadsheet'
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Calculate Your Early Retirement (FIRE) Corpus',
      description: 'Step-by-step methodology to calculate the total invested capital required to achieve financial independence and safely retire early.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Determine Your Baseline Annual Living Expenses',
          text: 'Calculate your total essential costs (housing, groceries, utilities, healthcare) and recurring discretionary spending over the trailing 12 months.'
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select a Safe Withdrawal Rate (SWR)',
          text: 'Choose a sustainable withdrawal percentage based on your retirement horizon: 4% (25x rule) for traditional 30-year horizons, or 3.0% to 3.3% (30x-33x rule) for 40-50+ year horizons.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Model Compounding Inflation and Investment Returns',
          text: 'Set realistic long-term investment return assumptions (e.g. 10% nominal in India, 8% nominal in US/EU) and compound expenses annually by expected inflation (e.g. 6% in India, 3% in US).'
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Inspect Trajectory and Milestone Targets',
          text: 'Compare Lean, Standard, and Fat FIRE corpus targets and analyze portfolio longevity across the full forecast horizon.'
        }
      ]
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

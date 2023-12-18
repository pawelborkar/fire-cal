<script>
  import { onMount } from "svelte";
  import "tailwindcss/tailwind.css";

  let principalAmount = 50000000;
  let annualROI = 10.0;
  let numYears = 40;
  let totalYearlyExpense = 1200000;
  let inflationRate = 4.0;
  let selectedCurrency = "INR";
  let results = [];

  const calculateResults = () => {
    results = [];
    let totalAmount = principalAmount;
    let yearlyExpense = totalYearlyExpense;

    for (let year = 1; year <= numYears; year++) {
      yearlyExpense *= 1 + inflationRate / 100.0;
      totalAmount -= yearlyExpense;

      const roiDecimal = annualROI / 100.0;
      const compoundedAmount = totalAmount * (1 + roiDecimal) ** 1;
      const yearlyGains = compoundedAmount - totalAmount;

      totalAmount = compoundedAmount;

      results.push({
        year,
        totalAmount,
        yearlyGains,
        yearlyExpense,
      });
    }
  };

  onMount(calculateResults);

  const formatCurrency = (amount) => {
    const amountInCrores = amount / 10000000;
    return `${amountInCrores.toFixed(3)} crores`;
  };
</script>

<main>
  <hr />
  <h1>FIRE Calculator</h1>
  <hr />
  <br />
  <label>
    Principal Amount:
    <input type="number" bind:value={principalAmount} />
  </label>

  <label>
    Annual ROI:
    <span>{annualROI}%</span>
    <input type="range" min="0" max="20" step="0.5" bind:value={annualROI} />
  </label>

  <label>
    Number of Years:
    <input type="number" bind:value={numYears} />
  </label>

  <label>
    Yearly Expense:
    <input type="number" bind:value={totalYearlyExpense} />
  </label>

  <label>
    Inflation Rate:
    <span>{inflationRate}%</span>
    <input
      type="range"
      min="0"
      max="10"
      step="0.5"
      bind:value={inflationRate}
    />
  </label>

  <label>
    Select Currency:
    <select bind:value={selectedCurrency}>
      <option value="INR">Indian Rupees (INR)</option>
      <option value="USD">US Dollars (USD)</option>
      <!-- Add more currency options as needed -->
    </select>
  </label>

  <button on:click={calculateResults}>Calculate</button>

  {#if results.length > 0}
    <h2>Results:</h2>
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Amount</th>
          <th>Yearly Gains</th>
          <th>Yearly Expenses</th>
        </tr>
      </thead>
      <tbody>
        {#each results as { year, totalAmount, yearlyGains, yearlyExpense }}
          <tr>
            <td>{year}</td>
            <td>{formatCurrency(totalAmount)}</td>
            <td>{formatCurrency(yearlyGains)}</td>
            <td>{formatCurrency(yearlyExpense)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</main>

<style>
  /* Tailwind styles are applied directly to the elements */

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  label {
    display: block;
    margin-bottom: 12px;
  }

  input,
  select,
  button {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #293241;
  }

  button {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    background-color: #293241;
    width: 100%;
    margin-top: 20px;
  }

  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #333333;
  }

  @media (max-width: 600px) {
    table {
      font-size: 12px;
    }
  }
</style>

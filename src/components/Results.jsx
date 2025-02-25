import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const calculatedResult = calculateInvestmentResults(userInput);

  console.log(calculatedResult);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Annual Investment</th>
          <th>Interest</th>
          <th>Value End Of Year</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.annualInvestment}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{data.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

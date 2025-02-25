import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/userInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((oldState) => ({ ...oldState, [inputIdentifier]: +newValue }));
  }

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onInputChange={handleInputChange}></UserInput>
        <Results userInput={userInput} />
      </main>
      ;
    </>
  );
}

export default App;

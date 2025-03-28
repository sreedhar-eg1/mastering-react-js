import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enterdValue, setEnteredValue] = useState(defaultValue);

  const [inputBlured, setInputBlured] = useState(false);

  const valueIsValid = validationFn(enterdValue);

  function handleInputBlur() {
    setInputBlured(true);
  }

  function handleValuechange(event) {
    setEnteredValue(event.target.value);
    setInputBlured(false)
  }

  return {
    value: enterdValue,
    handleValuechange,
    handleInputBlur,
    hasError: inputBlured && !valueIsValid
  }
}

import { useState } from "react";

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handleValueChange, resetValue];
}

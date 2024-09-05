import React, { useState } from 'react';

interface BudgetInputProps {
  budget: number;
  setBudget: (newBudget: number) => void; 
}

function BudgetInput({ budget, setBudget }: BudgetInputProps) {
  const [inputValue, setInputValue] = useState(budget);  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value)); 
  };

  const handleSetBudget = () => {
    setBudget(inputValue); 
  };

  return (
    <div>
      <label htmlFor="budget">Define Budget:</label>
      <input
        type="number"
        id="budget"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSetBudget}>Set Budget</button>
    </div>
  );
}

export default BudgetInput;



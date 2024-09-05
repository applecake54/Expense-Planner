
import { useState } from 'react';
import { Expense } from '../../types';

interface NewExpenseFormProps {
  onNewExpense: (expense: Expense) => void;
}

function NewExpenseForm({ onNewExpense }: NewExpenseFormProps) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('No category');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

   
    const newExpense: Expense = {
      name,
      amount,
      category,
    };

    onNewExpense(newExpense);  

    
    setName('');
    setAmount(0);
    setCategory('No category');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <label>
        Amount:
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="No category">No category</option>
          <option value="Food">Food</option>
          <option value="Healthy">Healthy</option>
          <option value="Entertainment">Entertainment</option>
          <option value="pet">Pet</option>
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default NewExpenseForm;


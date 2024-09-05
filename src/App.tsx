import './App.css';
import BudgetInput from './components/BudgetInput/BudgetInput';
import Stats from './components/Stats/Stats';
import ExpenseList from './components/ExpenseList/ExpenseList';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import { Expense } from './types'; 
import { useState } from 'react';

function App() {
  const [budget, setBudget] = useState(0); 
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filter, setFilter] = useState('All');  

  
  const handleNewExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);  
  };

  
  const handleFilterChange = (selectedCategory: string) => {
    setFilter(selectedCategory);
  };

 
  const filteredExpenses = filter === 'All' 
    ? expenses 
    : expenses.filter((expense) => expense.category === filter);

 
  const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="app">
      <h1>Expense Planner</h1>
      <BudgetInput budget={budget} setBudget={setBudget} />
      <Stats budget={budget} spent={totalSpent} />
      <CategoryFilter filter={filter} onFilterChange={handleFilterChange} />
      <ExpenseList expenses={filteredExpenses} />
      <NewExpenseForm onNewExpense={handleNewExpense} />
    </div>
  );
}

export default App;

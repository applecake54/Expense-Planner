
import { Expense } from '../../types';

interface ExpenseListProps {
  expenses: Expense[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - ${expense.amount} - {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

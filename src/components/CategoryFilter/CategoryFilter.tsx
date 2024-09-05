

interface CategoryFilterProps {
  filter: string;
  onFilterChange: (category: string) => void;
}

function CategoryFilter({ filter, onFilterChange }: CategoryFilterProps) {
  return (
    <div className="filters">
      <label >Filter categories:</label>
      <select 
        id="category-filter" 
        value={filter} 
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Healthy">Healthy</option>
        <option value="Entertainment">Entertainment</option>
        <option value="pet">Pet</option>
      </select>
    </div>
  );
}

export default CategoryFilter;



import './Stats.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface StatsProps {
  budget: number;
  spent: number;
}

function Stats({ budget, spent }: StatsProps) {
  const percentage = budget > 0 ? (spent / budget) * 100 : 0;  

  const graphicStyle = {
    pathColor: `#a71fd0`,
    textColor: '#a71fd0',
  };

  return (
    <section className='stats'>
      <div className='progress-container'>
      <CircularProgressbar 
        maxValue={budget} 
        value={percentage} 
        text={`${percentage.toFixed(0)}%`} 
        styles={buildStyles(graphicStyle)}
      /></div>
      <div>
        <h3>Budget: ${budget}</h3>
        <h3>Remaining: ${budget - spent}</h3>
        <h3>Spent: ${spent}</h3>
      </div>
    </section>
  );
}

export default Stats;

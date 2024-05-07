import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

function ExpenseItem({expenseDate, title, amount, currency}) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}{currency}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem
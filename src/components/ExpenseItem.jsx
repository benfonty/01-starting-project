import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseDate}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}{props.currency}</div>
      </div>
    </div>
  );
}

export default ExpenseItem
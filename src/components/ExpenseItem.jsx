import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>{props.expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}{props.currency}</div>
      </div>
    </div>
  );
}

export default ExpenseItem
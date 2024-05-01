import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2024, 5, 1);
  const title = "books"
  const amount = 23;
  const currency = "€";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}{currency}</div>
      </div>
    </div>
  );
}

export default ExpenseItem
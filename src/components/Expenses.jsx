import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  return (<div className="expenses">{props.items.map(
    (item, index) =>
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        expenseDate={item.expenseDate}
        currency={item.currency}>
      </ExpenseItem>)
  }
  </div>)
}

export default Expenses
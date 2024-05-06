import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  return (<Card className="expenses">{props.items.map(
    (item, index) =>
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        expenseDate={item.expenseDate}
        currency={item.currency}>
      </ExpenseItem>)
  }
  </Card>)
}

export default Expenses
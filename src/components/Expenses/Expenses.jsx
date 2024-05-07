import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses({items}) {
  return (<Card className="expenses">{items.map(
    (item, index) => <ExpenseItem key={index} {...item} />
  )
  }
  </Card>)
}

export default Expenses
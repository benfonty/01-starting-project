import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      expenseDate: new Date(2024, 5, 1),
      title: "books",
      amount: 23,
      currency: "€"
    },
    {
      expenseDate: new Date(2024, 5, 2),
      title: "food",
      amount: 15,
      currency: "€"
    },
    {
      expenseDate: new Date(2024, 4, 1),
      title: "restaurant",
      amount: 110,
      currency: "€"
    }
  ]


  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        {expenses.map(
          (expense, index) =>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              expenseDate={expense.expenseDate}
              currency={expense.currency}>

            </ExpenseItem>)
        }
      </main>
    </div>
  );
}

export default App;

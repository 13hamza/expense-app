import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
    id: "e1",
    date: new Date(2023,11,16),
    amount: 4000,
    title: "car",
  },
  {
    id: "e2",
    date: new Date(2023,11,26),
    amount: 5000,
    title: "bike",
  },
  {
    id: "e3",
    date: new Date(2023,11,12),
    amount: 20000,
    title: "house",
  },
];
  return (
    <div>
    <div>
      <ExpenseItem title={expenses[0].title}
      date={expenses[0].date}
      amount={expenses[0].amount}/>
    </div>
    <div>
    <ExpenseItem title={expenses[1].title}
    date={expenses[1].date}
    amount={expenses[1].amount}/>
  </div>
  </div>
  );
}

export default App;

import ExpenseSheet from "./components/ExpenseSheet";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 204.12, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 12.42, date: new Date(2021, 6, 28) },
    { title: "Pencils", amount: 5.54, date: new Date(2021, 2, 12) },
    { title: "Water Bottle", amount: 1.21, date: new Date(2020, 2, 28) },
  ];
  return (
    <div>
      <ExpenseSheet items={expenses} />
    </div>
  );
}

export default App;

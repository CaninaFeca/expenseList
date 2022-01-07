import ExpenseItem from "./ExpenseItem";
import "./ExpenseSheet.css";
import Card from "../UI/Card";

function ExpenseSheet(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default ExpenseSheet;

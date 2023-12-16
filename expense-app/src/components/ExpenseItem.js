import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    const date = new Date(2023, 11,16);
    return(
    <>
    <div class="">
    <div>{props.date.toISOString()}</div>
    <div class="">
        <h2>{props.title}</h2>
        <div>{props.amount}</div>
    </div>
    </div>
    </>
    );
}
export default ExpenseItem;
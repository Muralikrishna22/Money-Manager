import './index.css'

const TransactionItem = props => {
  const {transactionItemDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionItemDetails

  const onClickDeleteBtn = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-list-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="delete-btn"
        testId="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem

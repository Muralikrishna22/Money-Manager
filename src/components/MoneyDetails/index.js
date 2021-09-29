import './index.css'

const MoneyDetails = props => {
  const {expensesAmount, incomeAmount, balanceAmount} = props

  return (
    <div className="detail-cards-container">
      <div className="your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div>
          <p>Your Balance </p>
          <p testId="balanceAmount" className="money">
            RS.{balanceAmount}
          </p>
        </div>
      </div>
      <div className="your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div>
          <p>Your Income </p>
          <p testId="incomeAmount" className="money">
            RS.{incomeAmount}
          </p>
        </div>
      </div>
      <div className="your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div>
          <p>Your Expenses </p>
          <p testId="expensesAmount" className="money">
            RS.{expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

// https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png alt should be income
// https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png alt should be expenses
//  alt should be delete

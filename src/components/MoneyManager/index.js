import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    activeOptionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  addTransaction = event => {
    event.preventDefault()

    const {transactionList, title, amount, activeOptionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachType => eachType.optionId === activeOptionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState({
      transactionList: [...transactionList, newTransaction],
      title: '',
      amount: '',
      activeOptionId: transactionTypeOptions[0].optionId,
    })
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTransactionType = event => {
    this.setState({activeOptionId: event.target.value})
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.amount
      }
    })
    return expenses
  }

  getBalance = () => {
    const {transactionList} = this.state
    let income = 0
    let expenses = 0
    let balance = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expenses += eachTransaction.amount
      }
    })
    balance = income - expenses

    return balance
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state

    const filteredTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: filteredTransactionList})
  }

  render() {
    const {transactionList, title, amount, optionId} = this.state

    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    const balanceAmount = this.getBalance()

    return (
      <div className="app-container">
        <div className="header">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            welcome back to your
            <span className="money-manager"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
          balanceAmount={balanceAmount}
        />
        <div className="transaction-container">
          <form
            className="add-transaction-container "
            onSubmit={this.addTransaction}
          >
            <h1 className="heading">Add Transaction</h1>
            <label className="label" htmlFor="titleInput">
              TITLE
            </label>
            <input
              className="input"
              id="titleInput"
              type="text"
              placeholder="TITLE"
              onChange={this.onChangeTitleInput}
              value={title}
            />
            <label className="label" htmlFor="amountInput">
              AMOUNT
            </label>
            <input
              className="input"
              id="amountInput"
              type="text"
              placeholder="AMOUNT"
              onChange={this.onChangeAmountInput}
              value={amount}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              id="type"
              className="input"
              value={optionId}
              onChange={this.onChangeTransactionType}
            >
              {transactionTypeOptions.map(eachType => (
                <option key={eachType.optionId} value={eachType.optionId}>
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button
              className="add-btn"
              type="button"
              onClick={this.addTransaction}
            >
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="heading">History</h1>
            <ul className="transaction-list">
              <li className="table">
                <p>Title</p>
                <p>Amount </p>
                <p>Type</p>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionItemDetails={eachTransaction}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

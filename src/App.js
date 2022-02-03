import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from './components/PasswordItem'
import './App.css'

const initialBackgroundClass = [
  'backgroundColor1',
  'backgroundColor2',
  'backgroundColor3',
  'backgroundColor4',
  'backgroundColor5',
  'backgroundColor6',
]

class App extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    isChecked: true,
  }

  changeCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  changeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  changePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  submitPasswords = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialBackgroundClass[
        Math.ceil(Math.random() * initialBackgroundClass.length - 1)
      ]
    }`

    const newList = {
      id: v4(),
      website: websiteInput,
      userName: userNameInput,
      password: passwordInput,
      backgroundColor: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onDeleteListItem = id => {
    const {passwordList} = this.state

    const deletedList = passwordList.filter(eachItem => eachItem.id !== id)

    this.setState({passwordList: deletedList})
  }

  render() {
    const {
      passwordList,
      websiteInput,
      userNameInput,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state

    const filteredList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const listLength = filteredList.length

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-class"
          />
          <div className="top-container">
            <div className="form-container">
              <h1 className="heading">Add New Password</h1>
              <form onSubmit={this.submitPasswords}>
                <div className="form-item-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="form-images"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input-class"
                    value={websiteInput}
                    onChange={this.changeWebsite}
                  />
                </div>
                <div className="form-item-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="form-images"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input-class"
                    value={userNameInput}
                    onChange={this.changeUserName}
                  />
                </div>
                <div className="form-item-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="form-images"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-class"
                    value={passwordInput}
                    onChange={this.changePassword}
                  />
                </div>
                <div className="btn-container">
                  <button type="submit" className="add-btn">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager"
              />
            </div>
          </div>
          <div className="bottom-container">
            <div className="password-search-container">
              <div className="your-passwords-container">
                <h1 className="password-heading">Your Passwords</h1>
                <p className="span-class">{listLength}</p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="form-images"
                />
                <input
                  type="search"
                  placeholder="search"
                  className="input-class"
                  value={searchInput}
                  onChange={this.changeSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="upper-container-for-checkbox">
              <div className="check-box-container">
                <input
                  id="checkBox"
                  type="checkbox"
                  value={isChecked}
                  onChange={this.changeCheckBox}
                />
                <label htmlFor="checkBox" className="check-box-text">
                  Show passwords
                </label>
              </div>
            </div>
            {listLength === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-img"
                />
                <p className="no-pswd-para">No Passwords</p>
              </div>
            ) : (
              <ul className="list-container">
                {filteredList.map(eachItem => (
                  <PasswordItem
                    passwordDetails={eachItem}
                    key={eachItem.id}
                    onDeleteListItem={this.onDeleteListItem}
                    isChecked={isChecked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App

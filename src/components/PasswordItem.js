import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeleteListItem, isChecked} = props
  const {id, website, userName, password, backgroundColor} = passwordDetails

  const deleteItem = () => {
    onDeleteListItem(id)
  }

  return (
    <li className="list-item">
      <div className="initial-input-container">
        <div className={backgroundColor}>
          <p className="initial">{website[0]}</p>
        </div>
        <div className="input-elements-container">
          <p className="input-elements">{website}</p>
          <p className="input-elements">{userName}</p>
          {isChecked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-class"
            />
          ) : (
            <p className="input-elements">{password}</p>
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        testid="delete"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem

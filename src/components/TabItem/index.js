import './index.css'

const TabItem = props => {
  const {tabDetails, upDateactiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickStatic = () => {
    upDateactiveTabId(tabId)
  }

  const activeTabIsON = isActive ? 'active-tab-btn' : null

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabIsON} `}
        onClick={onClickStatic}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

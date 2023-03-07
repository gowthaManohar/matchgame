import './index.css'

const TabItem = props => {
  const {tabData, isActive, changeActiveTab} = props
  const {displayText, tabId} = tabData

  const active = isActive ? 'active-tab' : null

  const tabChange = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className="tabItem">
      <button
        type="button"
        onClick={tabChange}
        className={`tab-button ${active}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

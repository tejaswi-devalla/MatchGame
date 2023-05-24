import './index.css'

const TabList = props => {
  const {eachItem, activeTab, isTabActive} = props
  const {tabId, displayText} = eachItem

  const onClickDisplayTextBtn = () => {
    activeTab(tabId)
  }

  const activeOrNot = isTabActive ? 'displayText-btn active' : 'displayText-btn'

  return (
    <li className="list-items">
      <button
        type="button"
        className={activeOrNot}
        onClick={onClickDisplayTextBtn}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabList

/* eslint-disable react/prop-types */
function TabButton({tabName, activeTab,handleChangeTag}) {
    return (
        <button 
            className={activeTab === tabName ? 'active' : ''}
            onClick={() => handleChangeTag(tabName)}
        >
            {tabName}
        </button>
    )
}

export default TabButton

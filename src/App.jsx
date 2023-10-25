import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import GameTable from './components/GameTable'
import GroupStandings from './components/GroupStandings'


import TournamentBracket from './components/TournamentBracket'
import TabButton from './components/TabButton'
// import Fixture from './components/Fixture'
// import KnockoutStage from './components/KnockoutStage'

function App() {

  const [activeTab, setActiveTab] = useState('')

  function handleChangeTag(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch (activeTab) {
      case 'Grupos':
        return (
          <section className='cards'>
            <Card />
          </section>
        )
      case 'Tabela de Jogos':
        return <GameTable />
      case 'Classificação':
        return <GroupStandings />
      case 'Oitavas':
        return <TournamentBracket fase='oitavas' />
      case 'Quartas':
        return <TournamentBracket fase='quartas' />
      case 'Semifinais':
        return <TournamentBracket fase='semifinais' />
      case 'Finais':
        return <TournamentBracket fase='finais' />
    }
  }

  return (
    <>
      <h1>Copa do Mundo Feminina 2023</h1>

      <section className='knockout_table'>

        <div className='tabs'>
          <TabButton tabName='Grupos' activeTab={activeTab} handleChangeTag={handleChangeTag} />
          <TabButton tabName='Tabela de Jogos' activeTab={activeTab} handleChangeTag={handleChangeTag} />
          <TabButton tabName='Classificação' activeTab={activeTab} handleChangeTag={handleChangeTag} />
          <TabButton tabName='Oitavas' activeTab={activeTab} handleChangeTag={handleChangeTag} />
          <TabButton tabName='Quartas' activeTab={activeTab} handleChangeTag={handleChangeTag} />
          <TabButton tabName='Semifinais' activeTab={activeTab} handleChangeTag={handleChangeTag} />
          <TabButton tabName='Finais' activeTab={activeTab} handleChangeTag={handleChangeTag} />
        </div>

        <div className='tab_content'>
          {renderTabContent()}
        </div>

      </section>
    </>
  )
}

export default App

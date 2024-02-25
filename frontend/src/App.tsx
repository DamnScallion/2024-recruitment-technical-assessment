import React from 'react'
import SideBar from './components/SideBar'
import Main from './components/Main'

const App: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <SideBar />
    <Main />
  </div>
);

export default App

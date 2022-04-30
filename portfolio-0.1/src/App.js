import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ToolBar from './ToolBar'
import Backdrop from './Backdrop';

const App = () => {

  const[Sidebar, setSidebar] = useState (false)

  const toghleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <div>
      <ToolBar openSidebar = {toggleSidebar}/>
      <Backdrop/>
      <Sidebar/>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ToolBar from './ToolBar'
import Backdrop from './Backdrop';

const App = () => {

  const[sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <div>
      <ToolBar openSidebar = {toggleSidebar}/>
      <Backdrop/>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default App
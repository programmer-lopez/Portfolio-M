import React from 'react';

const Backdrop = (Sidebar, closeSidebar) => {
  return (
    <div className={Sidebar?"backdrop backdrop--open":"backdrop"} onClick={closeSidebar}></div>
  )
}

export default Backdrop
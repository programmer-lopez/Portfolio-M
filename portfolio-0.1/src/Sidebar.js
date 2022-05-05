import React from 'react'

const Sidebar = ({sidebar}) => {
  return (
    <div className={Sidebar?"sidebar sidebar--open":"sidebar"}>
        <li class="ri-home-gear-fill">Home</li>
        <li class="ri-account-pin-circle-line">Carrer</li>
        <li class="ri-contacts-line">Contact</li>
        <li class="ri-information-line">About Us</li>
    </div>
  )
}

export default Sidebar
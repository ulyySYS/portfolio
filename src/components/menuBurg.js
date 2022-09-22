import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import { useState } from "react";

/*      ....../BURGER MENU/......     */
/*code copied from: https://codesandbox.io/s/nmy6x9wrj?file=/src/styles.css */
const MenuBurg = () => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  return (
    <Menu right 
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          isOpen={isOpen}>
      <Link className="menu-item" to="/" onClick={closeSideBar}>
        Home
      </Link>
      <hr/>
      <Link className="menu-item" to="/about-me" onClick={closeSideBar}>
        More About ME
      </Link>
      <hr/>
      <Link className="menu-item" to="/home" onClick={closeSideBar}>
        Contacts<br/>
        (scroll down)
      </Link>
      <hr/>
      <a className="menu-item" 
            href="https://pdfhost.io/v/271DkhLoy_Resume"
            target="_blank" 
            rel="noreferrer"
            onClick={closeSideBar}>
        Resume
      </a>
  </Menu>
  )
}

export default MenuBurg
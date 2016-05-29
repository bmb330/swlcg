/**
*
* NavBar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavSearch from '../NavSearch';

import styles from './styles.css';

function NavBar({ searchOpen, toggleSearch }) {
  return (
    <AppBar
      className={searchOpen ? styles.navBarSearchOpen : styles.navBarSearchClosed}
      title="SWLCG"
      iconElementRight={<NavSearch searchOpen={searchOpen} toggleSearch={toggleSearch}/>}
    />
  );
}

export default NavBar;

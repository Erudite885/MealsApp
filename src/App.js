import React from 'react'

import {Search, Meals, Modal, Favorites} from './components/index';
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.wrapper}>
     <h1>Meals App </h1>
     {/* <Search /> */}
     {/* <Favorites /> */}
     <Meals />
     {/* <Modal /> */}
    </div>
  );
}

export default App
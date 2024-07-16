import React from 'react';
import { NavigationDots, SocalMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocalMedia/>

        <div className='app__wrapper app__flex'>
            <Component/>

            <div className='copyright'>
                <p>©2024 VELID</p>
                <p>All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;
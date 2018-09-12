import React from 'react';
import { hot } from 'react-hot-loader';
import Button from 'Components/button';
import style from './app.scss';

const App = () => (
  <div className={style.app}>
    React Starter
    <span role="img" aria-label="rocket ship">
      🚀
    </span>
    <Button />
    <div className={style.sassyDiv}>Get Sassy!</div>
  </div>
);

export default hot(module)(App);

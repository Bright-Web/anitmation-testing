import React from 'react';
import cn from 'classnames';
import style from './icon.mod.scss';
import Chat from '../global/icons/chat';

const Icon = ({ icon, theme = 'none', dark = false }) => {
  const classes = cn(style.icon, {
    [style[`icon--theme-${theme}`]]: theme,
    [style[`icon--dark`]]: dark
  });

  const getIcon = () => {
    if (icon === 'Chat') return <Chat />;
  };

  return (
    <div className={classes}>
      <div className={style.icon__wrap}>{getIcon()}</div>
    </div>
  );
};

export default Icon;

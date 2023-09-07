import React from 'react';
import cn from 'classnames';
import style from './container.mod.scss';

const Container = ({
  children,
  size = 'none',
  gutters = false,
  bg = 'None',
}) => {
  const classes = cn(style.container, style[`container--size-${size}`], {
    [style[`container--gutters`]]: gutters,
    [style[`container--background-${bg}`]]: bg,
  });

  return <div className={classes}>{children}</div>;
};

export default Container;

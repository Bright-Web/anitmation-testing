import React from 'react';
import cn from 'classnames';
import style from './text.mod.scss';

const Text = ({ text, size = 'md', light = false, dark = false }) => {
  const classes = cn(style.text, {
    [style[`text--size-${size}`]]: size,
    [style[`text--color-light`]]: light,
    [style[`text--color-dark`]]: dark,
    [style[`text--color-dark`]]: dark,
  });

  return <div className={classes}>{text}</div>;
};

export default Text;

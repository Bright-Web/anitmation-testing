import * as React from 'react';
import cn from 'classnames';
import style from './heading.mod.scss';

const Heading = ({ tag = 1, text, size, light = false, primary = false }) => {
  const Tag = `h${tag}`;
  const classes = cn(style.heading, {
    [style[`heading--size-${size}`]]: size,
    [style[`heading--color-light`]]: light,
    [style[`heading--color-primary`]]: primary,
  });

  return (
    <div className={classes}>
      <Tag className={style.heading__text}>{text}</Tag>
    </div>
  );
};

export default Heading;

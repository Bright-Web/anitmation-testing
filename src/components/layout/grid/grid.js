import React from 'react';
import cn from 'classnames';
import style from './grid.mod.scss';

const Grid = ({ children, columns = 1, gap = 1, sm, md, lg }) => {
  const classes = cn(style.grid, {
    [style[`grid--columns-${columns}`]]: columns,
    [style[`grid--columns-sm-${sm}`]]: sm,
    [style[`grid--columns-md-${md}`]]: md,
    [style[`grid--columns-lg-${lg}`]]: lg,
    [style[`grid--gap-${gap}`]]: gap,
  });

  return <div className={classes}>{children}</div>;
};

export default Grid;

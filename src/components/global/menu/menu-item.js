import React from 'react';
import cn from 'classnames';
import style from './menu-item.mod.scss';
import MenuLink from './menu-link';
import MenuDropdown from './menu-dropdown';

const MenuItem = (props) => {
  const classes = cn(style.item);

  return (
    <div className={classes}>
      {props.subLinks?.length > 0 ? (
        <MenuDropdown {...props} />
      ) : (
        <MenuLink {...props} />
      )}
    </div>
  );
};

export default MenuItem;

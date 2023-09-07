import React, { useState } from 'react';
import cn from 'classnames';
import style from './menu-dropdown.mod.scss';
import MenuLink from './menu-link';
import { AnimatePresence, motion } from 'framer-motion';

const MenuDropdown = (props) => {
  const classes = cn(style.dropdown);

  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  return (
    <motion.div
      className={classes}
      onMouseEnter={toggleHoverMenu}
      onMouseLeave={toggleHoverMenu}
    >
      <MenuLink {...props} dropdown isHover={isHover} />
      <AnimatePresence>
        {isHover && (
          <motion.div
            className={style.dropdown__menu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul>
              {props.subLinks.map((item) => (
                <MenuLink {...item} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MenuDropdown;

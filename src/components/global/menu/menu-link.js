import React from 'react';
import cn from 'classnames';
import style from './menu-link.mod.scss';
import { motion } from 'framer-motion';

const MenuLink = ({ title, link, dropdown = false, isHover }) => {
  const classes = cn(style.link);

  return (
    <li className={classes}>
      <a href={link}>
        {title}
        {dropdown && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 8"
            animate={{ rotate: isHover ? 180 : 0 }}
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
              d="m11 6.5-5-5-5 5"
            />
          </motion.svg>
        )}
      </a>
    </li>
  );
};

export default MenuLink;

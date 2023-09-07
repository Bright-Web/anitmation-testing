import React from 'react';
import { motion } from 'framer-motion';

const Burger = ({ isOpen }) => {
  return (
    <svg viewBox="0 0 23 23">
      <motion.path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
      />
    </svg>
  );
};

export default Burger;

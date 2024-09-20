// src/components/Icon.jsx
import React from 'react';
import { ReactComponent as IconSvg } from './assets/svg/selected.svg';

const ArrowNav = ({ color = 'currentColor' }) => (
  <IconSvg className={`text-${color}`} />
);

export default ArrowNav;

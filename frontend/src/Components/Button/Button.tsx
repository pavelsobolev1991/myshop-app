import React from 'react';
import './Button.scss'

import { ButtonOpen } from '../../models';

const Button: React.FC<ButtonOpen> = ({open, text}) => {

  return (
    <>
      <button className='btn' onClick={open}>{text}</button>
    </>
  );
}

export default Button;

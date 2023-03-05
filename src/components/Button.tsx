import React from 'react';
import { TButtonProps } from '../utils/types';

export const Button = ({ bgColor, color, size, text, borderRadius }: TButtonProps): JSX.Element => {
  return (
    <button type='button'
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={`text-${size as string} p-3 hover:drop-shadow-xl hover:bg-light-gray text-white`}>
      {text}
    </button>
  );
};

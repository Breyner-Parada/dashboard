import React from 'react';
import { useStateValue } from '../contexts/ContextProvider';
import { TButtonProps } from '../utils/types';

export const Button = ({ bgColor, color, size, text, borderRadius, icon, width, bgHoverColor }: TButtonProps): JSX.Element => {
  const { handleClick, isClicked } = useStateValue();

  return (
    <button
      type="button"
      onClick={() => { handleClick(isClicked); }}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

import React, { useContext, createContext, useState } from 'react';
import { TState, TAction } from '../utils/types';

const initialState = {
  activeMenu: true,
  setActiveMenu: () => { },
  isClicked: { chat: false, notification: false, cart: false, userProfile: false },
  handleClick: () => { },
  screenWidth: undefined,
  setScreenWidth: () => { }
};

const StateContext = createContext<TState>(initialState);

interface Props {
  children?: React.ReactNode
};

export const ContextProvider = ({ children }: Props): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<boolean>(initialState.activeMenu);
  const [isClicked, setIsClicked] = useState<TAction>(initialState.isClicked);
  const [screenWidth, setScreenWidth] = useState<any>(initialState.screenWidth);

  const handleClick = (name: string): void => {
    setIsClicked(() => ({ ...initialState.isClicked, [name]: true }));
  };
  return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, handleClick, screenWidth, setScreenWidth }}>
            {children}
        </StateContext.Provider>
  );
};

export const useStateValue = (): TState => useContext(StateContext);

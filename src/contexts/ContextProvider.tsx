import React, { useContext, createContext, useState, ChangeEvent } from 'react';
import { TState, TAction } from '../utils/types';

const initialState = {
  activeMenu: true,
  setActiveMenu: () => { },
  isClicked: { chat: false, notification: false, cart: false, userProfile: false },
  handleClick: () => { },
  screenWidth: undefined,
  setScreenWidth: () => { },
  currentColor: '#03C9D7',
  setMode: () => { },
  currentMode: 'Light',
  setColor: () => { },
  themeSettings: false,
  setThemeSettings: () => { }
};

const StateContext = createContext<TState>(initialState);

interface Props {
  children?: React.ReactNode
};

export const ContextProvider = ({ children }: Props): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<boolean>(initialState.activeMenu);
  const [isClicked, setIsClicked] = useState<TAction>(initialState.isClicked);
  const [screenWidth, setScreenWidth] = useState<any>(initialState.screenWidth);
  const [currentColor, setCurrentColor] = useState<string>(initialState.currentColor);
  const [currentMode, setCurrentMode] = useState<string>(initialState.currentMode);
  const [themeSettings, setThemeSettings] = useState<boolean>(initialState.themeSettings);

  const handleClick = (name: any): void => {
    setIsClicked(() => ({ ...initialState.isClicked, [name]: true }));
  };

  const setMode = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentMode(e.target.value);
    localStorage.setItem('theme', e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color: string): void => {
    setCurrentColor(color);
    localStorage.setItem('color', color);
    setThemeSettings(false);
  };
  return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, handleClick, screenWidth, setScreenWidth, currentColor, currentMode, setColor, setMode, themeSettings, setThemeSettings }}>
            {children}
        </StateContext.Provider>
  );
};

export const useStateValue = (): TState => useContext(StateContext);

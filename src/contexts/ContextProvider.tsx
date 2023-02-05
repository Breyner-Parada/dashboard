import React, { useContext, createContext, useState } from 'react';
import { TState } from '../utils/types';

const initialState = {
  // activeChat: false,
  // activeCart: false,
  // userProfile: false,
  // notification: false
};
const StateContext = createContext<TState>({
  activeMenu: true,
  setActiveMenu: () => { }
});

interface Props {
  children?: React.ReactNode
};

export const ContextProvider = ({ children }: Props): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
            {children}
        </StateContext.Provider>
  );
};

export const useStateValue = (): TState => useContext(StateContext);

import { ChangeEvent } from 'react';

export type TState = {
  activeMenu: boolean
  setActiveMenu: (activeMenu: ((arg: boolean) => boolean) | boolean) => void
  isClicked: TAction
  handleClick: (name: object | string) => void
  screenWidth: any
  setScreenWidth: (screenWidth: number) => void
  currentColor: string
  setColor: (currentColor: string) => void
  currentMode: string
  setMode: (currentMode: ChangeEvent<HTMLInputElement>) => void
  themeSettings: boolean
  setThemeSettings: (theme: ((arg: boolean) => boolean) | boolean) => void
};

export type TAction = {
  chat: boolean
  notification: boolean
  cart: boolean
  userProfile: boolean
};

export type TButtonProps = {
  bgColor?: string
  color?: string
  text?: string
  size?: string
  borderRadius?: string
  icon?: any
  width?: string
  bgHoverColor?: string
};

export type TSparkLineProps = {
  data: any
  width: string
  height: string
  color: string
  currentColor: string
  type: string
  id: string
};

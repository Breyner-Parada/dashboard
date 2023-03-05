export type TState = {
  activeMenu: boolean
  setActiveMenu: (activeMenu: ((arg: boolean) => boolean) | boolean) => void
  isClicked: TAction
  handleClick: (name: string) => void
  screenWidth: any
  setScreenWidth: (screenWidth: number) => void
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
  text: string
  size?: string
  borderRadius?: string
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

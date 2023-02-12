export type TState = {
  activeMenu: boolean
  setActiveMenu: (activeMenu: ((arg: boolean) => boolean) | boolean) => void
  isClicked: TAction
  handleClick: (name: string) => void
};

export type TAction = {
  chat: boolean
  notification: boolean
  cart: boolean
  userProfile: boolean
};

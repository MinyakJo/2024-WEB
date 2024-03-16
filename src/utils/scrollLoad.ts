type propsType = {
  scroll: number;
  scrollHeight: number;
  mainHeight: number;
};

export const scrollLoad = ({ scroll, scrollHeight, mainHeight }: propsType) => {
  if (mainHeight - scroll < 800 && scrollHeight !== mainHeight) return true;
  return false;
};

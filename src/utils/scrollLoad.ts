type propsType = {
  scroll: number;
  scrollHeight: number;
  mainHeight: number;
  loadHeight: number;
};

export const scrollLoad = ({
  scroll,
  scrollHeight,
  mainHeight,
  loadHeight,
}: propsType) => {
  if (mainHeight - scroll < loadHeight && scrollHeight !== mainHeight)
    return true;
  return false;
};

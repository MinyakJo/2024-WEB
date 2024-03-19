import { debounce, throttle } from "lodash";
import { scrollLoad } from "./scrollLoad";

type propsType = {
  scrollHeight: number;
  scroll: number;
  mainHeight: number;
  page: number;
  setPage: any;
  loadHeight: number;
  lastPage: number;
};

export const infiniteScroll = throttle(
  ({
    scrollHeight,
    scroll,
    mainHeight,
    page,
    setPage,
    lastPage,
    loadHeight,
  }: propsType) => {
    if (
      scrollLoad({ scroll, scrollHeight, mainHeight, loadHeight }) &&
      page < lastPage
    ) {
      // setPage 중복 방지
      const debounceSetPage = debounce(() => {
        setPage(page + 1);
      }, 100);
      debounceSetPage();
    }
  },
  100
);

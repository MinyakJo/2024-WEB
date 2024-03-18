import { debounce, throttle } from "lodash";
import { scrollLoad } from "./scrollLoad";

type propsType = {
  scrollHeight: number;
  scroll: number;
  mainHeight: number;
  data?: any;
  page: number;
  setPage: any;
};

export const infiniteScroll = throttle(
  ({ scrollHeight, scroll, mainHeight, data, page, setPage }: propsType) => {
    //데이터가 있다면
    if (data?.result) {
      if (
        scrollLoad({ scroll, scrollHeight, mainHeight }) &&
        page < data.result.lastPage
      ) {
        // setPage 중복 방지
        const debounceSetPage = debounce(() => {
          setPage(page + 1);
        }, 100);
        debounceSetPage();
      }
    }
  },
  100
);

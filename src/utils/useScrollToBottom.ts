import { useEffect } from "react";

type propsType = {
  useRef: React.RefObject<HTMLElement>;
  dependency?: any;
  scroll?: number;
};

const useScrollToBottom = ({ useRef, dependency, scroll }: propsType) => {
  useEffect(() => {
    if (useRef.current !== null) {
      useRef.current.scrollTo({
        top: scroll,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [useRef, dependency]);
};

export default useScrollToBottom;

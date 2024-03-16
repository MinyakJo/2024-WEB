import { useEffect } from "react";

type propsType = {
  useRef: React.RefObject<HTMLElement>;
  element?: any;
};

const useScrollToBottom = ({ useRef, element }: propsType) => {
  useEffect(() => {
    if (useRef.current !== null) {
      useRef.current.scrollTo({
        top: useRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [useRef, element]);
};

export default useScrollToBottom;

import { useEffect, useRef, useCallback } from "react";

export default function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();

  const handleClick = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  }, [handler]);

  useEffect(() => {
    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handleClick, listenCapturing]);

  return ref;
} 
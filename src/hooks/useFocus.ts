import { RefObject, useEffect, useRef } from "react";

const useFocus = (): RefObject<HTMLInputElement> => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};

export default useFocus;

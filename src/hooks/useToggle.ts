import { useState } from "react";

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  return [value, () => setValue((value) => !value)];
};

export default useToggle;

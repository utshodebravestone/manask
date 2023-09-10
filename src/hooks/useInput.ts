import { Dispatch, SetStateAction, useState } from "react";

const useForm = <T>(
  initialValue: T
): {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  resetValue: () => void;
} => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    resetValue: () => setValue(initialValue),
  };
};

export default useForm;

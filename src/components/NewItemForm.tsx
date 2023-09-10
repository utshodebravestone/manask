import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import useFocus from "../hooks/useFocus";
import useInput from "../hooks/useInput";

type Props = {
  onAdd(text: string): void;
};

const NewItemForm = ({ onAdd }: Props) => {
  const { value, setValue } = useInput("");
  const ref = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") onAdd(value);
        }}
      />
      <NewItemButton onClick={() => onAdd(value)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;

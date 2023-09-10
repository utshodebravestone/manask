import { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";

type Props = {
  onAdd(text: string): void;
};

const NewItemForm = ({ onAdd }: Props) => {
  const [text, setText] = useState("");

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;

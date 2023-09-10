import useToggle from "../hooks/useToggle";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";

type Props = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

const AddNewItem = ({ onAdd, toggleButtonText, dark }: Props) => {
  const [showForm, toggleForm] = useToggle(false);

  if (showForm)
    return (
      <NewItemForm
        onAdd={(text) => {
          toggleForm();
          onAdd(text);
        }}
      />
    );

  return (
    <AddItemButton dark={dark} onClick={() => toggleForm()}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;

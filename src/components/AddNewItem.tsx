import useToggle from "../hooks/useToggle";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";

type Props = {
  onAdd(text: string): void;
  toggleButtonText: string;
};

const AddNewItem = ({ onAdd, toggleButtonText }: Props) => {
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
    <AddItemButton onClick={() => toggleForm()}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;

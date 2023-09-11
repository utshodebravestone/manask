import { ColumnContainer, ColumnTitle } from "../styles";
import useAppState from "../hooks/useAppState";
import Card from "./Card";
import AddNewItem from "./AddNewItem";
import { addTask } from "../state/actions";

type Props = {
  id: string;
  text: string;
};

const Column = ({ id, text }: Props) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch(addTask(text, id))}
        toggleButtonText="+ Add another task"
      />
    </ColumnContainer>
  );
};

export default Column;

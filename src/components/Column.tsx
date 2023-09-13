import { ColumnContainer, ColumnTitle } from "../styles";
import useAppState from "../hooks/useAppState";
import Card from "./Card";
import AddNewItem from "./AddNewItem";
import { addTask, moveList } from "../state/actions";
import { useRef } from "react";
import useDraggable from "../hooks/useDraggable";
import { useDrop } from "react-dnd";

type Props = {
  id: string;
  text: string;
};

const Column = ({ id, text }: Props) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: () => {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      }
    },
  });
  const { drag } = useDraggable({ type: "COLUMN", id, text });

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref}>
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

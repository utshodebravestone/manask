import { ConnectDragSource, useDrag } from "react-dnd";
import { DrabbleItem } from "../state/types";
import useAppState from "./useAppState";
import { setDraggedItem } from "../state/actions";

const useDraggable = (item: DrabbleItem): { drag: ConnectDragSource } => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => {
      dispatch(setDraggedItem(null));
    },
  });

  return { drag };
};

export default useDraggable;

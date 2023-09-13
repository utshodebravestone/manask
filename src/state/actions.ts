import { DrabbleItem } from "./types";

interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

interface MoveListAction {
  type: "MOVE_LIST";
  payload: { draggedId: string; hoverId: string };
}

interface SetDraggedItem {
  type: "SET_DRAGGED_ITEM";
  payload: DrabbleItem | null;
}

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItem;

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: { text, listId },
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: { draggedId, hoverId },
});

export const setDraggedItem = (draggedItem: DrabbleItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});

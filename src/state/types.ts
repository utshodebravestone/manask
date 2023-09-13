export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DrabbleItem | null;
};

export type DrabbleColumn = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type DrabbleItem = DrabbleColumn;

import { Dispatch, PropsWithChildren, createContext } from "react";
import { AppState, DrabbleItem, List, Task } from "./types";
import { Action } from "./actions";
import { appStateReducer } from "./appStateReducer";
import { useImmerReducer } from "use-immer";

type Props = {
  draggedItem: DrabbleItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Build a DSL parser with Haskell" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Build an HTML Generator in Haskell" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Start learning Haskell" }],
    },
  ],
  draggedItem: null,
};

export const AppStateContext = createContext<Props>({} as Props);

export const AppStateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { draggedItem, lists } = state;

  const getTasksByListId = (id: string): Task[] =>
    lists.find((list) => list.id === id)?.tasks || [];

  return (
    <AppStateContext.Provider
      value={{ draggedItem, lists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

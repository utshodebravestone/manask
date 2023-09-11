import { FC } from "react";

import { AppContainer } from "../styles";
import Column from "./Column";
import AddNewItem from "./AddNewItem";
import useAppState from "../hooks/useAppState";
import { addList } from "../state/actions";

const App: FC = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch(addList(text))}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
};

export default App;

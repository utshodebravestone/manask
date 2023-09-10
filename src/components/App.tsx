import { FC } from "react";

import { AppContainer, ColumnTitle, FullColumnContainer } from "../styles";
import Column from "./Column";
import AddNewItem from "./AddNewItem";
import Card from "./Card";

const App: FC = () => {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card text="Make the app data driven" />
        <Card text="Use ContextAPI to store global state" />
        <Card text="Write tests if you can" />
        <Card text="Choose a better color theme" />
        <AddNewItem
          onAdd={(text) => console.log(text)}
          toggleButtonText="+ Add another task"
          dark
        />
      </Column>
      <Column title="In Progress">
        <Card text="Make the design" />
        <AddNewItem
          onAdd={(text) => console.log(text)}
          toggleButtonText="+ Add another task"
          dark
        />
      </Column>
      <Column title="Done">
        <Card text="Start the project" />
        <Card text="Use Bun for speed's sake" />
        <AddNewItem
          onAdd={(text) => console.log(text)}
          toggleButtonText="+ Add another task"
          dark
        />
      </Column>
      <FullColumnContainer>
        <AddNewItem
          onAdd={(text) => console.log(text)}
          toggleButtonText="+ Add another list"
        />
      </FullColumnContainer>
      <FullColumnContainer>
        <ColumnTitle>
          <h2>Mange Your Tasks with Monask</h2>
        </ColumnTitle>
      </FullColumnContainer>
    </AppContainer>
  );
};

export default App;

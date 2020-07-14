import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import HomePage from "./HomePage";
import Header from "./Header";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <HomePage />
    </DndProvider>
  );
};

export default App;

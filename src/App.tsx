import { Dispatch, SetStateAction, createContext, useState } from "react";

import Scoreboard from "./lib/football-world-cup";
import { PublicGame } from "./lib/football-world-cup/scoreboard";

import List from "./components/list";
import Form from "./components/ui/form/Form";

import "./App.css";

export type StoreType = {
  scoreboard: Scoreboard;
  setGames: Dispatch<SetStateAction<PublicGame[]>>;
};

const initialState: StoreType = {
  scoreboard: new Scoreboard(),
  setGames: () => {},
};

export const AppContext = createContext<StoreType>({
  ...initialState,
});

function App() {
  const [games, setGames] = useState<PublicGame[]>([]);

  return (
    <AppContext.Provider value={{ ...initialState, setGames }}>
      <main>
        <List games={games} />
        <Form />
      </main>
    </AppContext.Provider>
  );
}

export default App;

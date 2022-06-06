import { Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import LastPlayed from "./Pages/LastPlayed";
import LibraryPage from "./Pages/Library";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <Route path={"/"} exact>
        <HomePage />
      </Route>
      <Route path={"/library"}>
        <LibraryPage />
      </Route>
      <Route path={"/search"}>
        <SearchPage />
      </Route>
      <Route path={"/lastPlayed"}>
        <LastPlayed />
      </Route>
    </>
  );
}

export default App;

import { Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/Home";
import LastPlayed from "./Pages/LastPlayed";
import LibraryPage from "./Pages/Library";
import SearchPage from "./Pages/SearchPage";
import YourLiking from "./Pages/YourLiking";

function App() {
  return (
    <>
      <Route path={"/"} exact>
        <MainLayout component="home">
          <HomePage />
        </MainLayout>
      </Route>
      <Route path={"/library"}>
        <MainLayout>
          <LibraryPage />
        </MainLayout>
      </Route>
      <Route path={"/search"}>
        <MainLayout component="search">
          <SearchPage />
        </MainLayout>
      </Route>
      <Route path={"/lastPlayed"}>
        <MainLayout>
          <LastPlayed />
        </MainLayout>
      </Route>
      <Route path={"/yourLiking"}>
        <MainLayout>
          <YourLiking />
        </MainLayout>
      </Route>
    </>
  );
}

export default App;

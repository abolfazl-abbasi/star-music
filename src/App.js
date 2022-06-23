import { Route } from "react-router-dom";
import MusicPlayerDesk from "./Components/MusicPlayerDesk";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/Home";
import LastPlayed from "./Pages/LastPlayed";
import LibraryPage from "./Pages/Library";
import PostPage from "./Pages/PostPage";
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
      <Route path={"/post/:id"}>
        <MainLayout>
          <PostPage />
        </MainLayout>
      </Route>
    </>
  );
}

export default App;

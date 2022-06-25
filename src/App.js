import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/Home";
import LastPlayed from "./Pages/LastPlayed";
import LibraryPage from "./Pages/Library";
import SearchPage from "./Pages/SearchPage";
import YourLiking from "./Pages/YourLiking";

function App() {
  switch (window.location.pathname) {
    case "/":
      return (
        <MainLayout>
          <HomePage />
        </MainLayout>
      );
    case "/library":
      return (
        <MainLayout>
          <LibraryPage />
        </MainLayout>
      );
    case "/search":
      return (
        <MainLayout>
          <SearchPage />
        </MainLayout>
      );
    case "/lastPlayed":
      return (
        <MainLayout>
          <LastPlayed />
        </MainLayout>
      );
    case "/yourLiking":
      return (
        <MainLayout>
          <YourLiking />
        </MainLayout>
      );

    default:
      break;
  }
}

export default App;

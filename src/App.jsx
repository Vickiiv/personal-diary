import { EntriesProvider } from "./context/EntriesContext";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";
import ScrollToTopBtn from "./components/UI/ScrollToTopBtn";

function App() {
  return (
    <>
      <EntriesProvider>
        <Header />
        <MainLayout />
        <Footer />
      </EntriesProvider>
      <ScrollToTopBtn />
    </>
  );
}

export default App;

import { EntriesProvider } from "./context/EntriesContext";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";

function App() {
  return (
    <EntriesProvider>
      <Header />
      <MainLayout />
      <Footer />
    </EntriesProvider>
  );
}

export default App;

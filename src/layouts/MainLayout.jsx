import EntrySort from "../components/UI/EntrySort";
import AddEntryModal from "../components/Form/AddEntryModal";
import EntryList from "../components/Entry/EntryList";

function MainLayout() {
  return (
    <main>
      <EntrySort />
      <AddEntryModal />
      <EntryList />
    </main>
  );
}

export default MainLayout;

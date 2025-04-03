import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contacts from "./data/contacts.json";

const App = () => {
  const [userSearch, setUserSearch] = useState("");
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={userSearch} onChange={setUserSearch} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;

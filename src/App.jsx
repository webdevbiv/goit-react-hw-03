import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contacts from "./data/contacts.json";

const App = () => {
  const [userSearch, setUserSearch] = useState("");

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(userSearch.toLowerCase())
  );

  const handleUserSearch = (e) => setUserSearch(e.target.value);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={userSearch} onChange={handleUserSearch} />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default App;

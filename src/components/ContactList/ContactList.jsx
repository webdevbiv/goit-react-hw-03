import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            onClick={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

const Contact = ({ name, number, id, onClick }) => {
  return (
    <li key={id}>
      <div>
        <div>{name}</div>
        <div>{number}</div>
      </div>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

const Contact = ({ name, number, id }) => {
  return (
    <li key={id}>
      <div>
        <div>{name}</div>
        <div>{number}</div>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;

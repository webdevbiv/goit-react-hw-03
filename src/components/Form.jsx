export const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);

    const form = evt.target;
    const { login, password } = form.elements;

    console.log(form.elements);
    console.log(`Login: ${login.value}, Password: ${password.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

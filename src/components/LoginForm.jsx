const LoginForm = ({ userData, onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={userData.login}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={onChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
